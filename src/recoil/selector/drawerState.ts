import { selector } from "recoil";
import { drawerAtom } from "../atom/drawerAtom";

export const drawerStateSelector = selector({
    key: "drawerState",
    get: ({get}) => {
        return get(drawerAtom);
    }
});