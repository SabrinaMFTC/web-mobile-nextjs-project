import styles from "./whyAdopt.module.css";

export const WhyAdopt = () => {
  return (
    <section className={styles.benefits} aria-labelledby="benefits-title">
      <div className={styles.benefitsContainer}>
        <h2 id="benefits-title">Por que adotar um gato?</h2>

        <div className={styles.benefitsGrid}>
          <article className={styles.benefitColumn}>
            <h3>Benefícios para você</h3>
            <ul>
              <li>Companhia afetuosa e independente</li>
              <li>Redução do estresse e da ansiedade</li>
              <li>Baixa manutenção em comparação com outros pets</li>
              <li>Ideais para apartamentos</li>
              <li>Ajudam a combater a solidão</li>
            </ul>
          </article>

          <article className={styles.benefitColumn}>
            <h3>Benefícios para os gatos</h3>
            <ul>
              <li>Uma segunda chance de ter um lar</li>
              <li>Amor e cuidados que merecem</li>
              <li>Segurança e alimentação garantidas</li>
              <li>Cuidados veterinários regulares</li>
              <li>Vida longa e feliz</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};
