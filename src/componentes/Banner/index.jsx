import React from 'react'
import styles from './Banner.module.css'
import circulo from './circulo_colorido.png'
import minhaFoto from './minhaFoto.jpg'

export default function Banner () {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá Mundo!
        </h1>
        <p className={styles.apresentacao}>
        Boas vindas ao meu espaço pessoal! Eu sou 
        Vitor Martins, programador de Front-end. Aqui compartilho vários conhecimentos, espero que aprenda algo novo 
        </p>
      </div>

      <div className={styles.imagens}>
        <img 
        src={circulo} 
        className={styles.circuloColorito} 
        aria-hidden={true}/>

        <img 
        src={minhaFoto}  
        className={styles.minhaFoto} 
        alt="foto do Vitor"
        />
      </div>

    </div>
  )
}
