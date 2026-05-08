import styles from "./page.module.css";
import { WhyAdopt } from "@/components/cards/WhyAdopt/Whyadopt";
import { WelcomeCard } from "@/components/cards/WelcomeCard/WelcomeCard";
import { features } from "@/content/feature";
import { FeatureCard } from "@/components/cards/FeatureCard/FeatureCard";

export default function Home() {
  return (
    <main className="container">
      <WelcomeCard />
      <section className={styles.features} aria-labelledby="features-title">
        <h2>O que você encontrará aqui</h2>

        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <FeatureCard feature={feature} key={feature.id} />
          ))}
        </div>
      </section>
      <WhyAdopt />
    </main>
  );
}
