import { CurrentlyCard } from "@/components/CurrentlyCard";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Contact, Education, Experience, Footer, Leadership, Projects } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <CurrentlyCard />
        <Education />
        <Experience />
        <Projects />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
