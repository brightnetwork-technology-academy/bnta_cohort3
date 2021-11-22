const NewDogButton = ({onClick}) => {

    const handleClick = () => {
        console.log("button clicked");
        onClick();
    }

    return (
        <button onClick={handleClick}>Fetch!</button>
    )

}

export default NewDogButton;