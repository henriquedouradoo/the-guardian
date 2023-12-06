import Button from "@/components/Button";
import PageIntro from "@/components/PageIntro";

const BlogPage = () => {
  return (
    <>
      <PageIntro eyebrow="Aplicativo" title="The Guardian App">
        <p>
          Isso mesmo... Estamos aqui para inovar de uma maneira que você 
          ainda não viu! 
        </p>
        <Button href={'https://expo.dev/'} type="submit" className="space-x-28 py-3 mt-10">Download</Button>
        ||
        <Button href={'https://expo.dev/'} type="submit" className="space-x-28 py-3 mt-10">Repositorio</Button>
      </PageIntro>
    </>
  );
};

export default BlogPage;
