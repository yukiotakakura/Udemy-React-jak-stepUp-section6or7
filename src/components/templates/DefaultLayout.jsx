import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";

/*
 *templates粒度な「HeaderありTemplate」コンポーネントを定義
 */
export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
