const CompareContainer = () => {
    return (
        <div className="compareContainer">
            <div className="compareTitleContainer">
                <h3 className="compareTitle">compare pokemons</h3>
            </div>
            <div className="compareInnerContainer">
                <div className="pokemon1">

                </div>
                <ul className="compareStats">
                    <li className="stat hpStat">
                        <small className="hpPokemon1 compareText">40</small>
                        <small className="hpText compareText">HP</small>
                        <small className="hpPokemon2 compareText">50</small>
                    </li>
                    <li className="stat attackStat">
                        <small className="attackPokemon1 compareText">20</small>
                        <small className="attackText compareText">ATTACK</small>
                        <small className="attackPokemon2 compareText">30</small>
                    </li>
                    <li className="stat defenceStat">
                        <small className="defencePokemon1 compareText">20</small>
                        <small className="defenceText compareText">DEFENCE</small>
                        <small className="defencePokemon2 compareText">20</small>
                    </li>
                    <li className="stat speedStat">
                        <small className="speedPokemon1 compareText">20</small>
                        <small className="speedText compareText">SPEED</small>
                        <small className="speedPokemon2 compareText">20</small>
                    </li>
                    {/* <small className="attackText">ATTACK</small>
                    <small className="defenceText">DEFENCE</small>
                    <small className="speedText">SPEED</small> */}
                </ul>
                <div className="pokemon2">

                </div>
            </div>
        </div>
    );
}

export default CompareContainer;