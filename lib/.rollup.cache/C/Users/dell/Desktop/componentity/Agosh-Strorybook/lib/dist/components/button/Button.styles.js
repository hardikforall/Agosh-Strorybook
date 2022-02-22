import { __makeTemplateObject } from 'tslib'
import MuiButton from '@material-ui/core/Button'
import styled, { css } from 'styled-components'
import { theme } from '../../appTheme'
export var TextWrapper = styled.span(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  pointer-events: none;\n'],
      ['\n  pointer-events: none;\n']
    ))
)
export var IconWrapper = styled.span(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        '\n  margin-right: ',
        ';\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  flex-grow: 0;\n  min-width: 18px;\n  height: 18px;\n'
      ],
      [
        '\n  margin-right: ',
        ';\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  flex-grow: 0;\n  min-width: 18px;\n  height: 18px;\n'
      ]
    )),
  theme.spacing(1)
)
var baseStyles = css(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        '\n  ',
        ';\n  position: relative;\n  text-transform: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  outline: none;\n  user-select: none;\n  appearance: none;\n  overflow: visible;\n  vertical-align: middle;\n  background: transparent;\n  height: ',
        ';\n  padding: 0;\n  padding-right: ',
        ';\n  padding-left: ',
        ';\n  border-radius: ',
        ";\n  /* transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s; */\n\n  &:after,\n  &:before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: inherit;\n  }\n\n  &:before {\n    z-index: -20;\n  }\n\n  &:after {\n    z-index: -10;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &:disabled {\n    pointer-events: none;\n\n    & > ",
        ' {\n      opacity: 0.38;\n    }\n\n    & > ',
        ' {\n      opacity: 0.38;\n    }\n  }\n'
      ],
      [
        '\n  ',
        ';\n  position: relative;\n  text-transform: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  outline: none;\n  user-select: none;\n  appearance: none;\n  overflow: visible;\n  vertical-align: middle;\n  background: transparent;\n  height: ',
        ';\n  padding: 0;\n  padding-right: ',
        ';\n  padding-left: ',
        ';\n  border-radius: ',
        ";\n  /* transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s; */\n\n  &:after,\n  &:before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: inherit;\n  }\n\n  &:before {\n    z-index: -20;\n  }\n\n  &:after {\n    z-index: -10;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &:disabled {\n    pointer-events: none;\n\n    & > ",
        ' {\n      opacity: 0.38;\n    }\n\n    & > ',
        ' {\n      opacity: 0.38;\n    }\n  }\n'
      ]
    )),
  theme.common('M3LabelLarge'),
  theme.spacing(5),
  theme.spacing(3),
  function (_a) {
    var icon = _a.icon
    return theme.spacing(icon ? 2 : 3)
  },
  theme.borderRadius('rounded'),
  TextWrapper,
  IconWrapper
)
/**
 * Background color is set using ::before and ::after.
 * ::before is used for the button's background color
 * ::after is used for creating the lighten/darken effect
 *
 * for background effect hoverOpacity or hoverOpacity2 can be used. Similar approach applies for focus and active state.
 * hoverOpacity: this is used in the case background color is semi-transparent
 * hoverOpacity2: this is used in the case background is not transparent but lighten/darken effect is needed
 */
var getBackground = function (_a) {
  var defaultBg = _a.defaultBg,
    hoverBg = _a.hoverBg,
    hoverOpacity = _a.hoverOpacity,
    focusBg = _a.focusBg,
    focusOpacity = _a.focusOpacity,
    activeBg = _a.activeBg,
    activeOpacity = _a.activeOpacity,
    hoverBg2 = _a.hoverBg2,
    hoverOpacity2 = _a.hoverOpacity2,
    focusBg2 = _a.focusBg2,
    focusOpacity2 = _a.focusOpacity2,
    activeBg2 = _a.activeBg2,
    activeOpacity2 = _a.activeOpacity2
  return css(
    templateObject_10 ||
      (templateObject_10 = __makeTemplateObject(
        [
          '\n  &:before {\n    background-color: ',
          ';\n  }\n\n  &:hover:before {\n    background-color: ',
          ';\n    ',
          '\n  }\n\n  &:focus:before {\n    background-color: ',
          ';\n    ',
          '\n  }\n\n  &:active:before {\n    background-color: ',
          ';\n    ',
          '\n  }\n\n  &:hover:after {\n    background-color: ',
          ';\n    ',
          '\n  }\n\n  &:focus:after {\n    background-color: ',
          ';\n    ',
          '\n  }\n\n  &:active:after {\n    background-color: ',
          ';\n    ',
          '\n  }\n'
        ],
        [
          '\n  &:before {\n    background-color: ',
          ';\n  }\n\n  &:hover:before {\n    background-color: ',
          ';\n    ',
          '\n  }\n\n  &:focus:before {\n    background-color: ',
          ';\n    ',
          '\n  }\n\n  &:active:before {\n    background-color: ',
          ';\n    ',
          '\n  }\n\n  &:hover:after {\n    background-color: ',
          ';\n    ',
          '\n  }\n\n  &:focus:after {\n    background-color: ',
          ';\n    ',
          '\n  }\n\n  &:active:after {\n    background-color: ',
          ';\n    ',
          '\n  }\n'
        ]
      )),
    defaultBg,
    hoverBg,
    hoverOpacity !== undefined &&
      css(
        templateObject_4 ||
          (templateObject_4 = __makeTemplateObject(
            ['\n      opacity: ', ';\n    '],
            ['\n      opacity: ', ';\n    ']
          )),
        hoverOpacity
      ),
    focusBg,
    focusOpacity !== undefined &&
      css(
        templateObject_5 ||
          (templateObject_5 = __makeTemplateObject(
            ['\n      opacity: ', ';\n    '],
            ['\n      opacity: ', ';\n    ']
          )),
        focusOpacity
      ),
    activeBg,
    activeOpacity !== undefined &&
      css(
        templateObject_6 ||
          (templateObject_6 = __makeTemplateObject(
            ['\n      opacity: ', ';\n    '],
            ['\n      opacity: ', ';\n    ']
          )),
        activeOpacity
      ),
    hoverBg2,
    hoverOpacity2 !== undefined &&
      css(
        templateObject_7 ||
          (templateObject_7 = __makeTemplateObject(
            ['\n      opacity: ', ';\n    '],
            ['\n      opacity: ', ';\n    ']
          )),
        hoverOpacity2
      ),
    focusBg2,
    focusOpacity2 !== undefined &&
      css(
        templateObject_8 ||
          (templateObject_8 = __makeTemplateObject(
            ['\n      opacity: ', ';\n    '],
            ['\n      opacity: ', ';\n    ']
          )),
        focusOpacity2
      ),
    activeBg2,
    activeOpacity2 !== undefined &&
      css(
        templateObject_9 ||
          (templateObject_9 = __makeTemplateObject(
            ['\n      opacity: ', ';\n    '],
            ['\n      opacity: ', ';\n    ']
          )),
        activeOpacity2
      )
  )
}
var getBoxShadow = function (_a) {
  var hoverBoxShadow = _a.hoverBoxShadow,
    nonHoverBoxShadow = _a.nonHoverBoxShadow
  return css(
    templateObject_11 ||
      (templateObject_11 = __makeTemplateObject(
        [
          '\n  box-shadow: ',
          ';\n\n  &:hover {\n    box-shadow: ',
          ';\n  }\n\n  &:active,\n  &:focus {\n    box-shadow: ',
          ';\n  }\n'
        ],
        [
          '\n  box-shadow: ',
          ';\n\n  &:hover {\n    box-shadow: ',
          ';\n  }\n\n  &:active,\n  &:focus {\n    box-shadow: ',
          ';\n  }\n'
        ]
      )),
    nonHoverBoxShadow ||
      function () {
        return 'none'
      },
    hoverBoxShadow ||
      function () {
        return 'none'
      },
    nonHoverBoxShadow ||
      function () {
        return 'none'
      }
  )
}
/**
 * For background color, update ::before styling
 * @param bgColor
 * @returns
 */
var getDisabledStyles = function (_a) {
  var color = _a.color,
    bgColor = _a.bgColor,
    bgOpacity = _a.bgOpacity,
    borderColor = _a.borderColor,
    borderOpacity = _a.borderOpacity
  return css(
    templateObject_14 ||
      (templateObject_14 = __makeTemplateObject(
        [
          '\n  color: ',
          ';\n\n  &:before {\n    background-color: ',
          ';\n    opacity: ',
          ';\n  }\n\n  &:after {\n    ',
          '\n\n    ',
          '\n  }\n'
        ],
        [
          '\n  color: ',
          ';\n\n  &:before {\n    background-color: ',
          ';\n    opacity: ',
          ';\n  }\n\n  &:after {\n    ',
          '\n\n    ',
          '\n  }\n'
        ]
      )),
    color,
    bgColor,
    bgOpacity,
    borderColor &&
      css(
        templateObject_12 ||
          (templateObject_12 = __makeTemplateObject(
            ['\n      border: 1px solid ', ';\n    '],
            ['\n      border: 1px solid ', ';\n    ']
          )),
        borderColor
      ),
    borderOpacity &&
      css(
        templateObject_13 ||
          (templateObject_13 = __makeTemplateObject(
            ['\n      opacity: ', ';\n    '],
            ['\n      opacity: ', ';\n    ']
          )),
        borderOpacity
      )
  )
}
/**
 * for border user the ::after element
 */
var getBorderStyles = function (_a) {
  var defaultBorderColor = _a.defaultBorderColor,
    hoverBorderColor = _a.hoverBorderColor,
    focusBorderColor = _a.focusBorderColor,
    activeBorderColor = _a.activeBorderColor
  return css(
    templateObject_15 ||
      (templateObject_15 = __makeTemplateObject(
        [
          '\n  &:after {\n    border: 1px solid ',
          ';\n  }\n\n  &:hover:after {\n    border: 1px solid ',
          ';\n  }\n\n  &:focus:after {\n    border: 1px solid ',
          ';\n  }\n\n  &:active:after {\n    border: 1px solid ',
          ';\n  }\n'
        ],
        [
          '\n  &:after {\n    border: 1px solid ',
          ';\n  }\n\n  &:hover:after {\n    border: 1px solid ',
          ';\n  }\n\n  &:focus:after {\n    border: 1px solid ',
          ';\n  }\n\n  &:active:after {\n    border: 1px solid ',
          ';\n  }\n'
        ]
      )),
    defaultBorderColor,
    hoverBorderColor,
    focusBorderColor,
    activeBorderColor
  )
}
/**
 * Based on different variations of the buttons, following utils can be used.
 * getDisabledStyles: Defines disabled styles
 * getBackground: Defines the background color
 * getBoxShadow: Defines Box-shadow
 * getBorderStyles: Defines borders
 */
export var StyledButton = styled(MuiButton)(
  templateObject_21 ||
    (templateObject_21 = __makeTemplateObject(
      ['\n  &&& {\n    ', ';\n\n    ', '\n  }\n'],
      ['\n  &&& {\n    ', ';\n\n    ', '\n  }\n']
    )),
  baseStyles,
  function (_a) {
    var buttonView = _a.buttonView,
      disabled = _a.disabled
    switch (buttonView) {
      default:
      case 'filled': {
        return css(
          templateObject_16 ||
            (templateObject_16 = __makeTemplateObject(
              [
                '\n            color: ',
                ';\n\n            ',
                '\n\n            ',
                ';\n\n            ',
                '\n          '
              ],
              [
                '\n            color: ',
                ';\n\n            ',
                '\n\n            ',
                ';\n\n            ',
                '\n          '
              ]
            )),
          theme.color('OnPrimary'),
          disabled &&
            getDisabledStyles({
              color: theme.color('OnSurface'),
              bgColor: theme.color('disabledBg'),
              bgOpacity: 0.12
            }),
          !disabled &&
            getBackground({
              defaultBg: theme.color('Primary'),
              hoverBg: theme.color('Primary'),
              focusBg: theme.color('Primary'),
              activeBg: theme.color('Primary'),
              hoverBg2: theme.color('OnPrimary'),
              hoverOpacity2: 0.08,
              focusBg2: theme.color('OnPrimary'),
              focusOpacity2: 0.12,
              activeBg2: theme.color('OnPrimary'),
              activeOpacity2: 0.12
            }),
          !disabled &&
            getBoxShadow({
              hoverBoxShadow: theme.color('elevation1')
            })
        )
      }
      case 'outlined': {
        return css(
          templateObject_17 ||
            (templateObject_17 = __makeTemplateObject(
              [
                '\n            color: ',
                ';\n\n            ',
                '\n\n            ',
                ';\n\n            ',
                '\n          '
              ],
              [
                '\n            color: ',
                ';\n\n            ',
                '\n\n            ',
                ';\n\n            ',
                '\n          '
              ]
            )),
          theme.color('Primary'),
          disabled &&
            getDisabledStyles({
              color: theme.color('OnSurface'),
              bgColor: theme.color('transparent'),
              bgOpacity: 0.12,
              borderColor: theme.color('disabledBorder'),
              borderOpacity: 0.12
            }),
          !disabled &&
            getBackground({
              defaultBg: theme.color('transparent'),
              hoverBg: theme.color('textButtonBg'),
              hoverOpacity: 0.08,
              focusBg: theme.color('textButtonBg'),
              focusOpacity: 0.12,
              activeBg: theme.color('textButtonBg'),
              activeOpacity: 0.12
            }),
          !disabled &&
            getBorderStyles({
              defaultBorderColor: theme.color('Outline'),
              hoverBorderColor: theme.color('Outline'),
              focusBorderColor: theme.color('Primary'),
              activeBorderColor: theme.color('Outline')
            })
        )
      }
      case 'text': {
        return css(
          templateObject_18 ||
            (templateObject_18 = __makeTemplateObject(
              ['\n            color: ', ';\n\n            ', '\n\n            ', ';\n          '],
              ['\n            color: ', ';\n\n            ', '\n\n            ', ';\n          ']
            )),
          theme.color('Primary'),
          disabled &&
            getDisabledStyles({
              color: theme.color('OnSurface'),
              bgColor: theme.color('transparent'),
              bgOpacity: 0
            }),
          !disabled &&
            getBackground({
              defaultBg: theme.color('transparent'),
              hoverBg: theme.color('textButtonBg'),
              hoverOpacity: 0.08,
              focusBg: theme.color('textButtonBg'),
              focusOpacity: 0.12,
              activeBg: theme.color('textButtonBg'),
              activeOpacity: 0.12
            })
        )
      }
      case 'elevated': {
        return css(
          templateObject_19 ||
            (templateObject_19 = __makeTemplateObject(
              [
                '\n            color: ',
                ';\n\n            ',
                '\n\n            ',
                '\n          \n          ',
                '\n\n\n          ',
                ';\n          '
              ],
              [
                '\n            color: ',
                ';\n\n            ',
                '\n\n            ',
                '\n          \n          ',
                '\n\n\n          ',
                ';\n          '
              ]
            )),
          theme.color('Primary'),
          disabled &&
            getDisabledStyles({
              color: theme.color('OnSurface'),
              bgColor: theme.color('disabledBg'),
              bgOpacity: 0.12
            }),
          !disabled && 'filter: '.concat(theme.color('elevationFilter')),
          !disabled &&
            getBoxShadow({
              nonHoverBoxShadow: theme.color('elevation1'),
              hoverBoxShadow: theme.color('elevation2')
            }),
          !disabled &&
            getBackground({
              defaultBg: theme.color('elevatedDefaultBg'),
              hoverBg: theme.color('elevatedHoverBg'),
              focusBg: theme.color('elevatedFocusBg'),
              activeBg: theme.color('elevatedActiveBg')
            })
        )
      }
      case 'tonal': {
        return css(
          templateObject_20 ||
            (templateObject_20 = __makeTemplateObject(
              [
                '\n            color: ',
                ';\n\n            ',
                '\n\n            ',
                ';\n\n            ',
                '\n          '
              ],
              [
                '\n            color: ',
                ';\n\n            ',
                '\n\n            ',
                ';\n\n            ',
                '\n          '
              ]
            )),
          theme.color('OnSecondaryContainer'),
          disabled &&
            getDisabledStyles({
              color: theme.color('OnSurface'),
              bgColor: theme.color('disabledBg'),
              bgOpacity: 0.12
            }),
          !disabled &&
            getBackground({
              defaultBg: theme.color('SecondaryContainer'),
              hoverBg2: theme.color('tonalHoverBg'),
              hoverOpacity2: 0.08,
              focusBg2: theme.color('tonalHoverBg'),
              focusOpacity2: 0.12,
              activeBg2: theme.color('tonalHoverBg'),
              activeOpacity2: 0.12
            }),
          !disabled &&
            getBoxShadow({
              hoverBoxShadow: theme.color('elevation1')
            })
        )
      }
    }
  }
)
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7,
  templateObject_8,
  templateObject_9,
  templateObject_10,
  templateObject_11,
  templateObject_12,
  templateObject_13,
  templateObject_14,
  templateObject_15,
  templateObject_16,
  templateObject_17,
  templateObject_18,
  templateObject_19,
  templateObject_20,
  templateObject_21
//# sourceMappingURL=Button.styles.js.map
