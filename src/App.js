import "./App.css";
import { useEffect, useState } from "react";
import MainContext from "./MainContext";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import BrandsData from "./brands.json";
import Copied from "./components/Copied";

function App() {
  const brandsArray = [];
  Object.keys(BrandsData).map((key) => {
    brandsArray.push(BrandsData[key]);
  });

  const [brands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 500);
    }
  }, [copied]);

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
  };

  return (
    <>
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Sidebar />
        <Content />
      </MainContext.Provider>
    </>
  );
}

export default App;
