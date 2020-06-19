import Header from './header';

const Layout = ({ children }) =>
  <div id='container'>
    <Header />
    {children}
    <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
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