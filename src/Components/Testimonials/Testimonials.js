import './Testimonials.css'
import img1 from "../../assets/images/testimonial-01.jpg"
const Testimonials = () => {
    return (  
        <>
          <div className="Testimonials">
            <div className="testimonials-container">
                <div className="div1">
              <img src={img1}></img>
                </div>
                <div className="div2">
                    <p>
" Spathion easy loans in stable coins,and earn real yield as a crypto lender "
                    </p>
                    <p>
                        Mariana Tadic
                    </p>
                    </div>
            </div>
          </div>
        </>
    );
}
 
export default Testimonials;