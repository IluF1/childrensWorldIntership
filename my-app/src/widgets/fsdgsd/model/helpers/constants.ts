import { createTheme } from '@mui/material/styles'

const theme = createTheme()

export const baseStyle = {
  width: 560,
  height: 'auto',
  display: 'block',
  bgcolor: 'rgba(255, 255, 255, 1)',
  borderRadius: '24px',
  boxShadow: '0px 16px 40px 0px rgba(23, 32, 41, 0.32)',
  p: 4,
  margin: 'auto',
  marginInline: 'auto',
  marginBlockStart: '50vh',
  transform: 'translateY(-50%)',
  [theme.breakpoints.down('md')]: {
    width: 320,
    padding: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    width: 280,
  },
}
