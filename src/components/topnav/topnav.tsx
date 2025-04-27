"use client";
import { useState } from "react";
import SearchBar from "./searchbar/searchbar";

export default function TopNav() {
  return (
    <div className="flex h-12 w-screen justify-between bg-gray-700 text-gray-100">
      <div className="flex items-center">
        <Titile></Titile>
        <DropdownPanel></DropdownPanel>
      </div>
      <SearchBar></SearchBar>
    </div>
  );
}

function Titile() {
  return (
    <div className="ml-4 flex h-full items-center">
      <span className="inline-block align-middle">
        <span className="inline-block italic">My</span>
        Cloud
      </span>
    </div>
  );
}

function DropdownPanel() {
  const [show, setShow] = useState(false);

  function openMenu() {
    setShow(!show);
  }

  return (
    <div className="relative ml-4 flex items-center">
      <button onClick={openMenu} className="inline-block align-middle">
        Menu
      </button>
      {show && <DropdownMenu></DropdownMenu>}
    </div>
  );
}

function DropdownMenu() {
  return (
    <div className="absolute top-full left-0 mt-1 min-w-[200px] rounded bg-white text-gray-800 shadow-lg">
      <ul className="py-2">
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Item 1</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Item 2</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Item 3</li>
      </ul>
    </div>
  );
}
