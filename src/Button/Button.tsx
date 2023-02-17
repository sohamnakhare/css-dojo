import type { MouseEventHandler, ReactNode } from 'react';
import './button.css';

type ButtonType = 'primary' | 'warning' | 'disabled';
type ButtonVariant = 'contained' | 'outlined'

export type ButtonProps = {
  disabled?: boolean;
  type: ButtonType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  variant: ButtonVariant;
};

function Button({ type, variant, children }: ButtonProps) {
  return (
    <button className={`button-${variant} button-${variant}--${type}`} disabled={type === 'disabled'}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: 'contained'
}

Button.displayName = 'Button';

export default Button;