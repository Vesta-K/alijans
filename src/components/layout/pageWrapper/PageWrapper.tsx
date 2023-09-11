import Header from "../header/Header";
import MainPage from "../../pages/mainPage/MainPage";
import Footer from "../footer/Footer";

export default function PageWrapper() {
  return (
    <div className="bg-[#2F2E33]">
      <Header />
      <main>
        <MainPage />
      </main>
      <Footer />
    </div>
  );
}
