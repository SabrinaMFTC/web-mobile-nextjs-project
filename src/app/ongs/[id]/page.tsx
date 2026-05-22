"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { Ong } from "@/types/ong.type";
import styles from "./page.module.css";

export default function OngDetailsPage() {
  const params = useParams<{ id: string }>();
  const [ong, setOng] = useState<Ong | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadOng() {
      try {
        const response = await fetch(`/api/ongs/${params.id}`);

        if (!response.ok) {
          notFound();
        }

        const data: Ong = await response.json();

        setOng(data);
      } catch {
      } finally {
        setIsLoading(false);
      }
    }

    void loadOng();
  }, [params.id]);

  if (isLoading) {
    return (
      <main className="container">
        <p>Carregando ONG...</p>
      </main>
    );
  }

  if (!ong) {
    notFound();
  }

  return (
    <main className="container">
      <nav className={styles.breadcrumb} aria-label="Navegação de retorno">
        <Link href="/ongs">Voltar para lista de ONGs</Link>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>ONG parceira</span>
          <h1>{ong.nome}</h1>
          <p>{ong.descricao}</p>
        </div>

        <aside className={styles.highlightCard}>
          <h2>Atendimento</h2>
          <strong>{ong.horarioFuncionamento}</strong>
          <p>
            Confirme horários e disponibilidade antes da visita para garantir um
            atendimento mais tranquilo.
          </p>
        </aside>
      </section>

      <section className={styles.contentGrid}>
        <article className={styles.mainCard}>
          <h2>Sobre a ONG</h2>
          <p>
            {ong.nome} atua com foco em acolhimento, proteção e adoção
            responsável. Antes de visitar, vale entrar em contato para entender
            o processo de adoção, documentos necessários e orientações
            específicas da instituição.
          </p>

          <div className={styles.infoPanel}>
            <h3>Endereço</h3>
            <p>
              {ong.endereco.rua}, {ong.endereco.numero}
            </p>
            <p>
              {ong.endereco.cidade}, {ong.endereco.estado}
            </p>
          </div>
        </article>

        <aside className={styles.sidebar}>
          <section className={styles.contactCard}>
            <h2>Contato</h2>

            <div className={styles.contactList}>
              <a href={`tel:${ong.telefone}`} className={styles.contactItem}>
                <span>Telefone</span>
                <strong>{ong.telefone}</strong>
              </a>

              <a href={`mailto:${ong.email}`} className={styles.contactItem}>
                <span>E-mail</span>
                <strong>{ong.email}</strong>
              </a>

              <a
                href={ong.site || "/#"}
                target="_blank"
                rel="noreferrer"
                className={styles.contactItem}
              >
                <span>Site</span>
                <strong>{ong.site || "Não informado"}</strong>
              </a>
            </div>
          </section>

          <section className={styles.tipsCard}>
            <h2>Antes da visita</h2>
            <ul>
              <li>Confirme o horário de funcionamento.</li>
              <li>Leve documentos pessoais e comprovante de residência.</li>
              <li>
                Pergunte sobre saúde, comportamento e adaptação do animal.
              </li>
            </ul>
          </section>
        </aside>
      </section>
    </main>
  );
}
