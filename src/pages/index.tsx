import type { NextPage } from "next";
import Image from "next/image";
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
        <h1>Hi!</h1>
      </SEO>
    </>
  );
};

// <section className="aboutme-section">
// <Image className='dots-back' src="/img/dots-pattern.png" alt="dots pattern background">
// <img className='logo' src="./images/coding.svg" alt="logo">
// <div className="aboutme-container">
// <img className='me' src="./images/Luis-Cadillo.jpg" alt="luis cadillo's photo">
// <div className="description-container">
// <p className="description__advice">👋 Hey, I'm</p>
// <h1>Luis <br />Cadillo</h1>
// <p className="description__message">Frontend developer with experience in building clean interfaces using react. Detail-oriented to provide peak performance and the best user experience.</p>
// </div>
// </div>
// </section>
export default Home;
