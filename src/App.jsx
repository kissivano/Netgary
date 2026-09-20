import { useState } from "react";
import { translations } from "./data/translations";

import Header from "./components/Header";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import Services from "./components/Services";
import TechLoop from "./components/TechLoop";
import WhyNetgary from "./components/WhyNetgary";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

function App() {
  const [language, setLanguage] = useState("hu");

  const t = translations[language];

  return (
    <>
      <Header language={language} setLanguage={setLanguage} t={t} />

      <main>
        <Hero t={t} />
        <IntroSection t={t} />
        <Services t={t} />
        <TechLoop t={t} />
        <WhyNetgary t={t} />
        <ContactCTA t={t} />
      </main>

      <Footer t={t} />
    </>
  );
}

export default App;
