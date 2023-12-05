import axios from "axios";

const Location = ({ locationInfo, setLocationInfo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocationId = e.target.newLocation.value;

    axios
      .get(`https://rickandmortyapi.com/api/location/${newLocationId}`)
      .then(({ data }) => setLocationInfo(data))
      .catch((err) => console.log(err));
  };

  return (
    <section className="grid justify-center text-center text-white">
    
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between p-2 bg-black/30 border-2 border-[#8EFF8B] relative -top-24 z-10 sm:w-[500px] sm:mx-auto">
          <input
            className="flex-1 outline-none bg-transparent"
            type="text"
            name="newLocation"
            placeholder="Type a location ID..."
          />
          <button className="bg-[#8fff8be3] w-28 h-8" type="submit">
            <i className="bx bx-search text-xl"></i>
          </button>
        </div>
      </form>

      <article className="relative -top-12 sm:border-2 sm:border-[#8EFF8B] sm:p-4 sm:h-28">
        <h5 className="text-[#8EFF8B] text-[32px] font-bold ">Welcome to {locationInfo?.name}!</h5>
        <ul className="text-[#938686] hidden sm:block sm:flex sm:gap-16">
          <li>Type: {locationInfo?.type}</li>
          <li>Dimension: {locationInfo?.dimension}</li>
          <li>Population: {locationInfo?.residents.length}</li>
        </ul>
      </article>
    </section>
  );
};
export default Location;
