import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Serviços"
        title="Ajudamos você a identificar, explorar e responder a novas oportunidades."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Contanto que essas oportunidades envolvam soluções para redirecionar seus projetos ao sucesso  – podemos criar um número infinito deles.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Desenvolvimento Web">
            Somos especializados na criação de páginas de marketing bonitas e de alta qualidade.
            Já parou para pensar como um bom site capita clientes?
            </ListItem>
            <ListItem title="Desenvolvimento de aplicações">
            Temos uma equipe de desenvolvedores qualificados, especialistas nas estruturas de aplicativos mais recentes, como um todo em FullStack.
            </ListItem>
            <ListItem title="Inteligência Artificial">
            Desenvolvemos modelos avançados para otimizar processos, analisar dados e impulsionar a eficiência, impulsionando o crescimento sustentável do seu negócio.
            </ListItem>
            <ListItem title="Data Science">
            Utilizamos análise avançada de dados para fornecer insights valiosos, orientando decisões informadas e impulsionando a eficácia operacional. Transforme dados em vantagem competitiva com a expertise da nossa equipe especializada.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
