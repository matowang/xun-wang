import Link from 'next/link';

import Navbar from './navbar';

const Header = () =>
    <header id="header">
        <Link href="/" >
            <a id="navbar__logo">Morris Wang</a>
        </Link>
        <Navbar />
        <style jsx>{`
            #header {
                position: fixed;
                top: 0;
                left: 0;
                display: flex;
                justify-content: space-between;
                width: 100%;
                padding: 2em;
                z-index: 3;
                font-size: .8em;
            }
            a {
                text-decoration: none;
                color: white;
            }
        `}</style>
    </header>


export default Header;