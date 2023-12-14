import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Descobrir" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Trabalhamos em estreita colaboração com nossos clientes para entender suas{" "}
          <strong className="font-semibold text-neutral-950">necessidades e objetivos </strong> 
          incorporando-nos em suas operações diárias para entender o que faz seu negócio funcionar.
        </p>
        <p>
        Nossa equipe de investigadores particulares acompanha o diretor da empresa por várias semanas, enquanto nossos gerentes de contas se concentram em vasculhar o lixo. Nossos especialistas seniores em segurança realizam hacks de engenharia social para obter acesso às suas contas {" "}
          <strong className="font-semibold text-neutral-950">comerciais </strong>
          — entregar essas informações à nossa equipe de contabilidade.
        </p>
        <p>
        Assim que a auditoria completa for concluída, apresentamos um relatório com um 
          <strong className="font-semibold text-neutral-950"> plano</strong> abrangente e, mais importante, um orçamento para a gestão.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Incluído nesta fase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Questionários aprofundados</TagListItem>
        <TagListItem>Estudos de viabilidade</TagListItem>
        <TagListItem>Comunicação</TagListItem>
        <TagListItem>Pesquisas com funcionários</TagListItem>
        <TagListItem>Provas de conceito</TagListItem>
        <TagListItem>Auditoria</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
