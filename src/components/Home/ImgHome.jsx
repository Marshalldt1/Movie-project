import React from 'react';
import { useEffect } from 'react';
import styles from '../Home/ImgHome.module.css';
import pulpFiction from './../assets/pulpFiction.jpg';

const ImgHome = () => {
  const [digitando, setDigitando] = React.useState('');
  let [index, setIndex] = React.useState(-1);
  const frase = 'Pesquise filmes, novidades e divirta-se!';
  const array = frase.split('');

  useEffect(() => {
    setTimeout(() => {
      if (digitando.length < array.length) {
        setDigitando([...digitando, array[index]]);
        setIndex(++index);
      }
    }, 100);
  }, [index]);

  return (
    <section
      style={{ backgroundImage: `url(${pulpFiction})` }}
      className={`shadow-lg shadow-gray-500/40 p-6 md-p-20 ${styles.bg_img}`}
    >
      <p
        className={`${styles.title}  text-gray-400 text-3xl  md:text-4xl font-bold`}
      >
        Bem vindo(a).
      </p>
      <p className={`${styles.title} text-white text-sm md:text-xl`}>
        {digitando}
      </p>
    </section>
  );
};

export default ImgHome;
