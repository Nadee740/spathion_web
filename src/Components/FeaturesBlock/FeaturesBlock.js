import './FeaturesBlock.css'
import img1 from "../../assets/images/crypto1.jpg"
import img2 from "../../assets/images/crypto2.jpg"
import img3 from "../../assets/images/crypto3.jpg"

const FeaturesBlock = () => {
    return (
        <>
            <div className="features">
                <div className="features_block">
                    <img src={img1 } className="features-image" />

                    <div className="featuresblockcontent">
                        <div className="featuresblockcontent_header">
                            <h2>Instant access to working capital.</h2>
                        </div>
                        <div className="featuresblockpara">
                            <p>
Spathion provides quick access to working capital loans in stable coins for small and medium-sized business.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="features_block">
                    <img src={img2} className="features-image" />

                    <div className="featuresblockcontent">
                        <div className="featuresblockcontent_header">
                            <h2>Increase yield on crypto assets.</h2>
                        </div>
                        <div className="featuresblockpara">
                            <p>
                                Crypto lenders can earn real yield on their assets with our user-friendly platform that streamlines thet lending process .
                            </p>
                        </div>

                    </div>
                </div>
                <div className="features_block">
                    <img src={img3}  className="features-image" />

                    <div className="featuresblockcontent">
                        <div className="featuresblockcontent_header">
                            <h2>Low fees and high security.</h2>
                        </div>
                        <div className="featuresblockpara">
                            <p>
                                Spathion operates with low fees while providing high-end security to ensure that all transaction are secure and protected .
                            </p>
                        </div>

                    </div>
                </div>
     
                
            </div>
        </>
    );
}

export default FeaturesBlock;