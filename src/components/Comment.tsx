import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {

  let [countLike, setCountLike] = useState(0)

  const handleDeleteComment = () => {
    onDeleteComment(content)
  }

  const handleLikeComment = () => {
    // Closures (contexto de funções) no react

    // setCountLike(countLike + 1)
    // setCountLike(countLike + 1)
    // console.log(countLike)
    // setCountLike(countLike + 1)
    // setCountLike(countLike + 1)

    setCountLike((currentState) => {
      return currentState + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/81540069?v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Adenilson Oliveira</strong>
              <time title='11 de Maio às 08:13' dateTime='2022-05-11 08:13:40'>Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} /> 
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{countLike}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}