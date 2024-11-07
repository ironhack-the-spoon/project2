function OurCulinaryQuest() {
  return (
    <section className="about-mission mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-lg text-center">
      <div className="flex flex-col items-center mb-4">
        <img
          src="../assets/images/about-quest.png"
          alt="Culinary Quest Icon"
          className="w-16 h-16 mb-2"
        />
        <h2 className="text-3xl font-semibold text-customGreen mb-4">
          Our Culinary Quest
        </h2>
      </div>
      <p className="text-lg leading-relaxed">
        At The Spoon, we are on a tasty mission to connect you with the crème de
        la crème of Parisian dining. We handpick the city’s finest restaurants,
        featuring a vibrant mix of cuisines and atmospheres. Whether you are a
        local foodie or a traveling adventurer, our platform is your go-to guide
        for discovering hidden gems and iconic spots! Let us make every meal a
        memorable adventure, with detailed reviews to enhance your journey!
      </p>
    </section>
  );
}

export default OurCulinaryQuest;
