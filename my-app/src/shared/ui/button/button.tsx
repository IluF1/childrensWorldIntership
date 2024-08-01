import {MouseEventHandler} from 'react';

import {Button} from '@mui/material';

export interface IButton {
    children: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const MyButton = ({children, onClick}: IButton) => {
    return (
        <Button
            onClick={onClick}
            sx={{
                background: 'rgba(0, 115, 230, 1)',
                width: '100%',
                height: '52px',
                color: 'white',
                borderRadius: '12px',
                fontWeight: '700',
                textTransform: 'none',
                lineHeight: '20px',
                '&:hover': {
                    backgroundColor: '#014a94',
                },
            }}
        >
            {children}
        </Button>
    );
};
