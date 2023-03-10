import React from "react";
import { CloseIcon } from "./icons";
import { MenuIcon } from "./icons";

interface MenuProps {
  menuDrop: boolean;
  setMenuDrop: Function;
}

export const MenuToggle = (props: MenuProps) => {
  const { menuDrop, setMenuDrop } = props;

  function handleClickMenu() {
    setMenuDrop(!menuDrop);
  }
  return (
    <div
      className={`${
        menuDrop ? "border-green-600" : "border-gray-600"
      } items-center border rounded shadow-sm md:hidden`}
    >
      <button
        onClick={handleClickMenu}
        className="flex justify-start px-3 py-2 focus:outline-none"
      >
        {menuDrop ? (
          <CloseIcon className="object-cover w-3 h-3 text-green-700 fill-current" />
        ) : (
          <MenuIcon className="object-cover w-3 h-3 text-gray-700 fill-current" />
        )}
      </button>
    </div>
  );
};
