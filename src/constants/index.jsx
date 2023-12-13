import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Trabalho",
    links: [
      { title: "Guardian Notion", href: "https://guardian-notion.vercel.app/" },
      { title: "Guardian Todo", href: "https://guardian-todo.vercel.app/" },
      { title: "Guardian Company", href: "https://guardian-social.vercel.app/" },
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
      { title: "Software", href: "/work" },
      { title: "Contato", href: "/contact" },
    ],
  },
  {
    title: "Midias",
    links: SocialMediaProfiles,
  },
];
