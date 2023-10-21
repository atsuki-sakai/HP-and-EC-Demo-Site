"use client";

import React from "react";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { drawerAtom } from "@/recoil/atom/drawerAtom";
import { menuItems } from "@/components/const/MenuItem";

import style from "./Header.module.scss";

const Header = () => {
  // - Properties
  const title = "HP and EC Demo Site";

  // - Recoil Value
  const setDrawerState = useSetRecoilState(drawerAtom);

  // - Functions
  function showDrawer() {
    setDrawerState(true);
  }
  return (
    <>
      <header className={style.header}>
        <div className={style.header_inner}>
          <h3>{title}</h3>
          <button className={style.menu_button} onClick={showDrawer}>
            MENU
          </button>
          <ul className={style.menulist}>
            {menuItems.map((menuItem, index) => {
              return (
                <li
                  key={`${menuItem.title}-${index}`}
                  className={style.list_item}
                >
                  <Link href={menuItem.link}>{menuItem.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
