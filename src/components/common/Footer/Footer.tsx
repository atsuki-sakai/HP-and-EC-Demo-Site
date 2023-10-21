import React from "react";
import style from "./Footer.module.scss";
import { menuItems } from "../../const/MenuItem";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer_inner}>
        <div className={style.footer_item}>
          <div className={style.right_container}>
            <h5>HP and EC Demo Site.</h5>
            <p>description text</p>
            <ul className={style.footer_menu_list}>
              {menuItems.map((menuItem, index) => {
                return (
                  <Link key={`${menuItem.title}-${index}`} href={menuItem.link}>
                    <li>{menuItem.title}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={style.footer_item}>
          <div className={style.map_container}>
            <iframe
              className={style.iframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9004.359115997939!2d135.27686238686465!3d34.77224835614397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008b4474c80c73%3A0x2f5427c532cbe520!2z44CSNjU5LTAwMDMg5YW15bqr55yM6Iqm5bGL5biC5aWl5rGg55S677yR77yX4oiS77yYIOWQiOWQjOijvemQteWFreeUsuWxseiNmA!5e0!3m2!1sja!2sjp!4v1697887127615!5m2!1sja!2sjp"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className={style.copylight}>powered by multipla.io</div>
    </footer>
  );
};

export default Footer;
