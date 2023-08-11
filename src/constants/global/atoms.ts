import { atom } from "recoil";

export const modalAtom = atom({
  key: "isModal",
  default: false,
});

export const darkAtom = atom({
  key: "dark",
  default: 0,
});

export const isLoggedInAtom = atom({
  key: "isLoggedIn",
  default: true,
});

export const activeModalIdAtom = atom<string | null>({
  key: "activCommentId",
  default: null,
});
