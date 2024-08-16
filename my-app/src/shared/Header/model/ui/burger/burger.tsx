import { IconButton, Menu, MenuItem } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

interface Options {
  name: string
  href: string
}

interface Props {
  options: Options[]
  className: string
}

const ITEM_HEIGHT = 48
export function BurgerMenu({ options, className }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={className}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map(option => (
          <a href={option.href}>
            <MenuItem key={option.href + 1} onClick={handleClose}>
              {option.name}
            </MenuItem>
          </a>
        ))}
      </Menu>
    </div>
  )
}
