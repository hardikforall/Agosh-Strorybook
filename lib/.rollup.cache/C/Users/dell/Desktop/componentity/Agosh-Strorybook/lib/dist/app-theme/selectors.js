import { __spreadArray } from "tslib";
import { getColor, getSpace, getCommon, getBorderRadius } from './getters';
function createSelector(getter) {
    function x() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length === getter.length) {
            return getter.apply(void 0, args);
        }
        return function (props) { return getter.apply(void 0, __spreadArray(__spreadArray([], args, false), [props], false)); };
    }
    return x;
}
export var color = createSelector(getColor);
export var spacing = createSelector(getSpace);
export var borderRadius = createSelector(getBorderRadius);
export var common = createSelector(getCommon);
//# sourceMappingURL=selectors.js.map