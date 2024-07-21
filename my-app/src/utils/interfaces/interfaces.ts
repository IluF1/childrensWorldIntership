import { MouseEventHandler } from 'react';

import { stylesTitle } from '../constants/constants';

export interface IProduct {
    id: number;
    title: string;
    price: number;
    picture: string;
    rating: number;
}

export interface ITitle {
    style: stylesTitle;
    children: unknown;
}

export interface IHeaderElement {
    children: string;
    link: string;
}

export interface IData {
    id: number;
    title: string;
    description: string;
    price: number;
    picture: string;
    rating: string;
}

export interface IButton {
    children: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ICart {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ICartData {
    quantity: number;
    product: {
        id: string;
        title: string;
        description: string;
        category: string;
        price: number;
        picture: string;
        rating: string;
    };
}
