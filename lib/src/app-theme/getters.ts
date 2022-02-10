import defaultTheme, { ColorType, ThemeProps, BorderRadius } from './theme';

function getTheme(props: ThemeProps) {
  return props.theme && props.theme.colors ? props.theme : defaultTheme;
}

export function getColor(type: ColorType, props: ThemeProps) {
  return getTheme(props).colors[type];
}

export function getSpace(unit: number, props: ThemeProps) {
  return getTheme(props).space(unit);
}

export function getBorderRadius(borderRadius: BorderRadius, props: ThemeProps) {
  return getTheme(props).borderRadius[borderRadius];
}

type PartialTheme = Omit<
  ThemeProps['theme'],
  'space' | 'colors' | 'borderRadius'
>;

export function getCommon(key: keyof PartialTheme, props: ThemeProps) {
  const value = getTheme(props)[key];

  // since we are getting lineHeight as number e.g. 20, convert that 20 -> "20px"
  if (
    typeof value !== 'string' &&
    'lineHeight' in value &&
    typeof value.lineHeight !== 'string'
  ) {
    value['lineHeight'] = `${value['lineHeight']}px` as any;
  }

  return value;
}
