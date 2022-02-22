import { ColorType, ThemeProps, BorderRadius } from './theme';
export declare function getColor(type: ColorType, props: ThemeProps): string;
export declare function getSpace(unit: number, props: ThemeProps): string;
export declare function getBorderRadius(borderRadius: BorderRadius, props: ThemeProps): string;
declare type PartialTheme = Omit<ThemeProps['theme'], 'space' | 'colors' | 'borderRadius'>;
export declare function getCommon(key: keyof PartialTheme, props: ThemeProps): string | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    pattern: string;
    gutterSize: number;
    alignment: string;
    count: number;
    offset: number;
} | {
    pattern: string;
    gutterSize: number;
    alignment: string;
    count: number;
    offset: number;
} | {
    pattern: string;
    sectionSize: number;
    gutterSize: number;
    alignment: string;
    count: number;
    offset: number;
} | {
    pattern: string;
    sectionSize: number;
    gutterSize: number;
    alignment: string;
    count: number;
    offset: number;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    pattern: string;
    sectionSize: number;
    gutterSize: number;
    alignment: string;
    count: number;
} | {
    pattern: string;
    sectionSize: number;
    gutterSize: number;
    alignment: string;
    count: number;
    offset: number;
} | {
    pattern: string;
    sectionSize: number;
    gutterSize: number;
    alignment: string;
    count: number;
    offset: number;
} | {
    pattern: string;
    sectionSize: number;
    gutterSize: number;
    alignment: string;
    count: number;
} | {
    pattern: string;
    sectionSize: number;
    gutterSize: number;
    alignment: string;
    count: number;
} | {
    pattern: string;
    sectionSize: number;
    gutterSize: number;
    alignment: string;
    count: number;
    offset: number;
} | {
    pattern: string;
    sectionSize: number;
    gutterSize: number;
    alignment: string;
    count: number;
    offset: number;
} | {
    pattern: string;
    gutterSize: number;
    alignment: string;
    count: number;
    offset: number;
} | {
    pattern: string;
    gutterSize: number;
    alignment: string;
    count: number;
    offset: number;
} | {
    pattern: string;
    sectionSize: number;
    gutterSize: number;
    alignment: string;
    count: number;
    offset: number;
} | {
    pattern: string;
    sectionSize: number;
    gutterSize: number;
    alignment: string;
    count: number;
    offset: number;
} | {
    pattern: string;
    gutterSize: number;
    alignment: string;
    count: number;
    offset: number;
} | {
    pattern: string;
    sectionSize: number;
    gutterSize: number;
    alignment: string;
    count: number;
    offset: number;
} | {
    pattern: string;
    sectionSize: number;
    gutterSize: number;
    alignment: string;
    count: number;
    offset: number;
} | {
    pattern: string;
    sectionSize: number;
    gutterSize: number;
    alignment: string;
    count: number;
    offset: number;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    pattern: string;
    gutterSize: number;
    alignment: string;
    count: number;
    offset: number;
} | {
    pattern: string;
    sectionSize: number;
    gutterSize: number;
    alignment: string;
    count: number;
    offset: number;
} | {
    pattern: string;
    sectionSize: number;
    gutterSize: number;
    alignment: string;
    count: number;
    offset: number;
} | {
    pattern: string;
    sectionSize: number;
    gutterSize: number;
    alignment: string;
    count: number;
    offset: number;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
} | {
    Elevation10: {
        shadowType: string;
        radius: number;
        color: string;
        offsetX: number;
        offsetY: number;
        spread: number;
    };
    Elevation11: {
        shadowType: string;
        radius: number;
        color: string;
        offsetX: number;
        offsetY: number;
        spread: number;
    };
    Elevation20: {
        shadowType: string;
        radius: number;
        color: string;
        offsetX: number;
        offsetY: number;
        spread: number;
    };
    Elevation21: {
        shadowType: string;
        radius: number;
        color: string;
        offsetX: number;
        offsetY: number;
        spread: number;
    };
    Elevation30: {
        shadowType: string;
        radius: number;
        color: string;
        offsetX: number;
        offsetY: number;
        spread: number;
    };
    Elevation31: {
        shadowType: string;
        radius: number;
        color: string;
        offsetX: number;
        offsetY: number;
        spread: number;
    };
    Elevation40: {
        shadowType: string;
        radius: number;
        color: string;
        offsetX: number;
        offsetY: number;
        spread: number;
    };
    Elevation41: {
        shadowType: string;
        radius: number;
        color: string;
        offsetX: number;
        offsetY: number;
        spread: number;
    };
    Elevation50: {
        shadowType: string;
        radius: number;
        color: string;
        offsetX: number;
        offsetY: number;
        spread: number;
    };
    Elevation51: {
        shadowType: string;
        radius: number;
        color: string;
        offsetX: number;
        offsetY: number;
        spread: number;
    };
};
export {};
