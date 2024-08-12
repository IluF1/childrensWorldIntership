import {Title} from '@/shared';

import styles from './Error.module.css';

export const ErrorPage = () => (
    <div className={styles.container}>
        <Title style="bigName">
            Ошибка, такой страницы не существует,{' '}
            <a className={styles.error__redirect_text} href="/">
                домой
            </a>
        </Title>
    </div>
);
