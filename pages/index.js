import Head from 'next/head';
import Todos from '../components/todolist';


export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Todos />
    </div>
  )
}
