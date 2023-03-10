import Head from "next/head";
import Image from "next/image";
import { App } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pomodoro Timer</title>
        <meta name="description" content="a pomodoro timer for fcc project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='0.9em' font-size='90'%3E🍅%3C/text%3E%3C/svg%3E"
        />
      </Head>
      <App />
    </>
  );
}
