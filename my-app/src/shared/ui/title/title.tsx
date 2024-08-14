import { memo } from 'react'

import './Title.css'

export type StylesTitle =
  | 'name'
  | 'red'
  | 'bold'
  | 'bigName'
  | 'price'
  | 'bigPrice'
  | 'description'

export const styleClassMap: { [key: string]: string } = {
  bold: 'bold-title',
  name: 'name-title',
  price: 'price-title',
  bigName: 'bigName-title',
  bigPrice: 'bigPrice-title',
  description: 'description-title',
  red: 'red-title',
}

export interface ITitle {
  style: StylesTitle
  children: any
}

export const Title = memo(({ children, style }: ITitle) => {
  const classNames = ['title']
  if (style && styleClassMap[style]) {
    classNames.push(styleClassMap[style])
  }

  return <p className={classNames.join(' ')}>{children}</p>
})
