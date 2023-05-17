// components
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

// styles
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/maike-k.png',
      name: 'Maike Gomes',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifolio 🚀'
      },
      { type: 'link', content: 'maike-k/developer' }
    ],
    publishedAt: new Date('2023-05-16 18:00')
  }
]

export function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
