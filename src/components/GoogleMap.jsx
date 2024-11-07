function GoogleMap() {
  return (
    <div>
      <div className="mt-6 m-4 flex justify-center items-center">
        <h1
          className="text-2xl w-full h-24 shadow-lg rounded-lg text-beige-light text-center flex justify-start pl-4 font-bold items-center"
          style={{ backgroundColor: "#06402B" }}
        >
          📍 The Ultimate Guide to Restaurants in Paris
        </h1>
      </div>
      <div className="flex justify-start items-center m-4 pb-8">
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            height: "480px",
            borderRadius: "12px",
          }}
        >
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1CGYxEFC2Knx62PKd_KoKODyljNEvAtk&ehbc=2E312F&no_toolbar=true"
            width="100%"
            height="600"
            className="border-0"
            style={{ marginTop: "-150px", borderRadius: "12px" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default GoogleMap;
