import axios from "axios";
import { useEffect } from "react";
import { getRandomNumber } from "./helpers/ramdom";
import { useState } from "react";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";

function App() {
  const [locationInfo, setLocationInfo] = useState(null);

  useEffect(() => {
    const ramdomDimension = getRandomNumber(126);

    axios
      .get(`https://rickandmortyapi.com/api/location/${ramdomDimension}`)
      .then(({ data }) => setLocationInfo(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <main className="bg-[url(/images/page.jpg)] h-full font-firaCode">
      <div className="h-[400px]">
        <img className="h-[500px] object-cover mx-auto" src="/images/logo.png" alt="" />
      </div>
      <Location locationInfo={locationInfo} setLocationInfo={setLocationInfo} />
      <ResidentList residents={locationInfo?.residents ?? []} />
    </main>
  );
}

export default App;
