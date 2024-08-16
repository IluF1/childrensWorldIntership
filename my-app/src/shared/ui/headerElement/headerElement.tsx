import { memo, useEffect, useState } from 'react'

import styles from './HeaderElement.module.css'

export interface Props {
  children: string
  link: string
}

export const HeaderElement = memo(({ children, link }: Props) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (window.location.pathname === link) {
      setActive(true)
    }
  }, [])

  return (
    <a href={link} className={styles[active ? 'active' : 'element']}>
      {children}
    </a>
  )
})
