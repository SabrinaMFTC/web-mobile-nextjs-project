import { Feature } from "@/types/features.type";
import styles from "./feature.module.css";

type FeatureCardProps = {
  feature: Feature;
};

export const FeatureCard = ({ feature }: FeatureCardProps) => {
  const { title, description, icon, iconAlt, iconVariant } = feature;

  return (
    <article className={styles.featureCard}>
      <div className={`${styles.featureIconBox} ${styles[iconVariant]}`}>
        <img src={icon} alt={iconAlt} aria-hidden="true" />
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};
