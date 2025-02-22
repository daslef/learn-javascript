export const DEFAULT_SLIDE_ELEMENT_INDEX = -1;
export const DEFAULT_SLIDE_INDEX = 0;
export const SYSTEM_FONT =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Helvetica, sans-serif';

export const KEYBOARD_SHORTCUTS = {
  DEFAULT_MODE: 'mod+shift+d',
  PRESENTER_MODE: 'mod+shift+p',
  OVERVIEW_MODE: 'mod+shift+o',
  PRINT_MODE: 'mod+shift+r',
  EXPORT_MODE: 'mod+shift+e',
  NEXT_SLIDE: 'right',
  PREVIOUS_SLIDE: 'left'
};
export type KeyboardShortcutTypes = keyof typeof KEYBOARD_SHORTCUTS;

export const KEYBOARD_SHORTCUTS_IDS = {
  DEFAULT_MODE: 'DEFAULT_MODE',
  PRESENTER_MODE: 'PRESENTER_MODE',
  OVERVIEW_MODE: 'OVERVIEW_MODE',
  PRINT_MODE: 'PRINT_MODE',
  EXPORT_MODE: 'EXPORT_MODE',
  NEXT_SLIDE: 'NEXT_SLIDE',
  PREVIOUS_SLIDE: 'PREVIOUS_SLIDE'
};

export const SPECTACLE_MODES = {
  DEFAULT_MODE: 'DEFAULT_MODE',
  PRESENTER_MODE: 'PRESENTER_MODE',
  OVERVIEW_MODE: 'OVERVIEW_MODE',
  PRINT_MODE: 'PRINT_MODE',
  EXPORT_MODE: 'EXPORT_MODE'
} as const;
type ValuesOf<T> = T[keyof T];
export type SpectacleMode = ValuesOf<typeof SPECTACLE_MODES>;

export type ModeSearchParams = {
  presenterMode?: boolean;
  overviewMode?: boolean;
  printMode?: boolean;
  exportMode?: boolean;
};

export type ToggleModeParams = {
  newMode: SpectacleMode;
  senderSlideIndex?: number;
  e?: Event;
};
