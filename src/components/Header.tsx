import Link from "next/link";
import { useState } from "react";
import { ProudIcon } from "./icons";
import { NavTitle } from "./NavTitle";
import { MenuToggle } from "./MenuToggle";

export const Header = () => {
  const [menuDrop, setMenuDrop] = useState(false);
  const [title, setTitle] = useState("");

  function handleClickTitle(title: string) {
    setTitle(title.toLowerCase());
    setMenuDrop(false);
  }

  return (
    <div className="fixed z-20 w-full bg-white border-t-8 border-green-400 shadow-md ">
      <div className="container w-full max-w-screen-xl px-2 py-1 mx-auto ">
        <div className="flex items-center justify-between">
          <MenuToggle menuDrop={menuDrop} setMenuDrop={setMenuDrop} />

          <div className="hidden md:flex">
            <Link href="/">
              <button className=" focus:outline-none">
                <ProudIcon className="object-center w-12 h-12 " />
              </button>
            </Link>
          </div>

          <div className="hidden m-2 md:flex ">
            <NavTitle clickedTitle={title} setTitle={setTitle} />
          </div>

          <div className="md:hidden">
            <Link href="/">
              <div onClick={() => handleClickTitle("home")}>
                <ProudIcon className="object-center w-12 h-12" />
              </div>
            </Link>
          </div>
        </div>

        {menuDrop && <NavTitle clickedTitle={title} setTitle={setTitle} />}
      </div>
    </div>
  );
};
