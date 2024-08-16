import ProjetosBanner from "./ProjetosBanner";

export default function Projetos() {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <ProjetosBanner
                        image="/images/icons/logoglad.webp"
                        alt="BOT GladMC"
                        href='https://github.com/LukeTheNeko/GladFarm'
                        title={<><p>BOT</p> <p>GladMC</p></>}
                        content={<p>BOT para farm AFK no GladMC com controlado no Discord.</p>}
                        icons={[
                            "/images/icons/js.svg",
                            "/images/icons/node.svg",
                        ]}
                    />

                    <ProjetosBanner
                        image="/images/icons/steam.svg"
                        alt="Steam HourBoost"
                        href='https://github.com/LukeTheNeko/SteamHourBoost'
                        title={<><p>Steam</p> <p>HourBoost</p></>}
                        content={<p>Bot para aumentar horas nos jogos da Steam.</p>}
                        icons={[
                            "/images/icons/ts.svg",
                            "/images/icons/node.svg",
                        ]}
                    />

                    <ProjetosBanner
                        image="/images/icons/maintenance.svg"
                        alt="Neko Maintenance"
                        href='https://github.com/LukeTheNeko/NekoMaintenance'
                        title={<><p>Neko</p> <p>Maintenance</p></>}
                        content={<p>Minecraft Plugin em Kotlin que ativa ou desativa o modo de manuntenção no servidor..</p>}
                        icons={[
                            "/images/icons/kotlin.svg",
                        ]}
                    />

                    <ProjetosBanner
                        image="/images/icons/twitter.svg"
                        alt="Tweet RandomWord"
                        href='https://github.com/LukeTheNeko/TweetRandomWord'
                        title={<><p>Tweet</p> <p>RandomWord</p></>}
                        content={<p>Bot para Tweets de palavras aleatórias a cada 30 minutos.</p>}
                        icons={[
                            "/images/icons/js.svg",
                            "/images/icons/node.svg",
                        ]}
                    />

                    <ProjetosBanner
                        image="/images/icons/discord.svg"
                        alt="Discord BOT"
                        href='https://github.com/LukeTheNeko/KazeBOT'
                        title={<><p>Kaze</p> <p>BOT</p></>}
                        content={<p>Discord Bot simples com banco de dados.</p>}
                        icons={[
                            "/images/icons/ts.svg",
                            "/images/icons/node.svg",
                            "/images/icons/mongodb.svg",
                        ]}
                    />

                    <ProjetosBanner
                        image="/images/icons/clean.svg"
                        alt="Neko Clear Lag"
                        href='https://github.com/LukeTheNeko/NekoClearLag'
                        title={<><p>Neko</p> <p>Clear Lag</p></>}
                        content={<p>Minecraft Plugin que remove items do chão evitando Lag.</p>}
                        icons={[
                            "/images/icons/kotlin.svg",
                        ]}
                    />

                    <ProjetosBanner
                        image="/images/icons/potion.svg"
                        alt="Neko Utility"
                        href='https://github.com/LukeTheNeko/NekoUtility'
                        title={<><p>Neko</p> <p>Utility</p></>}
                        content={<p>Minecraft Plugin que adiciona comandos e funções essenciais.</p>}
                        icons={[
                            "/images/icons/kotlin.svg",
                        ]}
                    />

                </div>
            </div>
        </>
    )
}