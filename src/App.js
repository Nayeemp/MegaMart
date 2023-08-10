import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import DailyEssentials from './components/cetagory/DailyEssentials/DailyEssentials';
import Electronics from './components/cetagory/Electronics/Electronics';
import Cetagories from './components/cetagory/product/cetagories/Cetagories';
import SmartPhones from './components/cetagory/smartPhones/SmartPhones';
import DropDownBar from './components/navbar/DropDownBar';
import Navbar from './components/navbar/Navbar';
import TopNav from './components/navbar/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Navbar />
      <DropDownBar />
      <Carousel />
      <SmartPhones />
      <Cetagories />
      <Electronics />
      <DailyEssentials />
      <Footer />

    </div>
  );
}

export default App;
