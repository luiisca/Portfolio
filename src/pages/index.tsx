import type { NextPage } from "next";
import SEO from "../components/SEO";

const Home: NextPage = () => {
  const url = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:${process.env.PORT ?? 3000}`;

  return (
    <>
      <SEO
        description={"Luis Cadillo's Porfolio"}
        image={`${url}/img/logo.svg`}
        title={"Luis Cadillo"}
        keywords={
          "Portfolio, Software Engineer, Frontend Developer, React, Next.js, Typescript, TailwindCSS, trpc, Prisma, Git, Github"
        }
      >
        <div>Hi!</div>
      </SEO>
    </>
  );
};

export default Home;
