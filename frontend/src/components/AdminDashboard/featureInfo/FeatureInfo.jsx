import "./FeatureInfo.css";
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded';
import ShoppingBasketRounded from '@material-ui/icons/ShoppingBasketRounded';

export default function FeatureInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featureTitle">TOTAL SALES</span>
                <div className="featuredAmountContainer">
                    <span className="featuredAmount">21,324</span>
                    <StorefrontOutlinedIcon className="featuredIcon" />
                </div>
            </div>
            <div className="featuredItem">
                <span className="featureTitle">TOTAL INCOME</span>
                <div className="featuredAmountContainer">
                    <span className="featuredAmount">$211,324</span>
                    <LocalOfferRoundedIcon className="featuredIcon" />
                </div>
            </div>
            <div className="featuredItem">
                <span className="featureTitle">TOTAL PRODUCTS</span>
                <div className="featuredAmountContainer">
                    <span className="featuredAmount">652,234</span>
                    <ShoppingBasketRounded className="featuredIcon" />
                </div>
            </div>
        </div>

    );
}