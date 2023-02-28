import { useContext } from "react";
import MainContext from "../MainContext";
import { GrClose } from "react-icons/gr";

function Dowload() {
  const { selectedBrands } = useContext(MainContext);

  return (
    <div className="dowload">
      <div className="actions"></div>
      <div className="selected">
        <button>
          <GrClose />
        </button>
        {selectedBrands.length} brands collocted
      </div>
    </div>
  );
}

export default Dowload;
