import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Nossos Valores"
        title="Equilibrando confiabilidade e inovação"
      >
        <p>
        Nós nos esforçamos para permanecer na vanguarda das tendências e tecnologias emergentes, a combinação equilibrada de confiabilidade e inovação permite que a empresa atenda às crescentes demandas do mercado, mantendo a integridade e segurança dos ativos gerenciados.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulosa">
          A primeira parte de qualquer parceria é fazer com que nosso designer coloque seu logotipo em nosso template. O segundo passo é fazer com que eles façam as cores.
          </GridListItem>
          <GridListItem title="Eficiente">
          Orgulhamo-nos de nunca perder um prazo, o que é fácil porque a maior parte do trabalho foi feita há anos.
          </GridListItem>
          <GridListItem title="Adaptável">
          Cada empresa tem necessidades únicas e nosso maior desafio é transformar essas necessidades em algo que já construímos.
          </GridListItem>
          <GridListItem title="Honesto">
          Somos transparentes em todos os nossos processos, apostando no simples fato de que nossos clientes nunca leem nada.
          </GridListItem>
          <GridListItem title="Leal">
          Promovemos relacionamentos de longo prazo com nossos clientes que vão além da simples entrega de um produto, permitindo-nos faturá-los por décadas.
          </GridListItem>
          <GridListItem title="Inovadora">
          O cenário tecnológico está sempre evoluindo e nós também. Estamos constantemente em busca de novos projetos de código aberto para clonar.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
