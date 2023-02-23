import PaginaPadrao from 'componentes/PaginaPadrao';
import styles from './Post.module.css';
import PostCard from 'componentes/PostCard';
import PostModelo from 'componentes/PostModelo';
import posts from 'json/posts.json'
import NaoEncontrada from 'paginas/NaoEncontrada';
import ReactMarkdown from 'react-markdown';
import { Route, Routes, useParams } from 'react-router-dom'
import './Post.css';

export default function Post() {

    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if (!post) {
        return <NaoEncontrada />
    }

    const postsRecomentados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

    return (
        <Routes>
            <Route path='*' element={<PaginaPadrao />} >
                <Route index element={
                    <PostModelo
                        fotoCapa={`/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className='post-markdown-container'>
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                        <h2 className={styles.tituloOutorsPosts}>
                            Outros posts que você vai gostar:
                        </h2>

                        <ul className={styles.postsRecomendados}>
                            {postsRecomentados.map((post) => (
                                <li key={post.id}>
                                    <PostCard post={post}/>
                                </li>
                            ))}
                        </ul>

                    </PostModelo>
                } />
            </Route>
        </Routes>
    )
}