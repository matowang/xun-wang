import Head from 'next/head'

import Layout from '../layout';

import sanityClient from '../lib/sanity.js';

export default function Home(props) {
  console.log(props);
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <div id="hero">
          <div id="hero__inner">
            <div id="title-container" className="vertical-text">
              <h1 id="title">XUNWANG</h1>
            </div>
            <span id="author">Morris Wang</span>
          </div>
        </div>
      </main>
      <style jsx>{`
          main {
  
          }
          #hero {
            width: 100%;
            height: 100vh;
            min-height: 600px;
            position: relative;
            background: url("/slim-bg.jpg");
            background-size: cover;
            background-position: 35% 50%;
          }
          #hero__bg {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          #hero__inner {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            top: 20%;
            width: 100%;
            height: 1500px;
          }
          #title {
            color: white;
            font-family: 'Ubuntu Mono', monospace;
            font-weight: 100;
            line-height: 1.5em;
            margin: 0 0 2em 0;
          }
          #author {
            color: white;
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