import PostModelo from "componentes/PostModelo";
import fotoCapa from './sobre_mim_capa.png';
import styles from './SobreMim.module.css';
import fotoSobreMim from './capaSobreMim.PNG';

export default function SobreMim() {
    return(
        <PostModelo
        fotoCapa={fotoCapa}
        titulo="Sobre mim"
        >
        <h3 className={styles.subtitulo}>Olá, Sou o Vitor</h3>

        <img src={fotoSobreMim} alt="Minha foto Vitor Martins" className={styles.fotoSobreMim}/>


        <p className={styles.paragrafo}>Oi, tudo bem? Eu sou estudande de Front-end na Alura e estou feliz de te ver por aqui.</p>

        <p className={styles.paragrafo}>Minha história com a programação começa quando eu estava finalizando o ensino médio, eu havia criado um blog de receitas saudáveis e estava sempre postando dicas. Esse blog ficou no ar por quase um ano, foi por ele que conheci o que existia por trás da parta visual.</p>

        <p className={styles.paragrafo}>Esse meu blog foi criado pelo WordPress, então não levo como o meu primeiro contato direto com a programação porque até então não tinha me aprofundado, mas isso me levou a ter a curiosidade de saber mais. Lembro que o WordPress não executava alguns comandos, ele era bem limitado para o que eu queria fazer.</p> 

        <p className={styles.paragrafo}>Um belo dia estava navegando pelo YouTube e cai em um vídeo do Gustavo Guanabara onde ele explicava como funciona a internet, e se vídeo prendeu minha atenção, pois eu tinha acabado de concluir e ensino médio e queria muito fazer faculdade, não sabia o que fazer estava dúvida é foi aí que decidi o que eu iria fazer.</p> 

        <p className={styles.paragrafo}>Minha primeira linguagem da programação foi o JavaScript que fiz com o Gustavo Guanabara,  esse curso dele é ótimo, pois ele introduz você a esse mundo só JavaScript, porém na época eu estava trabalhando e surgiu uma oportunidade e eu aceitei essa proposta.</p> 

        <p className={styles.paragrafo}>No segundo semestre de 2022, eu descobri que não estava feliz com o que eu estava fazendo, não conseguia me ver no futuro nessa profissão. E foi aí que voltei a estudar 100% foca na programação. E comecei a cursar análise e desenvolvimento de sistemas, a faculdade vai me ensinar todo que envolve a programação e pela Alura vou me especializar no front end.</p> 

        </PostModelo>
    )
}