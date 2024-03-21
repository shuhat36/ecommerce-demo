import Footer from "../molecules/footer/Footer";
import MainNav from "../molecules/navbar/MainNav";
import TopNav from "../molecules/navbar/TopNav";

function Layout({ children }: any) {
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
