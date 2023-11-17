import Header from './components/Header/Header';
import Post from './components/Post/Post';
import Sidebar from './components/Sidebar/Sidebar';

import styles from './App.module.css'

import './global.css';

const post = [
  {
    id: 1, 
    author: {
      avatarUrl: 'https://github.com/nkbreno33.png',
      name: 'Nicholas Breno',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Boa tarde pessoal',},
      { type: 'paragraph', content: 'Gostaria de compartilhar com vocês o início do meu projeto de portfólio, que fiz a partir de um curso promovido pela Rocketseat e ministrado pelo Mayk Brito, onde eu fiz alterações na pagina inicial, adicionei a página "sobre" e a página de "projetos", em breve irei adicionar mais projetos lá e adicionar mais recursos(aceito dicas).',},
      { type: 'paragraph', content: 'Por enquanto é só, espero que gostem! 🙌 😎',},
      { type: 'link', content: 'Deploy: https://dev-links-peach.vercel.app/'},
      { type: 'link', content: 'Layout do projeto inicial: https://abrir.link/Eo7WS',}
    ],
    publishedAt: new Date ('2023-11-17 11:08:20'),
  },
  {
    id: 2, 
    author: {
      avatarUrl: 'https://github.com/rocketseat.png',
      name: 'Rocketseat',
      role: 'Tecnologia'
    },
    content: [
      { type: 'paragraph', content: 'Boa tarde pessoal',},
      { type: 'paragraph', content: 'Gostaria de compartilhar com vocês o início do meu projeto de portfólio, que fiz a partir de um curso promovido pela Rocketseat e ministrado pelo Mayk Brito, onde eu fiz alterações na pagina inicial, adicionei a página "sobre" e a página de "projetos", em breve irei adicionar mais projetos lá e adicionar mais recursos(aceito dicas).',},
      { type: 'paragraph', content: 'Por enquanto é só, espero que gostem! 🙌 😎',},
      { type: 'link', content: 'https://dev-links-peach.vercel.app/Site:'},
      { type: 'link', content: '"https://abrir.link/Eo7WS">Layout do projeto inicial',}
    ],
    publishedAt: new Date ('2023-11-15 11:08:20'),
  },
]

export default function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
          <Sidebar />
        <main>
          {post.map(post => {
            return (
              <Post 
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


