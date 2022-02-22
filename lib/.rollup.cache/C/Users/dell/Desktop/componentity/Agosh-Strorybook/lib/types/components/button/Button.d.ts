import React from 'react';
import { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';
import { ReactNode } from 'react';
export interface ButtonProps extends MuiButtonProps {
    buttonView: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
    icon?: ReactNode;
}
/**
 * Primary UI component for user interaction
 */
export declare const Button: React.FC<ButtonProps>;
