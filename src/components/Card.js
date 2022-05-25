//images
import backCard from '../assets/images/back_card.png'

const Card = () => {
    return (
        <div className="card">
            <div className="content">
                <div className="backCard">
                    <img src={backCard} alt="back card image" />
                </div>
                <div className="frontCard">
                    <p>front</p>
                </div>

            </div>
        </div>
    );
}

export default Card;