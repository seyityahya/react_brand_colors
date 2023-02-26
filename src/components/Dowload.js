import { useContext } from "react";
import MainContext from "../MainContext";
import { GrLink, GrDownload, GrClose } from "react-icons/gr";

function Dowload() {
  const { selectedBrands } = useContext(MainContext);

  return (
    <div className="dowload">
      <div className="actions"></div>
      <div className="selected">
        {selectedBrands.length} brands collocted
        <button>
          <GrClose />
        </button>
      </div>
    </div>
  );
}

export default Dowload;
