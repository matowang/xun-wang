import Link from 'next/link';
import Head from 'next/head';


import Navbar from './navbar';

const Header = () =>
    <header id="header">
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Link href="/" >
            <a id="navbar__logo">Morris Wang</a>
        </Link>
        <Navbar />
        <style jsx>{`
            #header {
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                justify-content: space-between;
                width: 100%;
                padding: 2em;
            }
            a {
                text-decoration: none;
                color: white;
            }
        `}</style>
    </header>


export default Header;