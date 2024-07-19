import { ITitle } from '@/utils/interfaces/interfaces';
import './title.css';

export const Title = ({ children, style }: ITitle) => {
    const classNames = ['title'];
    if (style === 'bold') {
        classNames.push('bold-title');
    }
    if (style === 'name') {
        classNames.push('name-title');
    }
    if (style === 'price') {
        classNames.push('price-title');
    }
    if (style === 'bigName') {
        classNames.push('bigName-title');
    }
    if (style === 'bigPrice') {
        classNames.push('bigPrice-title');
    }
    if (style === 'description') {
        classNames.push('description-title');
    }
    return <p className={classNames.join(' ')}>{children}</p>;
};
