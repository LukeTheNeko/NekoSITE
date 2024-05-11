import styles from './technology.module.scss';
import { BoxTecnologia } from '../ui/box';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export function Technology() {
  interface Dados {
    path: string;
    name: string;
    subMessages: string;
  }

  const [ boxes ] = useState<Dados[]>([
    {
      path: "./icons/js.svg",
      name: "JavaScript",
      subMessages: ""
    },
    {
      path: "./icons/ts.svg",
      name: "TypeScript",
      subMessages: ""
    },
    {
      path: "./icons/html.svg",
      name: "Html",
      subMessages: ""
    },
    {
      path: "./icons/css.svg",
      name: "Css",
      subMessages: ""
    },
    {
      path: "./icons/sass.svg",
      name: "Sass",
      subMessages: ""
    },
    {
      path: "./icons/kotlin.svg",
      name: "Kotlin",
      subMessages: ""
    },
    {
      path: "./icons/java.svg",
      name: "Java",
      subMessages: ""
    },
    {
      path: "./icons/nextjs.svg",
      name: "Nextjs",
      subMessages: ""
    },
    {
      path: "./icons/react.svg",
      name: "React",
      subMessages: ""
    },
    {
      path: "./icons/node.svg",
      name: "Nodejs",
      subMessages: ""
    },
    {
      path: "./icons/firebase.svg",
      name: "Firebase",
      subMessages: ""
    },
    {
      path: "./icons/mongodb.svg",
      name: "Mongodb",
      subMessages: ""
    },
  ]);
  const carousel = useRef() as React.MutableRefObject<HTMLInputElement>;;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    console.log(width)
  }, []);

  return (
    <main className={styles.main} id='tecnologia'>
      <div className={styles.carousel} data-aos="fade-left">
        <h1>Tecnologias que utilizo</h1>
        <motion.div className={styles.boxes}
          ref={carousel}
          whileTap={{ cursor: 'grabbing' }}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.0 }}
        >
          {boxes.map((box, index) => (
            <motion.div className={styles.motion} key={index}>
              <BoxTecnologia path={box.path} name={box.name} subMessage={box.subMessages} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}