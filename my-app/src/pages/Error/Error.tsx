import styles from './Error.module.css'
import { Title } from '@/shared'

export function ErrorPage() {
  return (
    <div className={styles.container}>
      <Title style="bigName">
        Ошибка, такой страницы не существует,
        {' '}
        <a className={styles.error__redirect_text} href="/">
          домой
        </a>
      </Title>
    </div>
  )
}
