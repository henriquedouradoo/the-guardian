import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Solucionar" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Com base na fase de descoberta, desenvolvemos um roteiro abrangente para cada produto e começamos a trabalhar para a entrega. Neste roteiro observamos quais serão os softwares que ofereceremos para a empresa!
        </p>
        <p>
        Essa abordagem colaborativa permite uma compreensão profunda dos desafios e objetivos do cliente, garantindo que as soluções desenvolvidas estejam alinhadas com suas metas estratégicas. Ao transformar roteiros em soluções tangíveis, a empresa não apenas oferece inovação técnica, mas também promove uma sinergia eficaz entre a visão do cliente e a experiência da equipe de desenvolvimento, resultando em soluções robustas e adaptáveis que impulsionam o sucesso a longo prazo para as empresas parceiras.
        </p>
        <p>
          Por fim todos os processos foram feitos está na hora do cliente usufruir de seu mais novo software tendo em vista quais serão as mudanças no controle de ativos e quais serão as implementações.
        </p>
      </div>
      <Blockquote
        author={{ name: "Phil Heath", role: "Colaborador´ Panatta" }}
        className="mt-12"
      >
        A Guardian era tão regular com suas atualizações de progresso que quase começamos a pensar que eram automatizadas!
      </Blockquote>
    </Section>
  );
};

export default Build;
