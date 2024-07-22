import { MouseEventHandler } from 'react';

export interface IButton {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
