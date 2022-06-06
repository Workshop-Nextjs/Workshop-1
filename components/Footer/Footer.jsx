import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <i>Copyright © 2022 Cat Power - all right reserved</i>
        <div>
          <nav className="footer-nav">
            <li>
              <Link href="/" className="link-nav">
                Page d'accueil
              </Link>
            </li>
            <li>
              <Link href="/cats" className="link-nav">
                Nos chats
              </Link>
            </li>
            <li>
              <Link href="/cats/baby-cats" className="link-nav">
                Bébés chats
              </Link>
            </li>
            <li>
              <Link href="/cats/kingdom-cats" className="link-nav">
                Royaume des chats
              </Link>
            </li>
          </nav>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
