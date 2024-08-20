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

export interface Props {
  style: StylesTitle
  children: any
  className?: string
}

export const Title = memo(({ children, style, className }: Props) => {
  const classNames = ['title']
  if (style && styleClassMap[style]) {
    classNames.push(styleClassMap[style])
  }

  return (
    <div className={className}>
      <p className={classNames.join(' ')}>{children}</p>
    </div>
  )
})
