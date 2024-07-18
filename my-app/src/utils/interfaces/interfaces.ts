export interface IProduct {
    id: number;
    title: string;
    price: number;
    picture: string;
    rating: number;
}

type stylesTitle =
    | 'name'
    | 'red'
    | 'bold'
    | 'bigName'
    | 'price'
    | 'bigPrice'
    | 'description';

export interface ITitle {
    style: stylesTitle;
    children: any;
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
