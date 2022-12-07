import './App.css';
import PreNavBar from './components/PreNavBar';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Slider from "./components/Slider.jsx";
import data from "./data/data.json";
import Offers from "./components/Offers.jsx"
import Heading from "./components/Heading.jsx"
import StarProducts from "./components/StarProducts.jsx";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.jsx";
import HotAccessories from "./components/HotAccessories.jsx";
import ProductReview from "./components/ProductReview.jsx";
import Video from "./components/Video.jsx";
import Banner from "./components/Banner.jsx";


function App() {
  return ( 
  
   <Router> 
    
    <PreNavBar/>
    <NavBar />
    <Slider start={data.banner.start} />
    <Offers offer={data.offer}/>
    <Heading text = "STAR PRODUCTS"/> 
    <StarProducts starProducts={data.starProduct}/>
    <Heading text = "Hot Accessories"/>
    <HotAccessoriesMenu />
  
    
    <Routes>
     <Route path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover = {data.hotAccessoriesCover.music} />}/>
     <Route path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover = {data.hotAccessoriesCover.smartDevice} />}/> 
     <Route path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover = {data.hotAccessoriesCover.home} />}/>
     <Route path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover = {data.hotAccessoriesCover.lifeStyle} />}/>
     <Route path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover = {data.hotAccessoriesCover.mobileAccessories} />}/> 
     </Routes>

     <Heading text="PRODUCT REVIEWS" />
     <ProductReview productReview={data.productReviews}   />


     <Heading text="VIDEOS" />
     <Video videos={data.videos}/>

     <Heading text="IN THE PRESS" /> 

     <Banner banner={data.banner}/>

   </Router>


   
  );
}

export default App;
