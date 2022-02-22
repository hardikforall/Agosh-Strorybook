import { __spreadArray } from "tslib";
import { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { getColor, getSpace, getCommon, getBorderRadius } from './getters';
import { useTheme as useColorMode } from 'next-themes';
function partialGetter(getter, props) {
    return function x() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return getter.apply(void 0, __spreadArray(__spreadArray([], args, false), [props], false));
    };
}
export default function useTheme() {
    // use useColorMode from 'next-themes' only for toggling, setting, and injecting the script
    var _a = useColorMode(), colorMode = _a.resolvedTheme, setTheme = _a.setTheme;
    var setColorMode = setTheme;
    var theme = useContext(ThemeContext);
    return useMemo(function () {
        var themeProps = { theme: theme };
        return {
            color: partialGetter(getColor, themeProps),
            space: partialGetter(getSpace, themeProps),
            borderRadius: partialGetter(getBorderRadius, themeProps),
            common: partialGetter(getCommon, themeProps),
            setColorMode: setColorMode,
            colorMode: colorMode,
        };
    }, [theme, setColorMode, colorMode]);
}
//# sourceMappingURL=useTheme.js.map