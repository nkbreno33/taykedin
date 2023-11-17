import Avatar from '../Avatar/Avatar';
import Comment from '../Comment/Comment';
import styles from './Post.module.css';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export default function Post ({ author, publishedAt }) {

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} alt=""/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time 
                    title='' dateTime='2023-11-16 08:13:30'>
                        {publishedDateFormated}       
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
                <Comment />
                <Comment />

            </div>
        </article>
    )
}