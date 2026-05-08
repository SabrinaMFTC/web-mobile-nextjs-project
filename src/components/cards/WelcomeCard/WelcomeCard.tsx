import styles from "./card.module.css";

export const WelcomeCard = () => {
  return (
    <section className={styles.hero} aria-label="Apresentação do Portal Felino">
      <div className={styles.heroContent}>
        <h1>Bem-vindo ao Portal Felino</h1>
        <p>
          Seu guia completo para adoção e cuidados com gatos. Encontre todas as
          informações necessárias para dar uma vida feliz ao seu felino.
        </p>
        <a className={styles.heroButton} href="#ongs">
          Adote um Gatinho
        </a>
      </div>
    </section>
  );
};
