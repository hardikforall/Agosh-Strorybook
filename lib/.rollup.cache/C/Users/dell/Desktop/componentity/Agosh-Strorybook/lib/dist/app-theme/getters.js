import defaultTheme from './theme';
function getTheme(props) {
    return props.theme && props.theme.colors ? props.theme : defaultTheme;
}
export function getColor(type, props) {
    return getTheme(props).colors[type];
}
export function getSpace(unit, props) {
    return getTheme(props).space(unit);
}
export function getBorderRadius(borderRadius, props) {
    return getTheme(props).borderRadius[borderRadius];
}
export function getCommon(key, props) {
    var value = getTheme(props)[key];
    // since we are getting lineHeight as number e.g. 20, convert that 20 -> "20px"
    if (typeof value !== 'string' &&
        'lineHeight' in value &&
        typeof value.lineHeight !== 'string') {
        value['lineHeight'] = "".concat(value['lineHeight'], "px");
    }
    return value;
}
//# sourceMappingURL=getters.js.map