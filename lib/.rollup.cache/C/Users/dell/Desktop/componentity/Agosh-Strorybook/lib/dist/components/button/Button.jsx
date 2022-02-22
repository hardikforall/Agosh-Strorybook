import React from 'react';
import { StyledButton, IconWrapper, TextWrapper } from './Button.styles';
/**
 * Primary UI component for user interaction
 */
export var Button = function (props) {
    var children = props.children, icon = props.icon;
    return (<StyledButton {...props} buttonView={props.buttonView || 'filled'} disableRipple>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <TextWrapper>{children}</TextWrapper>
    </StyledButton>);
};
//# sourceMappingURL=Button.jsx.map