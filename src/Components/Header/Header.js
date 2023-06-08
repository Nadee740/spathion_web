import './Header.css'
import Logo from "../../assets/logo2.jpg"
const HeaderComponent = () => {
    return (  
             <div className="Home-container">
            <div className="home-header-name">
            {/* <img src={'../assets/logo2.jpg'}></img>  */}
            <img src={Logo}></img>
                <h4>Spathion</h4>
            </div>
            <div className="home-header">
                <h2>Empowering Crypto Lenders and Cusiness Owners with Spathion</h2>
            </div>
            <div className="header-content">
                <p>
                    Secure easy loans in stable coins , and earn real yield as a crypto sender
                </p>
            </div>
        </div>
    );
}
 
export default HeaderComponent;
