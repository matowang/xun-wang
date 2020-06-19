import Head from 'next/head'

import Layout from '../layout';

import sanityClient from '../lib/sanity.js';

export default function Home(props) {
  console.log(props);
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <div id="hero">
          <img id="hero__bg" src="/slim-bg.jpg" alt="slim model" loading="lazy" />
          <div id="title-container" className="vertical-text">
            <h1 id="title">XUNWANG</h1>
          </div>
        </div>
      </main>
      <style jsx>{`
          main {
  
          }
          #hero {
            width: 100%;
            height: 100vh;
            min-height: 500px;
          }
          #hero__bg {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          #title-container {
            position: absolute;
            left: 50%;
            top: 30%;
            transform: translate(-50%);
          }
          #title {
            color: white;
            font-family: 'Ubuntu Mono', monospace;
            font-weight: 100;
            line-height: 1.5em;
          }
        `}</style>
    </Layout >
  )
}

export async function getStaticProps() {
  const query = `*[_type == "project"]{
    name,
    description,
    "imageUrl": image.asset->url
  }`
  const params = {}

  const res = await sanityClient.fetch(query, params)

  console.log(res);

  return { props: { ...res } }
}