import Link from 'next/link';

const Navbar = () =>
    <nav id="navbar">
        <ul id="navbar__list">
            <li id="navbar__list__item">
                <Link href="/works" id="navbar__list__item__link">
                    <a>Works</a>
                </Link>
            </li>
        </ul>
        <style jsx>{`
            #navbar {
                display: flex;
            }
            #navbar__list {
                list-style-type: none;
                margin: 0;
                padding: 0;
            }
            a {
                text-decoration: none;
                color: white;
            }
        `}</style>
    </nav>


export default Navbar;