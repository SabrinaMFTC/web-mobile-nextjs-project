import { Ong } from "@/types/ong.type";
import styles from "./card.module.css";

type OngCardProps = {
  ong: Ong;
};

export const OngCard = ({ ong }: OngCardProps) => {
  const {
    nome,
    descricao,
    endereco,
    telefone,
    email,
    site,
    horarioFuncionamento,
  } = ong;

  return (
    <article className={styles.ongCard}>
      <h2>{nome}</h2>

      <p className={styles.ongDescription}>{descricao}</p>

      <div className={styles.ongInfoGrid}>
        <p className={styles.ongInfoItem}>
          📍 {endereco.rua}, {endereco.numero} - {endereco.cidade},{" "}
          {endereco.estado}
        </p>

        <p className={styles.ongInfoItem}>📞 {telefone}</p>

        <p className={styles.ongInfoItem}>✉ {email}</p>

        <p className={styles.ongInfoItem}>🔗 {site}</p>
      </div>

      <div className={styles.ongHours}>
        <strong>Horário de funcionamento:</strong>
        <span>{horarioFuncionamento}</span>
      </div>
    </article>
  );
};
