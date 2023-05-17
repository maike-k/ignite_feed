import { ThumbsUp, Trash } from 'phosphor-react'

// Hooks
import { useState } from 'react'
// Components
import { Avatar } from './Avatar'
// Styles
import styles from './Comment.module.css'

interface CommentProps {
  content: string
  onDeleteComment: (deleteComment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikes() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/maike-k.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Maike Gomes</strong>
              <time
                title="24 de Agosto ás 22h"
                dateTime="2022-08-24"
                className={styles.time}
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikes}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
