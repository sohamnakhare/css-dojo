import * as React from 'react';
import { MouseEventHandler, ReactNode } from 'react';

import './button.css';

type ButtonType = 'primary' | 'warning' | 'disabled';
type ButtonVariant = 'contained' | 'outlined';
type ButtonSize = 'small' | 'medium' | 'large';
type IconPosition = 'left' | 'right';

type IconButtonProps = {
  icon: ReactNode;
  iconPosition?: IconPosition;
  disabled?: boolean;
  type: ButtonType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  variant: ButtonVariant;
  size: ButtonSize;
};

export type ButtonProps = {
  disabled?: boolean;
  type: ButtonType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  variant: ButtonVariant;
  size: ButtonSize;
};

export const IconButton = ({
  iconPosition,
  icon,
  children,
  ...rest
}: IconButtonProps) => {
  return (
    <Button {...rest}>
      <div
        style={{
          display: 'flex',
          flexDirection: iconPosition === 'right' ? 'row-reverse' : 'row',
        }}
      >
        {icon} <span>&nbsp;</span>
        {children}
      </div>
    </Button>
  );
};

export const Button = ({ type, variant, children, size }: ButtonProps) => {
  return (
    <button
      className={`button-${variant} button-${size} button-${variant}--${type}`}
      disabled={type === 'disabled'}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: 'contained',
  size: 'large',
  iconPosition: 'left',
};

Button.displayName = 'Button';
