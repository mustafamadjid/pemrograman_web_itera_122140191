import InputElement from "../../elements/Input/input";
import Button from "../../elements/Button/button";

import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = ({ handleInputChange, searchItem }) => {
  return (
    <>
      <div className="flex gap-3 items-center">
        <InputElement
          type="text"
          placeholder="Cari judul/author"
          value={searchItem}
          onChange={handleInputChange}
          variant={"w-full rounded-[30px] placeholder:text-slate-300 "}
        />
        <Button variant={"p-3 rounded-[40px] ho active:scale-105 bg-[#234258]"}>
          <Search />
        </Button>
      </div>
    </>
  );
};

export default SearchBar;
