import Team from "../assets/images/about-team.png";

function OurTeam() {
  return (
    <section className="about-team mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col items-center text-center">
      <img src={Team} alt="Team Icon" className="w-16 h-16 mb-4" />
      <h2 className="text-3xl font-semibold mb-4 text-customGreen">Our Team</h2>
      <p className="text-lg leading-relaxed">
        Our team is composed of passionate food enthusiasts and tech experts
        committed to delivering the best dining experience. We are dedicated to
        continuous improvement and innovation.
      </p>
    </section>
  );
}

export default OurTeam;
