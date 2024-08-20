import type { MouseEventHandler } from 'react'

import { Button } from '@mui/material'

export interface Props {
  children: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  className?: string
}

export function MyButton({ className, children, onClick, disabled }: Props) {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      className={className}
      sx={{
        'background': 'rgba(0, 115,230, 1)',
        'width': '100%',
        'height': '52px',
        'color': 'white',
        'borderRadius': '12px',
        'fontWeight': '700',
        'textTransform': 'none',
        'lineHeight': '20px',
        '&:hover': {
          backgroundColor: '#014a94',
        },
      }}
    >
      {children}
    </Button>
  )
}
