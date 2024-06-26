import styles from './projects.module.scss';

export function Project() {
  return (
    <main className={`${styles.main} ${styles.background}`} id='project '>
        <div className={styles.logo}>
          <img className={styles.project} src='/imgs/projetos.png' alt='Logo' />
        </div>

      <div className={styles.row} data-aos="fade-left">
        <div className={styles['item-grid']}>
          <img src="./banners/gladmc.png" alt="Gladmc Logo" />
          <h3 className={styles['gd-pink-1']}>BOT<br />GladMC</h3>
          <p>BOT para farm AFK no GladMC com controlado no Discord.</p>
          <a target="_blank" href="https://github.com/LukeTheNeko/GladFarm">
            <button className={styles.button}>Ver</button>
            <ul>
              <li>
                <img src="/icons/js.svg" alt="Icone Js" />
              </li>
              <li>
                <img src="/icons/node.svg" alt="Icone Node" />
              </li>
            </ul>
          </a>
        </div>

        <div className={styles['item-grid']}>
          <img src="./banners/steamfarm.png" alt="Steam Logo" />
          <h3 className={styles['gd-pink-1']}>Steam<br />HourBoost</h3>
          <p>Bot para aumentar horas nos jogos da Steam.</p>
          <a target="_blank" href="https://github.com/LukeTheNeko/SteamHourBoost">
            <button className={styles.button}>Ver</button>
            <ul>
              <li>
                <img src="/icons/ts.svg" alt="Icone Ts" />
              </li>
              <li>
                <img src="/icons/node.svg" alt="Icone Node" />
              </li>
            </ul>
          </a>
        </div>

        <div className={styles['item-grid']}>
          <img src="./banners/notzsite.png" alt="Notz site Logo" />
          <h3 className={styles['gd-pink-1']}>Notz<br />Website</h3>
          <p>Site para um servidor de Minecraft.</p>
          <a target="_blank" href="https://redenotz.net">
            <button className={styles.button}>Ver</button>
            <ul>
              <li>
                <img src="/icons/ts.svg" alt="Icone Ts" />
              </li>
              <li>
                <img src="/icons/react.svg" alt="Icone React" />
              </li>
            </ul>
          </a>
        </div>

        <div className={styles['item-grid']}>
          <img src="./banners/maintenance.png" alt="NekoMaintenance Logo" />
          <h3 className={styles['gd-pink-1']}>Neko<br />Maintenance</h3>
          <p>Minecraft Plugin em Kotlin que ativa ou desativa o modo de manuntenção no servidor.</p>
          <a target="_blank" href="https://github.com/LukeTheNeko/NekoMaintenance">
            <button className={styles.button}>Ver</button>
            <ul>
              <li>
                <img src="/icons/kotlin.svg" alt="Icone Kotlin" />
              </li>
            </ul>
          </a>
        </div>

        <div className={styles['item-grid']}>
          <img src="./banners/tweetrandom.png" alt="Tweetrandomword Logo" />
          <h3 className={styles['gd-pink-1']}>Tweet<br />RandomWord</h3>
          <p>Bot para Tweets de palavras aleatórias a cada 30 minutos.</p>
          <a target="_blank" href="https://github.com/LukeTheNeko/TweetRandomWord">
            <button className={styles.button}>Ver</button>
            <ul>
              <li>
                <img src="/icons/js.svg" alt="Icone Js" />
              </li>
              <li>
                <img src="/icons/node.svg" alt="Icone Node" />
              </li>
            </ul>
          </a>
        </div>

        <div className={styles['item-grid']}>
          <img src="./banners/discord.png" alt="Logo" />
          <h3 className={styles['gd-pink-1']}>Kaze<br />BOT</h3>
          <p>Discord Bot simples com banco de dados.</p>
          <a target="_blank" href="https://github.com/LukeTheNeko/KazeBOT">
            <button className={styles.button}>Ver</button>
            <ul>
              <li>
                <img src="/icons/ts.svg" alt="Icone Ts" />
              </li>
              <li>
                <img src="/icons/node.svg" alt="Icone Node" />
              </li>
              <li>
                <img src="/icons/mongodb.svg" alt="Icone MongoDb" />
              </li>
            </ul>
          </a>
        </div>

        <div className={styles['item-grid']}>
          <img src="./banners/clearlag.png" alt="Logo" />
          <h3 className={styles['gd-pink-1']}>Neko<br />Clear Lag</h3>
          <p>Minecraft Plugin que remove items do chão evitando Lag.</p>
          <a target="_blank" href="https://github.com/LukeTheNeko/NekoClearLag">
            <button className={styles.button}>Ver</button>
            <ul>
              <li>
                <img src="/icons/kotlin.svg" alt="Icone Kotlin" />
              </li>
            </ul>
          </a>
        </div>

        <div className={styles['item-grid']}>
          <img src="./banners/utility.png" alt="NekoUtility Logo" />
          <h3 className={styles['gd-pink-1']}>Neko<br />Utility</h3>
          <p>Minecraft Plugin que adiciona comandos e funções essenciais.</p>
          <a target="_blank" href="https://github.com/LukeTheNeko/NekoUtility">
            <button className={styles.button}>Ver</button>
            <ul>
              <li>
                <img src="/icons/kotlin.svg" alt="Icone Kotlin" />
              </li>
            </ul>
          </a>
        </div>

        {/* More Here*/}

      </div>
    </main>
  );
}