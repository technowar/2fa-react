import { useRef } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  const inputRef = useRef([]);
  const { value } = props;

  /*
  function onChange(evt, idx) {
    let { target } = evt;

    target = {
      ...target,
      value: target.validity.valid ? target.value : '',
    };

    console.log(idx);
    console.log(inputRef);
  }
  */

  function onKeyUp(evt, idx) {
    console.log(evt.target.validity.valid);

    let { target } = evt;

    if (evt.keyCode === 8) {
      console.log('here');
    }
  }

  /*
  async function onChange(evt) {
    await fetch('http://1.1.1.2:3000/api/validate', { method: 'POST' });
  }
  */

  return (
    <div className={styles.container}>
      <Head>
        <title>Blys 2FA Verification</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          Two-Factor Authentication
        </p>

        <div className={styles.grid}>
          {[0, 1, 2, 3, 4, 5].map((elem, idx) => (
            <div className={styles.inputContainer} key={idx}>
              <input
                autoFocus
                className={styles.input}
                maxLength="1"
                pattern="\d*"
                type="tel"
                ref={el => inputRef.current[idx] = el}
                onKeyUp={(evt) => onKeyUp(evt, idx)}
              />
            </div>
          ))}
        </div>

        <div className={styles.infoContainer}>
          <span className={styles.info}>
            Enter the code below to continue.
          </span>
          <span className={styles.info}>
            {value}
          </span>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://1.1.1.2:3000/api/generate')
  const { value } = await res.json()

  return {
    props: {
      value
    },
  };
}
