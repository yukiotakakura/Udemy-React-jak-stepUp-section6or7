import React from "react";
import { RecoilRoot } from "recoil";
import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    // Recoilでのstate管理を使いたい場所でRecoilRootを囲う必要がある
    <RecoilRoot>
      {/*  contextを使いたい場所で全体をUserProviderコンテキストで囲う必要がある */}
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}
