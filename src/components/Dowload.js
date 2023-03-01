import { useContext } from "react";
import MainContext from "../MainContext";
import { GrLink, GrDownload, GrClose } from "react-icons/gr";

function Dowload() {
  const { selectedBrands, setSelectedBrands } = useContext(MainContext);

  const getLink = () => {
    prompt(
      "Here's the URL to share",
      `http//localhost:3000/collection/${selectedBrands.join(",")}`
    );
  };

  return (
    <div className="download">
      <div className="actions">
        <a href="/#">
          <GrDownload />
        </a>
        <button onClick={getLink}>
          <GrLink />
        </button>
      </div>
      <div className="selected" onClick={() => setSelectedBrands([])}>
        <GrClose />
        {selectedBrands.length} brands collocted
      </div>
    </div>
  );
}

export default Dowload;
