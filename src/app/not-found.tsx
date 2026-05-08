import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>A página que você tentou acessar não existe ou foi removida.</p>

      <Link href="/" className={styles.homeButton}>
        Voltar para a página inicial
      </Link>
    </main>
  );
}
