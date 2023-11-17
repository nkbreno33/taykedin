import Comment from '../Comment/Comment';
import styles from './Post.module.css';

export default function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/nkbreno33.png" alt=""/>
                    <div className={styles.authorInfo}>
                        <strong>Nicholas Breno</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time 
                    title='16 de novembro ás 16:00' dateTime='2023-11-16 08:13:30'>Publicado há 1 hora
                </time>
            </header>

            <div className={styles.content}>
                <p>Boa tarde pessoal, </p>
                <p>Gostaria de compartilhar com vocês o início do meu projeto de portfólio, que fiz a partir de um curso promovido pela Rocketseat e ministrado pelo Mayk Brito, onde eu fiz alterações na pagina inicial, adicionei a página "sobre" e a página de "projetos", em breve irei adicionar mais projetos lá e adicionar mais recursos(aceito dicas).</p>
                <p>Por enquanto é só, espero que gostem! 🙌 😎</p>
                <p>
                    <a href="https://dev-links-peach.vercel.app/">Site:</a>
                </p>
                <p>
                    <a href="https://abrir.link/Eo7WS">Layout do projeto inicial</a>
                </p>
                <p>
                    <a href="https://github.com/nkbreno33/DevLinks">Repositório Github</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'>
                </textarea>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    )
}