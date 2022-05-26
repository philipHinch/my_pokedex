//images
import backCard from '../assets/images/back_card.png'

const Card = ({ type, image, name }) => {
    return (
        <div className="card">
            <div className="content">
                <div className="backCard">
                    <img src={backCard} alt="back card image" />
                </div>
                <div className="frontCard">
                    <div className="cardImageContaier">
                        <img src={image} alt="card image" />
                    </div>
                    <div className="cardInfoContainer">
                        <h2 className="cardName">{name}</h2>
                        <p className="type">{type}</p>
                        {/* <div className="statsContainer">
                            <small className="weight">weight:120</small>
                            <small className="height">heigh:20</small>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Card;