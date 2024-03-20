import styles from './styles.module.scss';

export function Project () {
  return (
    <main className={`${styles.main} ${styles.background}`} data-aos="fade-right" id='project '>
      <div className={styles.row}>
        <div className={styles['item-grid']}>
          <img src="/banners/GladFarmBot.png" alt="Logo" />
          <h3 className={styles['gd-pink-1']}>BOT<br />GladMC</h3>
          <p>BOT para farmar AFK no servidor de Minecraft GladMC com comandos usando Discord</p>
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
          <img src="/banners/NekoMaintenance.png" alt="Logo" />
          <h3 className={styles['gd-pink-1']}>Neko<br />Maintenance</h3>
          <p>Plugin para Minecraft em Kotlin que ativa e desativa o modo de manuntenção em seu servidor.</p>
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
          <img src="/banners/rikubot.png" alt="Logo" />
          <h3 className={styles['gd-pink-1']}>Riku<br />BOT</h3>
          <p>Um BOT para Discord usando API v14</p>
          <a target="_blank" href="https://github.com/LukeTheNeko/RikuBOT">
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
          <img src="/banners/NekoClearLag.png" alt="Logo" />
          <h3 className={styles['gd-pink-1']}>Neko<br />Clear Lag</h3>
          <p>Plugin para Minecraft em Kotlin que remove items do chão evitando Lag.</p>
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
          <img src="/banners/Nekoutility.png" alt="Logo" />
          <h3 className={styles['gd-pink-1']}>Neko<br />Utility</h3>
          <p>Um Plugin simples de Minecraft que adiciona comandos essenciais para ajudar no servidor.</p>
          <a target="_blank" href="https://github.com/LukeTheNeko/NekoUtility">
            <button className={styles.button}>Ver</button>
            <ul>
              <li>
                <img src="/icons/kotlin.svg" alt="Icone Kotlin" />
              </li>
            </ul>
          </a>
        </div>

        <div className={styles['item-grid']}>
          <img src="/banners/Infinitibot.png" alt="Logo" />
          <h3 className={styles['gd-pink-1']}>Infiniti<br />BOT</h3>
          <p>Um simples BOT para Discord usando API v14</p>
          <a target="_blank" href="https://github.com/LukeTheNeko/InfinitiBOT">
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
          <img src="/banners/CamryBOT.png" alt="Logo" />
          <h3 className={styles['gd-pink-1']}>Camry<br />BOT</h3>
          <p>Um simples BOT para Discord usando API v14</p>
          <a target="_blank" href="https://github.com/LukeTheNeko/CamryBOT">
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

              {/* More */}

      </div>
    </main>
  );
}