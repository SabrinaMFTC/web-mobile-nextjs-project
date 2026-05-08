"use client";

import { useState } from "react";
import { OngCard } from "@/components/cards/OngCard/OngCard";
import styles from "./page.module.css";
import { ongs } from "@/content/ongs";

export default function Page() {
  const [search, setSearch] = useState<string>("");

  const filteredOngs = ongs.filter((ong) =>
    ong.nome.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="container">
      <section className={styles.pageHeader}>
        <h1>ONGs para Adoção de Gatos</h1>
        <p>
          Conheça as principais ONGs que trabalham com resgate e adoção de
          gatos. Todas são instituições confiáveis e comprometidas com o
          bem-estar animal.
        </p>
      </section>

      <section className={styles.pageBanner}>
        <img src="ongs.png" alt="Gatos disponíveis para adoção" />
      </section>

      <section className={styles.searchSection} aria-label="Busca de ONGs">
        <label className={styles.searchLabel} htmlFor="search-ong">
          Buscar ONG
        </label>

        <input
          id="search-ong"
          className={styles.searchInput}
          type="text"
          placeholder="Buscar por nome"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </section>

      <section className={styles.ongsList} aria-label="Lista de ONGs">
        {filteredOngs.map((ong) => (
          <OngCard ong={ong} key={ong.id} />
        ))}
      </section>
      <aside className={styles.tipsBox} aria-labelledby="tips-title">
        <h2 id="tips-title">Dicas antes de visitar uma ONG:</h2>

        <ul className={styles.tipsList}>
          <li>
            Entre em contato antes de visitar para confirmar horários e
            disponibilidade.
          </li>
          <li>
            Leve documentos pessoais, como RG, CPF e comprovante de residência.
          </li>
          <li>
            Esteja preparado para responder perguntas sobre sua rotina e
            moradia.
          </li>
          <li>Seja honesto sobre sua experiência com animais.</li>
          <li>Pergunte sobre o histórico de saúde e comportamento do gato.</li>
        </ul>
      </aside>
    </main>
  );
}
