import styles from './styles.module.scss';

export function Terms() {
  return (
    <main className={`${styles.main} ${styles.background}`} data-aos="fade-right" id='terms'>
      <div className={styles.row}>
        <div className={styles.terms}>
          <h1>Terms and Conditions</h1>
          <p>
            ➙ Esta página define os termos e condições de uso dos projetos disponíveis neste site. Ao acessar e utilizar os projetos, você concorda com estes termos e condições.
          </p>

          <h1>Uso dos Projetos</h1>
          <p>
            ➙ Os projetos disponíveis neste site podem ser livremente baixados, editados e reupados no GitHub, desde que haja uma observação indicando que eu sou o proprietário do projeto original.  <br />
            ➙ Você tem permissão para comercializar os projetos, sujeito a estes termos e condições.
          </p>

          <h1>Responsabilidades do Usuário</h1>
          <p>
            ➙ Ao utilizar os projetos disponíveis neste site, você concorda em não violar os direitos autorais e propriedade intelectual associados a esses projetos.  <br />
            ➙ Você é responsável por qualquer uso indevido dos projetos e deve respeitar os termos de uso estabelecidos aqui.
          </p>

          <h1>Alterações nos Termos de Serviço</h1>
          <p>
            ➙ Reservamos o direito de fazer alterações nestes termos de serviço a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação dos termos revisados neste site. Recomendamos que você revise periodicamente estes termos para estar ciente de quaisquer alterações. <br />
            ➙ Última atualização 08/02/2024
          </p>

          <h1>Contato</h1>
          <p>
            ➙ Se tiver dúvidas ou preocupações sobre nossos termos de serviço entre em contato: <br />
            ➙  email: contact@luketheneko.dev
          </p>
        </div>
      </div>
    </main>
  );
}