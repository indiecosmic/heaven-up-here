import Link from "next/link";
import Image from 'next/image'
import SocialLinks from "./social-icons";

export default function Footer() {
  return (
    <footer className="footer segment segment--padding">
      <div className="footer__primary">
        <Link className="footer__logo" href="/">
          <img src="/heavenuphere_logo.svg" className="hidden header__logo-image" alt="Heaven Up Here Logo" />
        </Link>
        <div className="footer__content">
          <p className="footer__text">Restaurang Landet</p>
          <p className="footer__text">LM Ericssons väg 27</p>
          <p className="footer__text">126 37 Hägersten</p>
        </div>
      </div>
      <div className="footer__social">
        <SocialLinks />
      </div>
    </footer>
  )
}