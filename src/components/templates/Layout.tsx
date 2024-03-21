import { ReactNode } from "react";
import Footer from "../molecules/footer/Footer";
import MainNav from "../molecules/navbar/MainNav";
import TopNav from "../molecules/navbar/TopNav";

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <>
      <TopNav />
      <MainNav />
      <div className="mx-12">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
