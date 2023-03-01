import Search from "./Search";
import Brand from "./Brand";
import MainContext from "../MainContext";
import { useContext } from "react";
import LazyLoad from "react-lazyload";
import Dowload from "./Dowload";

function Content() {
  const { brands, selectedBrands } = useContext(MainContext);

  return (
    <main className="content">
      <header className="header">
        <Search />
        {selectedBrands.length !== 0 && <Dowload />}
      </header>
      <section className="brands">
        {brands.map((brand) => (
          <LazyLoad
            key={brand.slug}
            once={true}
            overflow={true}
            placeholder="Yükleniyor..."
          >
            <Brand brand={brand} />
          </LazyLoad>
        ))}
      </section>
    </main>
  );
}

export default Content;
