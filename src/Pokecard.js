const Pokecard = (props) => {
    return (<div>
        <p>{props.name}</p>
        <p>{props.image}</p>
        <p>{props.type}</p>
    </div>
    )
}

export default Pokecard;