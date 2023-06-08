import FeaturesBlock from '../Components/FeaturesBlock/FeaturesBlock';
import Footer from '../Components/Footer/Footer';
import HeaderComponent from '../Components/Header/Header';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import Statement from '../Components/Statement/Statement';
import Testimonials from '../Components/Testimonials/Testimonials';
import './HomePage.css'
const HomePage = () => {
    return (  

        <>
    <div className="home-page">
        <HeaderComponent/>
        <NewsLetter/>
        <Testimonials/>
        <FeaturesBlock/>
        <Statement/>
        <Footer/>
    </div>
         
        </>

    );
}
 
export default HomePage;