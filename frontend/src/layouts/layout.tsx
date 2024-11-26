import BackGround from "@/components/BackGround";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/pages/HomePage";

type Props = {
  children: React.ReactNode;
}

const Layout = ({children}: Props) => {
  return (
    <div className="flex flex-col nmin-h-screen">
      <Header />
      <BackGround />
      <div className="container mx-auto flex-1 py-10">
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;