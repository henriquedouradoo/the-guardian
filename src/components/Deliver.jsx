import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Software" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Agora chegou o momento da entrega, e como visto antes ela se baseia em métodos tecnologicos {" "}
          <strong className="font-semibold text-neutral-950">
            requisições
          </strong>
          .
        </p>
        <p>
        Garantimos que as etaps principais do projeto estejam{" "}
          <strong className="font-semibold text-neutral-950">
          totalmente funcionais
          </strong>{" "}
          os softwares são como auxiliares é claro, visto que nossa gestão seguirá em tempo {" "}
          <strong className="font-semibold text-neutral-950">
          integral
          </strong>{" "}
          .
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Softwares
      </h3>
      <br />
      <List>
        <ListItem title="Guardian Notion">
        Nossos projetos sempre contam com 100% de cobertura de testes para nosso cliente. Com isso desenvolvemos nosso Notion!
        </ListItem>
        <ListItem title="Guardian Todo">
        Nossos projetos são práticos e otimizados. Tudo que há de necessário para nosso cliente. Tenha uma ferramenta poderosa em mãos!
        </ListItem>
        <ListItem title="Guardian Company">
        Nossos projetos fazem parte do futuro. Não tem motivos para sua empresa não entrar para a guardian!
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
