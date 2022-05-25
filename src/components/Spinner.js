//images
import pokeball from '../assets/images/pokeball.png';

const Spinner = () => {
    return (
        <div className="spinnerContainer">
            <div className="spinnerImageContainer">
                <img src={pokeball} alt="pokeball image" />
            </div>
        </div>
    );
}

export default Spinner;