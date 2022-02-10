import React from 'react';
import { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';
import { ReactNode } from 'react';
import { StyledButton, IconWrapper, TextWrapper } from './Button.styles';

export interface ButtonProps extends MuiButtonProps {
  buttonView: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
  icon?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const { children, icon } = props;

  return (
    <StyledButton
      {...props}
      buttonView={props.buttonView || 'filled'}
      disableRipple
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <TextWrapper>{children}</TextWrapper>
    </StyledButton>
  );
};
