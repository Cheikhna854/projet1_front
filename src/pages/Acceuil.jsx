
import Hero from "../composant/Hero";
import Annonce from "../composant/Annonce";
import Section from "../composant/Section";

const Acceuil = ({ ouvert }) => {
  return (
    <>
      <Hero />
      {ouvert ? <Section /> : ""}
      <Annonce />
    </>
  );
};
export default Acceuil;