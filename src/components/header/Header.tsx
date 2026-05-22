"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

const routes = [
  {
    link: "/",
    icon: "/navbar/cat.png",
    label: "Início",
  },
  {
    link: "/ongs",
    icon: "/navbar/heart.png",
    label: "ONGs",
  },
  {
    link: "/doacoes",
    icon: "/navbar/box.png",
    label: "Doações",
  },
  {
    link: "/castracoes",
    icon: "/navbar/scissors.png",
    label: "Castrações",
  },
  {
    link: "/exigencias",
    icon: "/navbar/check.png",
    label: "Exigências",
  },
  {
    link: "/racas",
    icon: "/navbar/breed.png",
    label: "Raças",
  },
  {
    link: "/cat-sitters",
    icon: "/navbar/sitter.png",
    label: "Cat Sitters",
  },
];

export const Header = () => {
  const pathname = usePathname();

  const isActiveRoute = (routeLink: string) => {
    if (routeLink === "/") {
      return pathname === routeLink;
    }

    return pathname === routeLink || pathname.startsWith(`${routeLink}/`);
  };

  return (
    <header>
      <div className={styles.logo_bar}>
        <div className={styles.logo_bar_content}>
          <div className={styles.site_logo}>
            <Image src="/icon-portal-felino.png" width={32} height={32} alt="logo" />
            <span>Portal Felino</span>
          </div>
        </div>
      </div>

      <nav className={styles.nav} aria-label="Navegação principal">
        <div className={styles.nav_container}>
          {routes.map((route) => (
            <Link
              className={
                isActiveRoute(route.link) ? styles.nav_box_active : styles.nav_box
              }
              href={route.link}
              key={route.label}
            >
              <Image width={18} height={18} src={route.icon} alt="icon" />
              <span>{route.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};
