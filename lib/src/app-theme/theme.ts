import * as tokens from './tokens';

export const lightMode = {
  colors: {
    ...tokens.lightMode.colors,
    // FIXME: picked following 4 colors from figma using eye-dropper tool because on figma the colors are coming from complex combination of layers
    elevatedDefaultBg: '#F8F2F8',
    elevatedHoverBg: '#E8E0EF',
    elevatedFocusBg: '#E7DFEE',
    elevatedActiveBg: '#E7DFEE',

    // FIXME: Following colors are not available on the DSP at this moment
    disabledBg: '#1F1F1F',
    disabledBorder: '#1F1F1F',
    tonalHoverBg: '#1D192B',
    textButtonBg: '#6750A4',
    elevation1:
      '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
    elevation2:
      '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
    elevationFilter: 'none',
    transparent: 'transparent',
  },
  shadows: tokens.lightMode.shadows,
};

export const darkMode = {
  colors: {
    ...tokens.darkMode.colors, // FIXME: picked following 4 colors from figma using eye-dropper tool because on figma the colors are coming from complex combination of layers
    elevatedDefaultBg: '#262329',
    elevatedHoverBg: '#393441',
    elevatedFocusBg: '#3A3543',
    elevatedActiveBg: '#3A3543',

    // FIXME: Following colors are not available on the DSP at this moment.
    disabledBg: '#E3E3E3',
    disabledBorder: '#E3E3E3',
    tonalHoverBg: '#E8DEF8',
    textButtonBg: '#D0BCFF',
    elevation1: '0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
    elevation2: '0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
    elevationFilter: 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.3))',
    transparent: 'transparent',
  },
  shadows: tokens.darkMode.shadows,
};

const theme = {
  ...tokens.common,
  colors: { ...lightMode.colors },
  shadows: { ...lightMode.shadows },

  // FIXME: Following properties are not available on the DSP at this moment.
  space: (unit: number) => `${unit * 8}px`,
  borderRadius: {
    rounded: '100rem',
  },
};

export type Theme = typeof theme;

export type ThemeProps = { theme: Theme };

export type ColorType = keyof Theme['colors'];

export type BorderRadius = keyof Theme['borderRadius'];

export default theme;
