import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Trabalho",
    links: [
      { title: "Guardian Notion", href: "/" },
      { title: "Guardian Todo", href: "/" },
      { title: "Guardian Company", href: "/" },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },
  {
    title: "Guardian",
    links: [
      { title: "Sobre", href: "/about" },
      { title: "Processo", href: "/process" },
      { title: "Software", href: "/blog" },
      { title: "Contato", href: "/contact" },
    ],
  },
  {
    title: "Midias",
    links: SocialMediaProfiles,
  },
];
