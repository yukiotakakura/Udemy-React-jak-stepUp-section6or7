import { Header } from "../atoms/layout/Header";

/*
 *templates粒度な「HeaderなしTemplate」コンポーネントを定義
 */
export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
