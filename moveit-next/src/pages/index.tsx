import Head from 'next/head'
import { ChallengeBox } from '../components/ChallegeBox';
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CountdownContextProvider } from '../contexts/CountdownContext';
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Move.it</title>
      </Head>


    <ExperienceBar />
<CountdownContextProvider>
    <section>
      <div >
          <Profile />
          <CompletedChallenges />
          <Countdown />
      </div>
      <div>
 <ChallengeBox />
      </div>
    </section>
    </CountdownContextProvider>
    </div>
    
    )
  }
