// components
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

// styles
import styles from './App.module.css'
// Desafio
// Receber estes dados de um banco de dados ou de uma API.

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
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz  no NLW Return, evento da Rocketseat. O nome do projeto é IgniteFeed 🚀'
      },
      { type: 'link', content: 'maike-k/developer' }
    ],
    publishedAt: new Date('2022-08-25 10:13')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz  no NLW Return, evento da Rocketseat. O nome do projeto é IgniteFeed 🚀'
      },
      { type: 'link', content: 'maike-k/developer' }
    ],
    publishedAt: new Date('2022-08-25 10:13')
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
