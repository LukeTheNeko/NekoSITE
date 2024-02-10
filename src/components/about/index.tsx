import styles from './styles.module.scss';

export function About() {
  return (
    <main className={styles.main} data-aos="fade-right" id='about'>
      <div className={styles.row}>
        <div className={styles.me}>
          <h1>Sobre Min</h1>
          <p>
          Desde os 13 anos, estudo programação, iniciando com o Minecraft e desenvolvendo interesse em Java. Atualmente, me dedico a projetos criativos, utilizando diversas linguagens para transformar ideias inovadoras em realidade. Encaro a programação como uma expressão da minha criatividade.
          </p>
        </div>
        <div className={styles.formacao}>
          <h1>Tecnologias</h1>
          <p>
          Sou um entusiasta da programação e me sinto em casa trabalhando com diversas linguagens. 
          Tenho especial afinidade com JavaScript, TypeScript e Java, onde consigo expressar minha criatividade e 
          desenvolver soluções inovadoras.
          </p>
          <p>
            Minha experiência inclui a programação de BOTS para o Discord usando NodeJS, 
            proporcionando experiências interativas e dinâmicas para os usuários.
          </p>
          <p>
          Além disso, aventuro-me no universo do Minecraft, utilizando o poder do Java e a plataforma 
          IntelliJ para criar Plugins que aprimoram a jogabilidade e enriquecem a experiência dos jogadores.
          </p>
          <p>
          Já explorei outras linguagens de programação, como Python, C#, C++ e Kotlin, 
          ampliando meu repertório e adaptando-me a diferentes desafios.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.descricao}>
          <h1>Universidade & Cursos</h1>
          <p>
          Sou formado em Sistema de informação pela Universidade Nove de Julho (UNNOVE)
          tenho certificados em cursos da Danki Code
          e muito mais!
          </p>
        </div>
        <div className={styles.descricao}>
        <img src="./Ferramentas2.png" alt="ferramentas" />
        </div>
      </div>
    </main>
  );
}