import React, { useState } from "react";
import "./App.css";
import Data from "./Data";
import Card from "./Components/Card";
import Menu from "./Components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Components/Search";

function App() {
  const [items, setItems] = useState(Data);
  const [search, setSearch] = useState("");
  const menuItems = [...new Set(Data.map((cat) => cat.category))];

  const filterItems = (cat) => {
    const itms = Data.filter((newItems) => {
      return newItems.category === cat;
    });
    setItems(itms);
  };

  const FilteredItems = (itms) => {
    const Itemss = Data.filter((items) => {
      return items.title.toLowerCase().includes(itms);
    });
    setItems(Itemss);
  };

  return (
    <div className="container-lg text-center">
      <Search
        FilteredItems={FilteredItems}
        search={search}
        setSearch={setSearch}
      />
      <Menu
        menuItems={menuItems}
        filterItems={filterItems}
        setItems={setItems}
      />
      <Card items={items} />
    </div>
  );
}

export default App;
