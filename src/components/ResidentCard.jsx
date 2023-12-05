import axios from "axios";
import { useEffect, useState } from "react";

const ResidentCard = ({ residentURL }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const bgByStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500",
  };

  useEffect(() => {
    axios
      .get(residentURL)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article>
      <header className="relative border-2 border-[#8EFF8B]">
        <img src={residentInfo?.image} alt="" />
        {/* Status */}
        <div
          className="flex
        items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2 status p-1 px-4 text-white"
        >
          <div
            className={`h-3 aspect-square rounded-full ${
              bgByStatus[residentInfo?.status]
            }`}
          ></div>
          <span>{residentInfo?.status}</span>
        </div>
      </header>
      <section className="p-4 pt-1 bg-black/30 border-2 border-[#8EFF8B]">
        <h5 className="text-xl py-1 line-clamp-1">{residentInfo?.name}</h5>
        <ul className="grid">
          <li className="grid grid-cols-2 text-sm">
            <span className="text-light-grey text-sm">Species</span>{" "}
            {residentInfo?.species}
          </li>
          <li className="grid grid-cols-2 text-sm">
            <span className="text-light-grey text-sm">Origin</span>{" "}
            {residentInfo?.origin.name}
          </li>
          <li className="grid grid-cols-2 text-sm">
            <span className="text-light-grey text-sm">Times appear</span>{" "}
            {residentInfo?.episode.length}
          </li>
        </ul>
      </section>
    </article>
  );
};
export default ResidentCard;
