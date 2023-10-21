"use client";

import React, { ReactNode, useEffect, useState } from "react";
import style from "./ModalDialog.module.scss";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { modalAtom } from "@/recoil/atom/modalAtom";

interface Props {
  id?: string;
  children: ReactNode;
}

const ModalDialog = ({ id = "modal-overlaly", children }: Props) => {
  const modalState = useRecoilValue(modalAtom);
  const setModalState = useSetRecoilState(modalAtom);

  useEffect(() => {
    const modalOverlay = document.getElementById(id);
    if (modalOverlay) {
      if (!modalState) {
        setTimeout(() => {
          modalOverlay.style.display = "none";
        }, 400);
      } else {
        modalOverlay.style.display = "flex";
      }
    }
  }, [modalState, id]);
  return (
    <div
      id={id}
      className={`${
        modalState ? style.show_modal_overlay : style.hidden_modal_overlay
      }`}
    >
      <div className={style.modal_container}>
        <div className={style.close_modal_button_container}>
          <button
            className={style.close_modal_button}
            onClick={() => setModalState(false)}
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalDialog;
