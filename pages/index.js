import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { GoogleAnalytics } from '@next/third-parties/google'


export default function Home() {
  return  (
    <div>
      <Head>
        <title>Ton | JFSD & WFD</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/tonFav.png" />
        <GoogleAnalytics gaId="G-0PE0RPD6G8" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
