import styles from './privacy.module.scss';

export function Privacy() {
  return (
    <main className={`${styles.main} ${styles.background}`} data-aos="fade-right" id='privacy'>
      <div className={styles.privacy}>
        <h1>Privacy Policy</h1>
        <p>
          ➙ Esta página informa você sobre nossas políticas relativas à coleta, uso e divulgação de informações pessoais quando você usa nosso serviço. <br />
        </p>

        <h1>Coleta e Uso de Informações</h1>
        <p>
          ➙ <strong>Cookies:</strong> Utilizamos cookies para melhorar a experiência do usuário. Ao acessar
          o site, você concorda com o uso de cookies de acordo com nossa política de cookies.
        </p>

        <h1>Compartilhamento de Informações</h1>
        <p>
          ➙ Não compartilhamos suas informações pessoais com terceiros, exceto conforme descrito nesta Política
          de Privacidade.
        </p>

        <h1>Segurança</h1>
        <p>
          ➙ A segurança de suas informações pessoais é importante para nós, mas lembre-se de que nenhum método de
          transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Embora nos
          esforcemos para usar meios comercialmente aceitáveis para proteger suas informações pessoais, não
          podemos garantir sua segurança absoluta.
        </p>

        <h1>Controle de Cookies</h1>
        <p>
          ➙ Você pode controlar e/ou excluir cookies conforme desejar. Consulte as opções do seu navegador para
          fazer isso.
        </p>

        <h1>Alterações nesta Política</h1>
        <p>
          ➙ Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você reveja esta
          página regularmente para estar ciente de quaisquer alterações.
          <br />
          ➙ Última atualização 08/02/2024
        </p>

        <h1>Contato</h1>
        <p>
          ➙ Se tiver dúvidas ou preocupações sobre nossos termos de serviço entre em contato: <br />
          ➙  email: contact@luketheneko.dev
        </p>
      </div>
    </main>
  );
}