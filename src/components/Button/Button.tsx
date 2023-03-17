import { ReactNode } from 'react';

import './button.css';

export type ButtonProps = {
  children: ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
  return (
    <button>
      {children}
    </button>
  );
};
