import { useEffect, useState } from 'react';
import styles from './headerElement.module.css';
import { IHeaderElement } from '@/utils/interfaces/interfaces';

export const HeaderElement = ({ children, link }: IHeaderElement) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (window.location.pathname === link) {
            setActive(true);
        }
    }, []);

    return (
        <a href={link} className={styles[active ? 'active' : 'element']}>
            {children}
        </a>
    );
};
