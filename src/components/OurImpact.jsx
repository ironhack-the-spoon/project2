function OurImpact() {
  return (
    <section className="about-impact mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-lg text-center">
      <div className="flex flex-col items-center mb-4">
        <img
          src="../assets/images/about-impact.png"
          alt="Impact Icon"
          className="w-16 h-16 mb-2"
        />
        <h2 className="text-3xl font-semibold text-customGreen mb-4">
          Our Impact
        </h2>
      </div>
      <p className="text-lg leading-relaxed">
        We are proud to support local businesses by driving more customers to
        their doors. Our platform helps restaurants grow their customer base and
        increase visibility in their communities.
      </p>
    </section>
  );
}

export default OurImpact;
