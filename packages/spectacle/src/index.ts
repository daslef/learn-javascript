export { default as Deck } from './components/deck';
export { default as Slide, SlideContext } from './components/slide/slide';
export { Appear, Stepper } from './components/appear';
export { default as CodePane, codePaneThemes } from './components/code-pane';
export {
  OrderedList,
  Quote,
  Heading,
  ListItem,
  UnorderedList,
  Text,
  Link,
  CodeSpan,
  FitText
} from './components/typography';
export {
  Table,
  TableCell,
  TableRow,
  TableHeader,
  TableBody
} from './components/table';
export type { TableProps } from './components/table';
export { FlexBox, Grid, Box } from './components/layout-primitives';
export { Image, FullSizeImage } from './components/image';
export { default as Notes } from './components/notes';
export { default as Progress } from './components/progress';
export type { ProgressProps } from './components/progress';
export { default as AnimatedProgress } from './components/animated-progress';
export type { AnimatedProgressProps } from './components/animated-progress';
export { default as FullScreen } from './components/fullscreen';
export { default as SlideLayout } from './components/slide-layout';
export { DefaultTemplate } from './components/default-template';

export { default as SpectacleLogo } from './components/logo';
export { removeNotes, isolateNotes } from './utils/notes';
export { default as indentNormalizer } from './utils/indent-normalizer';
export { DeckContext } from './components/deck/deck';
export type { DeckProps, SlideId } from './components/deck/deck';
export { default as useMousetrap } from './hooks/use-mousetrap';
export { useSteps } from './hooks/use-steps';
export { default as defaultTheme } from './theme/default-theme';
export type {
  SpectacleTheme,
  SpectacleThemeOverrides
} from './theme/default-theme';
export {
  fadeTransition,
  slideTransition,
  defaultTransition
} from './components/transitions';
export type { SlideTransition } from './components/transitions';
