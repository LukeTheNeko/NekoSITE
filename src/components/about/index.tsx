import styles from './about.module.scss';

export function About() {
  return (
    <main className={styles.main} id='about'>
      <div className={styles.row} data-aos="fade-right">
        <div className={styles.me}>
          <h1>Sobre Mim</h1>
          <p>
            Desde os 13 anos, estudo programação, iniciando com o Minecraft e desenvolvendo interesse em Java. Atualmente, 
            me dedico a projetos criativos, utilizando diversas linguagens para transformar ideias inovadoras em realidade.
          </p>
        </div>
        <div className={styles.descricao}>
          <h1>Tecnologias</h1>
          <p>
            Sou um entusiasta da programação e tenho especial afinidade com JavaScript, TypeScript e NodeJs onde consigo expressar minha criatividade e
            desenvolver soluções inovadoras.
          </p>
          <p>
            Além disso, aventuro-me no universo do Minecraft, utilizando o poder do Java e Kotlin
            para criar Plugins que aprimoram a jogabilidade e enriquecem a experiência dos jogadores.
          </p>
        </div>
      </div>
      <div className={styles.row} data-aos="fade-left">
        <div className={styles.descricao}>
          <img src="./imgs/ferramentas.png" alt="ferramentas" />
        </div>
      </div>
    </main>
  );
}