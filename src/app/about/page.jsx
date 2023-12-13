import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="Sobre" title="Nossa força é a colaboração">
        <p>
        Acreditamos que a nossa força reside na nossa abordagem colaborativa, que coloca os nossos clientes no centro de tudo o que fazemos.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          Guardian foi iniciado por um grupo de 5 pessoas que perceberam que o gerenciamento de desenvolvimento e planejamento dos clientes seria a maneira deles de deixar o seu legado. Desde o início, temos o compromisso de fazer as coisas de forma diferente, cobrando o triplo.
          </p>
          <p>
          No Guardian, somos mais do que apenas colegas: somos uma família. 
          venha fazer parte você também desse nosso lindo processo!
          </p>
          <br />
          <br />
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="212" label="Empresas Guardian" />
          <StatListItem value="400" label="Clientes Totais" />
          <StatListItem value="R$35M" label="Fatura" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
