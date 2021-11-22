const PokemonDetails = ({pokemon}) => {

    const types = pokemon.types.map(type => {
        return <li>{type.type.name}</li>
    })

    const stats = pokemon.stats.map(stat => {
        return(
            <tr>
                <td>{stat.stat.name}</td>
                <td>{stat.base_stat}</td>
            </tr>
        )
    })

    return(
        <div>
            <h2>Name: {pokemon.name}</h2>
            <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
            <h3>Types:</h3>
            <ul>{types}</ul>
            <h3>Stats:</h3>
            <table>
                <thead>
                    <th>Stat</th>
                    <th>Value</th>
                </thead>
                <tbody>
                    {stats}
                </tbody>
            </table>
        </div>
    )

}

export default PokemonDetails;