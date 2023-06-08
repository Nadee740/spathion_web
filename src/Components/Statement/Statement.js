import './Statement.css'
import img1 from "../../assets/images/testimonial-01.jpg"
const Statement = () => {
    return ( 
        <>
           <div className="statement-container">
           <div className="statement-text">
            <p>
                "As a crypto lender, i've been able to earn real yield on my assets while supporting small business . Spathion is the future of crypto lending and borrowing. "
            </p>
           </div>
           <div className="statementimgdiv">
            <img  src={img1} />
           </div>
           <div className="statementimgdiv">
            <p>
                Alice Ardorello
            </p>
           </div>
           </div>
        </>
     );
}
 
export default Statement;