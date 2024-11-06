function OurFlavorfulPhilosophy() {
  const items = [
    {
      imgSrc: "src/images/about-taste.png",
      altText: "Taste Bud Besties Icon",
      title: "Taste Bud Besties",
      description: "We customize every flavor journey to your cravings!",
    },
    {
      imgSrc: "src/images/about-snacktastic.png",
      altText: "Snacktastic Surprises Icon",
      title: "Snacktastic Surprises",
      description:
        "Expect delightful taste discoveries that will brighten your day!",
    },
    {
      imgSrc: "src/images/about-dine.png",
      altText: "Dine & Shine Icon",
      title: "Dine & Shine",
      description: "Each meal leaves you shining with satisfaction!",
    },
  ];

  return (
    <section className="philosophy mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4 text-customGreen text-center">
        Our Flavorful Philosophy
      </h2>
      <div className="flex justify-around items-center h-64">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.imgSrc}
              alt={item.altText}
              className="w-16 h-16 mb-2"
            />
            <strong className="text-customGreen text-xl mb-2">
              {item.title}:
            </strong>
            <p className="text-lg text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurFlavorfulPhilosophy;
