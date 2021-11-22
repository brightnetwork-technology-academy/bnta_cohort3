const PokemonButton = ({onClick, text}) => {

    return(
        <button onClick={onClick}>{`${text} Pokemon`}</button>
    )

}

export default PokemonButton