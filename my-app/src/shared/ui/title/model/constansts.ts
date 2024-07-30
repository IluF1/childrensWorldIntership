export type StylesTitle =
    | 'name'
    | 'red'
    | 'bold'
    | 'bigName'
    | 'price'
    | 'bigPrice'
    | 'description';
export const styleClassMap: {[key: string]: string} = {
    bold: 'bold-title',
    name: 'name-title',
    price: 'price-title',
    bigName: 'bigName-title',
    bigPrice: 'bigPrice-title',
    description: 'description-title',
};
