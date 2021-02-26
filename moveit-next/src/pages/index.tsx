import Head from 'next/head'
import { ChallengeBox } from '../components/ChallegeBox';
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CountdownContextProvider } from '../contexts/CountdownContext';
import styles from '../styles/pages/Home.module.css'
import { GetServerSideProps } from 'next'
import { ReactNode } from 'react';
import {ChallengesProvider} from '../contexts/ChallengesContexts'

interface HomeProps {
  children: ReactNode
  level:number, 
  currentExperience:number,
   challengesCompleted: number
}

export default function Home(props: HomeProps) {
  console.log(props)
  return (
    <ChallengesProvider  level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
    
    >
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
    </ChallengesProvider>
    )
  }

  export const getServerSideProps: GetServerSideProps = async (ctx) => {
const {level, currentExperience, challengesCompleted} = ctx.req.cookies;

    return{
      props:{
        level: Number(level), 
        currentExperience: Number(currentExperience),
         challengesCompleted: Number(challengesCompleted)
        }
    }
  }

