import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Nossa Cultura"
        title="Equilibre sua paixão com o que gosta."
        invert
      >
        <p>
        Somos um grupo de pessoas com ideias semelhantes que compartilham os mesmos valores fundamentais.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Lealdade " invert>
          Nossa equipe está conosco desde o início porque nenhum deles pode ter perfis no LinkedIn.
          </GridListItem>
          <GridListItem title="Confiar" invert>
          Não nos importamos quando nossa equipe trabalha, desde que trabalhe o tempo todo.
          </GridListItem>
          <GridListItem title="Compaixão" invert>
          Você nunca sabe o que alguém está passando em casa e garantimos que nunca descobriremos.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
