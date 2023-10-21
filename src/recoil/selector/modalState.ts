import { selector } from "recoil";
import { modalAtom } from "../atom/modalAtom";

export const modalStateSelector = selector({
    key: "modalState",
    get: ({get}) => {
        return get(modalAtom);
    }
})