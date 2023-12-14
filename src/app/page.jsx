import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Mude o seu gerenciamento com a Guardian!
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Somos uma empresa de gerenciamento e planejamento cujo nosso 
            propósito é fazer parte de suas metas. Nossa especialidade em tecnologia 
            alinhado da praticidade faz resultados de verdade!
            
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        A equipe do Guardian foi além em nossa integração, até encontrando uma maneira de acessar nossos ativos sem maiores dificuldades com a tecnologia que eles ofertam.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
