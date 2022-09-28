import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import './global.css'
import styles from './App.module.css'



export function App() {
  return (
   
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author='Lord Adenilson' 
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque, nesciunt ipsum molestiae veniam repellendus soluta earum quos ea dolorem consequatur inventore ullam magni tempora aliquam vel. Porro, iste itaque.' 
          />
          <Post 
            author='Kaizen' 
            content='Novo Post' 
          />
        </main>
      </div>
    </div>
  )
}





