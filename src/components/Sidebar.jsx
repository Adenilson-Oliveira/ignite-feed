import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
      />

      <div className={styles.profile}>
        <img 
          className={styles.avatar} 
          src="https://avatars.githubusercontent.com/u/81540069?v=4"
        />

        <strong>Adenilson Oliveira</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>

    </aside>
  )
}