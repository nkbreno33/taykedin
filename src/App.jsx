import Header from './components/Header/Header';
import Post from './components/Post/Post';
import Sidebar from './components/Sidebar/Sidebar';

import styles from './App.module.css'

import './global.css';


export default function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
          <Sidebar />
        <main>
          <Post
            author="Nicholas Breno"
            content="LOREM LOREM LOREM LOREM" 
          />
          <Post
            author="Tayane Ziretta"
            content="LOREM LOREM LOREM LOREM" 
          />
        </main>
      </div>
    </div>
  )
    
}


