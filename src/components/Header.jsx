import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg'

export const Header = () => {
  // console.log(igniteLogo)
  // console.log(styles)
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      <h2>Ignite Feed</h2>
    </header>
  )
}