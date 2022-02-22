import { ThemeProps } from './theme';
export declare type Resolver<T> = (props: ThemeProps) => T;
export declare type OmitThemeProp<Args extends any[]> = Args[3] extends ThemeProps ? [Args[0], Args[1], Args[2]] : Args[2] extends ThemeProps ? [Args[0], Args[1]] : [Args[0]];
export declare enum ColorMode {
    'light' = "light",
    'dark' = "dark"
}
export declare type SetColorMode = (_mode: keyof typeof ColorMode) => void;
