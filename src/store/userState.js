import { atom } from "recoil";

/*
 * これから主流となるRecoilでのstate管理
 */
export const userState = atom({
  key: "userState",
  default: { isAdmin: false }
});
