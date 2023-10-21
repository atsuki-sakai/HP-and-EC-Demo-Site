"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { drawerAtom } from "@/recoil/atom/drawerAtom";

import { menuItems } from "@/components/const/MenuItem";
import style from "./Drawer.module.scss";

const Drawer = () => {
  const title = "HP and EC Demo Site";
  const drawerState = useRecoilValue(drawerAtom);
  const setDrawerState = useSetRecoilState(drawerAtom);
  function closeDrawer() {
    setDrawerState(false);
  }

  useEffect(() => {
    if (drawerState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [drawerState]);
  return (
    <div
      className={`${style.drawer} ${
        drawerState ? style.open_drawer : style.close_drawer
      }`}
    >
      <div
        className={`${style.drawer_left} ${
          drawerState ? style.show : style.hidden
        }`}
        onClick={closeDrawer}
      />
      <div className={style.drawer_right}>
        <div className={style.drawer_inner}>
          <div className={style.close_button_container}>
            <button onClick={closeDrawer}>
              <span>×</span>
            </button>
          </div>
          <h5>{title}</h5>
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
          <div className={style.logo_container}>
            <span>powered by multipla.io</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
