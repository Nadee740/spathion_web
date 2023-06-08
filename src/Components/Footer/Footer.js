import NewsLetter from '../NewsLetter/NewsLetter';
import './Footer.css'
import img1 from "../../assets/images/testimonial-01.jpg"
import img2 from "../../assets/images/testimonial-02.jpg"
import img3 from "../../assets/images/testimonial-03.jpg"
const Footer = () => {
    return (<>
        <div className="footer-container">
            <div className="footer-box">
                <div className="image_footer">
                    <div className="footerimgdiv">
                        <img src={img1}/>
                    </div>
                    <div className="footerimgdiv">
                        <img src={img2} />
                    </div>
                    <div className="footerimgdiv">
                        <img src={img3} />
                    </div>
                    <div className="footerimgdiv">
                        <img src={img1} />
                    </div>
                    <div className="footerimgdiv">
                        <img src={img2} />
                    </div>
                </div>
                <div className="image_footer">
                    <div className="footerimgdiv">
                        <img src={img1} />
                    </div>
                    <div className="footerimgdiv">
                        <img src={img2} />
                    </div>
                    <div className="footerimgdiv">
                        <img src={img3} />
                    </div>
                    <div className="footerimgdiv">
                        <img src={img1} />
                    </div>
                    <div className="footerimgdiv">
                        <img src={img2} />
                    </div>
                </div>
                <div className="footerpara">
                    <p>
            Join Spathion today and start earning real yield or secure the working capital you need for your business

                    </p>
                </div>
                <NewsLetter/>

            </div>
        </div>
    </>);
}

export default Footer;