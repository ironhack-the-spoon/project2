import OurCulinaryQuest from "../components/OurCulinaryQuest";
import OurFlavorfulPhilosophy from "../components/OurFlavorfulPhilosophy";
import OurImpact from "../components/OurImpact";
import OurTeam from "../components/OurTeam";
import PageContainer from '../components/PageContainer';


function About() {
  return (
    <PageContainer>

    <div className="about-page p-8 bg-white text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-customGreen">
        About The Spoon
      </h1>

      <OurCulinaryQuest />
      <OurFlavorfulPhilosophy />
      <OurImpact />
      <OurTeam />
    </div>
    </PageContainer>

  );
}

export default About;
