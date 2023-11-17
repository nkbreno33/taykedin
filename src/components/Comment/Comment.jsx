import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import Avatar from '../Avatar/Avatar';

export default function Comment (props) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/rocketseat.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rocketseat</strong>
                            <time title='16 de novembro ás 17:00' dateTime='2023-11-16 17:30:10'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Nicholas, Parabéns</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>

    )
}