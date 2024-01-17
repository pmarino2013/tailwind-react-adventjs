import BtnScrollApp from "./components/BtnScrollApp";
import FooterApp from "./components/FooterApp";
import MainApp from "./components/MainApp";
import MenuApp from "./components/MenuApp";
import QuestionsApp from "./components/QuestionsApp";
import RetosApp from "./components/RetosApp";
import SponsorsApp from "./components/SponsorsApp";

function App() {
  return (
    <div className="bg-body min-h-screen">
      <MenuApp />
      <div className="flex items-center h-screen md:h-auto lg:h-screen md:pt-12 justify-center">
        <MainApp />
      </div>
      <SponsorsApp />
      <RetosApp />
      <QuestionsApp />
      <FooterApp />
      <div className="hidden md:block fixed bottom-16 right-3 md:right-10">
        <BtnScrollApp />
      </div>
    </div>
  );
}

export default App;
