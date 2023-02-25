import "./App.css";
import { useState } from "react";
import MainContext from "./MainContext";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import BrandsData from "./brands.json";

function App() {
  const brandsArray = [];
  Object.keys(BrandsData).map((key) => {
    brandsArray.push(BrandsData[key]);
  });

  const [brands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
  };

  return (
    <>
      <MainContext.Provider value={data}>
        <Sidebar />
        <Content />
      </MainContext.Provider>
    </>
  );
}

export default App;
