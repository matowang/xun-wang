import Head from 'next/head';

import Header from './header';

const Layout = ({ children }) =>
  <div id='container'>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono&family=Source+Code+Pro&display=swap" rel="stylesheet" />
    </Head>
    <Header />
    {children}
    <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: 'Source Code Pro', monospace;
          }
  
          * {
            box-sizing: border-box;
          }

          .vertical-text {
            width: 1em;
            overflow-wrap: break-word;
            font-family: 'Ubuntu Mono', monospace;
          }
        `}</style>
  </div>

export default Layout;