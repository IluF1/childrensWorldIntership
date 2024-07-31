import {ReactNode} from 'react';

import {StylesTitle} from './constansts';

export interface ITitle {
    style: StylesTitle;
    children: string | Element | ReactNode;
}
