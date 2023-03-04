import Search from "./Search";
import Brand from "./Brand";
import MainContext from "../MainContext";
import { useContext } from "react";
import Dowload from "./Dowload";
import { List, AutoSizer } from "react-virtualized";
import Loader from "./Loader";

function Content() {
  const { brands, selectedBrands } = useContext(MainContext);

  const rowRenderer = ({ key, index, style }) => {
    return <Brand style={style} brand={brands[index]} key={key} />;
  };

  return (
    <main className="content">
      <header className="header">
        <Search />
        {selectedBrands.length !== 0 && <Dowload />}
      </header>
      <section className="brands">
        {/* {brands.map((brand) => (
          <Brand brand={brand} />
        ))} */}
        <AutoSizer>
          {({ height, width }) => (
            <List
              width={width}
              height={height}
              rowCount={brands.length}
              rowHeight={113}
              rowRenderer={rowRenderer}
            />
          )}
        </AutoSizer>
      </section>
    </main>
  );
}

export default Content;
