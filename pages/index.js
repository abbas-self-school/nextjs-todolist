import Head from 'next/head';
import Todos from '../components/todolist';


export default function Home() {
  return (
    <div className="flex flex-col w-[100%]">
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/todosImg.png" />
      </Head>
      <Todos />
    </div>
  )
}
