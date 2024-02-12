import Link from "next/link";
import styles from '@/app/ui/header.module.css';
import SocialLinks from "./social-icons";

export default function Header() {
  return (
    <header className="header" role="banner">
      <Link href="/" className={styles.header__logo}>
        <img src="/heavenuphere_logo.svg" alt="Heaven Up Here Logo" className="header__logo-image" />
      </Link>
      <SocialLinks />
    </header>
  )
}