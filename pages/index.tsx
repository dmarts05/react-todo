import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>NextDo</title>
        <meta name='description' content='A simple Todo app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='text-red-500'>Home</div>
    </>
  );
};

export default HomePage;
