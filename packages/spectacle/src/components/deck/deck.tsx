import {
  useState,
  useEffect,
  forwardRef,
  useMemo,
  useCallback,
  createContext,
  ElementType,
  useImperativeHandle,
  FC,
  RefAttributes,
  ReactNode,
  CSSProperties,
  useId
} from 'react';
import styled, { CSSObject, ThemeProvider } from 'styled-components';
import { useCollectSlides } from '../../hooks/use-slides';
import useAspectRatioFitting from '../../hooks/use-aspect-ratio-fitting';
import useDeckState, {
  DeckStateAndActions,
  DeckView
} from '../../hooks/use-deck-state';
import useMousetrap from '../../hooks/use-mousetrap';
import useLocationSync from '../../hooks/use-location-sync';
import { mergeTheme } from '../../theme';
import * as queryStringMapFns from '../../location-map-fns/query-string';
import {
  overviewFrameStyle,
  overviewWrapperStyle,
  printFrameStyle,
  printWrapperStyle
} from './deck-styles';
import defaultTheme, {
  SpectacleThemeOverrides
} from '../../theme/default-theme';
import { defaultTransition, SlideTransition } from '../transitions';
import { SwipeEventData } from 'react-swipeable';
import TemplateWrapper from '../template-wrapper';

export type DeckContextType = {
  deckId: string | number;
  slideCount: number;
  slideIds: SlideId[];
  useAnimations: boolean;
  navigationDirection: number;
  slidePortalNode: HTMLDivElement;
  onSlideClick(e: MouseEvent, slideId: SlideId): void;
  onMobileSlide(eventData: SwipeEventData): void;
  theme?: SpectacleThemeOverrides;
  frameOverrideStyle: CSSProperties;
  wrapperOverrideStyle: CSSProperties;
  backdropNode: HTMLDivElement;
  notePortalNode: HTMLDivElement;
  initialized: boolean;
  activeView: {
    slideId: SlideId;
    slideIndex: number;
    stepIndex: number;
  };
  pendingView: {
    slideId: SlideId;
    slideIndex: number;
    stepIndex: number;
  };
  skipTo(options: { slideIndex: number; stepIndex: number }): void;
  stepForward(): void;
  stepBackward(): void;
  advanceSlide(): void;
  regressSlide(): void;
  commitTransition(newView?: { stepIndex: number }): void;
  cancelTransition(): void;
  template: TemplateFn | ReactNode;
  transition: SlideTransition;
  backgroundImage?: string;
  inOverviewMode: boolean;
  inPrintMode: boolean;
};

export const DeckContext = createContext<DeckContextType>(null as any);
DeckContext.displayName = 'DeckContext';
const noop = () => { };

/**
 * By default, Spectacle will maintain a 100% zoom on print/export mode. This can be customized if the
 * user wants to select a different paper size.
 */
const DEFAULT_PRINT_SCALE = 1.0;
const DEFAULT_OVERVIEW_SCALE = 0.25;

type PortalProps = {
  fitAspectRatioStyle: CSSObject;
  overviewMode: boolean;
  printMode: boolean;
};
const Portal = styled.div<PortalProps>(
  ({ fitAspectRatioStyle, overviewMode, printMode }) => [
    !printMode && { overflow: 'hidden' },
    !printMode && fitAspectRatioStyle,
    overviewMode && {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      alignContent: 'flex-start',
      transform: 'scale(1)',
      overflowY: 'scroll',
      width: '100%',
      height: '100%'
    },
    printMode && {
      display: 'block'
    }
  ]
);

export const DeckInternal = forwardRef<DeckRef, DeckInternalProps>(
  (
    {
      id: userProvidedId,
      className = '',
      backdropStyle: userProvidedBackdropStyle,
      overviewMode = false,
      printMode = false,
      exportMode = false,
      overviewScale = DEFAULT_OVERVIEW_SCALE,
      printScale = DEFAULT_PRINT_SCALE,
      template,
      theme: {
        Backdrop: UserProvidedBackdropComponent,
        backdropStyle: themeProvidedBackdropStyle = {
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh'
        } as CSSObject,
        suppressBackdropFallback: themeSuppressBackdropFallback,
        ...restTheme
      } = {},

      onSlideClick = noop,
      onMobileSlide = noop,

      disableInteractivity = false,
      notePortalNode,
      useAnimations = true,
      children,
      onActiveStateChange: onActiveStateChangeExternal = noop,
      initialState: initialDeckState = {
        slideIndex: 0,
        stepIndex: 0
      },
      suppressBackdropFallback = false,
      transition = defaultTransition,
      backgroundImage
    },
    ref
  ) => {
    const id = useId();
    const [deckId] = useState(userProvidedId || id);
    const {
      width: nativeSlideWidth = defaultTheme.size.width,
      height: nativeSlideHeight = defaultTheme.size.height
    } = restTheme.size || {};

    const {
      initialized,
      pendingView,
      activeView,
      navigationDirection,

      initializeTo,
      skipTo,
      stepForward,
      stepBackward,
      advanceSlide,
      regressSlide,
      commitTransition,
      cancelTransition
    } = useDeckState(initialDeckState);

    const [
      setPlaceholderContainer,
      slideIds,
      slideIdsWithTemplates,
      slideIdsInitialized
    ] = useCollectSlides();

    // It really is much easier to just expose methods to the outside world that
    // drive the presentation through its state rather than trying to implement a
    // declarative API.
    useImperativeHandle(
      ref,
      () => ({
        initialized,
        activeView,
        initializeTo,
        skipTo,
        stepForward,
        stepBackward,
        advanceSlide,
        regressSlide,
        numberOfSlides: slideIds.length
      }),
      [
        initialized,
        activeView,
        initializeTo,
        skipTo,
        stepForward,
        stepBackward,
        advanceSlide,
        regressSlide,
        slideIds
      ]
    );

    useMousetrap(
      disableInteractivity
        ? {}
        : {
          left: () => stepBackward(),
          right: () => stepForward()
        },
      []
    );

    const [syncLocation, onActiveStateChange] = useLocationSync({
      disableInteractivity,
      setState: skipTo,
      ...queryStringMapFns
    });

    useEffect(() => {
      if (!initialized) return;
      onActiveStateChange(activeView);
      onActiveStateChangeExternal(activeView);
    }, [
      initialized,
      activeView,
      onActiveStateChange,
      onActiveStateChangeExternal
    ]);

    useEffect(() => {
      const initialView = syncLocation({
        slideIndex: 0,
        stepIndex: 0
      });
      initializeTo(initialView);
    }, [initializeTo, syncLocation]);


    const handleSlideClick = useCallback<
      NonNullable<DeckInternalProps['onSlideClick']>
    >(
      (e, slideId) => {
        const slideIndex = slideIds.indexOf(slideId);
        onSlideClick(e, slideIndex);
      },
      [onSlideClick, slideIds]
    );

    const activeSlideId = slideIds[activeView.slideIndex];
    const pendingSlideId = slideIds[pendingView.slideIndex];

    const fullyInitialized = initialized && slideIdsInitialized;

    const [slidePortalNode, setSlidePortalNode] =
      useState<HTMLDivElement | null>();

    const [backdropRef, fitAspectRatioStyle] = useAspectRatioFitting({
      targetWidth: nativeSlideWidth,
      targetHeight: nativeSlideHeight
    });

    const frameStyle = useMemo(() => {
      const options = {
        printScale,
        overviewScale,
        nativeSlideWidth,
        nativeSlideHeight
      };
      if (overviewMode) {
        return overviewFrameStyle(options);
      } else if (printMode) {
        return printFrameStyle(options);
      }
      return {};
    }, [
      nativeSlideHeight,
      nativeSlideWidth,
      overviewMode,
      overviewScale,
      printMode,
      printScale
    ]);

    const wrapperStyle = useMemo(() => {
      if (overviewMode) {
        return overviewWrapperStyle({ overviewScale });
      } else if (printMode) {
        return printWrapperStyle({ printScale });
      }
      return {};
    }, [overviewMode, overviewScale, printMode, printScale]);

    const backdropStyle = {
      ...themeProvidedBackdropStyle,
      ...userProvidedBackdropStyle
    };
    const BackdropComponent = UserProvidedBackdropComponent || 'div';

    if (
      !backdropStyle['background'] &&
      !backdropStyle['backgroundColor'] &&
      !UserProvidedBackdropComponent &&
      !suppressBackdropFallback &&
      !themeSuppressBackdropFallback
    ) {
      backdropStyle['backgroundColor'] = 'black';
    }

    const doesCurrentSlideHaveItsOwnTemplate =
      slideIdsWithTemplates.has(activeSlideId);

    const templateElement: ReactNode =
      typeof template === 'function'
        ? template({
          slideNumber: activeView.slideIndex + 1,
          numberOfSlides: slideIds.length
        })
        : template;

    return (
      <ThemeProvider
        theme={mergeTheme({
          theme: restTheme,
          printMode: printMode && !exportMode
        })}
      >
        <BackdropComponent
          ref={backdropRef}
          className={className}
          style={{
            ...backdropStyle,
            overflow: 'hidden'
          }}
        >
          <DeckContext.Provider
            value={{
              deckId,
              slideCount: slideIds.length,
              slideIds,
              useAnimations,
              slidePortalNode: slidePortalNode!,
              onSlideClick: handleSlideClick,
              onMobileSlide: onMobileSlide,
              theme: restTheme,
              navigationDirection,

              frameOverrideStyle: frameStyle,
              wrapperOverrideStyle: wrapperStyle,

              backdropNode: backdropRef.current!,
              notePortalNode: notePortalNode!,
              initialized: fullyInitialized,
              activeView: {
                ...activeView,
                slideId: activeSlideId
              },
              pendingView: {
                ...pendingView,
                slideId: pendingSlideId
              },
              skipTo,
              stepForward,
              stepBackward,
              advanceSlide,
              regressSlide,
              commitTransition,
              cancelTransition,
              transition,
              template,
              backgroundImage,
              inOverviewMode: overviewMode,
              inPrintMode: printMode
            }}
          >
            <Portal
              ref={setSlidePortalNode}
              overviewMode={overviewMode}
              printMode={printMode}
              fitAspectRatioStyle={fitAspectRatioStyle}
            >
              {!doesCurrentSlideHaveItsOwnTemplate &&
                !overviewMode &&
                !printMode && (
                  <TemplateWrapper
                    style={{
                      ...wrapperStyle,
                      // Slides are appended to the parent as they are portaled in and end up later in
                      // the source order. Adding zIndex to the template to overlay the sibling slides
                      // once they have been portaled in.
                      zIndex: 1
                    }}
                  >
                    {templateElement}
                  </TemplateWrapper>
                )}
            </Portal>
            <div ref={setPlaceholderContainer} style={{ display: 'none' }}>
              {children}
            </div>
          </DeckContext.Provider>
        </BackdropComponent>
      </ThemeProvider>
    );
  }
);
DeckInternal.displayName = 'Deck';

export const Deck = DeckInternal as FC<DeckProps & RefAttributes<DeckRef>>;

Deck.displayName = 'Deck';

export type TemplateFn = (options: {
  slideNumber: number;
  numberOfSlides: number;
}) => ReactNode;
export type SlideId = string | number;
type BackdropOverrides = {
  Backdrop?: ElementType;
  backdropStyle?: CSSObject;
  /**
   * @deprecated set a value to one of the `Backdrop`,
   * `backdropStyle.background`, or `backdropStyle.backgroundColor` properties
   * inside the `theme` prop object instead
   */
  suppressBackdropFallback?: boolean;
};

export type DeckRef = Omit<
  DeckStateAndActions,
  | 'cancelTransition'
  | 'commitTransition'
  | 'navigationDirection'
  | 'pendingView'
> & {
  numberOfSlides: number;
};
export type DeckProps = {
  id?: string | number;
  className?: string;
  children: ReactNode;
  theme?: SpectacleThemeOverrides & BackdropOverrides;
  template?: TemplateFn | ReactNode;
  printScale?: number;
  overviewScale?: number;
  transition?: SlideTransition;
  /**
   * @deprecated set a value to one of the `Backdrop`,
   * `backdropStyle.background`, or `backdropStyle.backgroundColor` properties
   * inside the `theme` prop object instead
   */
  suppressBackdropFallback?: boolean;
  backgroundImage?: string;
};
/**
 * These types are only used internally,
 * and are not officially part of the public API
 */
export type DeckInternalProps = DeckProps & {
  initialState?: DeckView;
  printMode?: boolean;
  exportMode?: boolean;
  overviewMode?: boolean;
  onSlideClick?(e: Event, slideId: SlideId): void;
  onMobileSlide?(eventData: SwipeEventData): void;
  disableInteractivity?: boolean;
  useAnimations?: boolean;
  notePortalNode?: HTMLDivElement | null;
  /** @deprecated use the backdropStyle property inside the `theme` prop object instead */
  backdropStyle?: Partial<CSSStyleDeclaration>;
  onActiveStateChange?: (activeView: DeckView) => void;
  backgroundImage?: string;
};

export default Deck;
