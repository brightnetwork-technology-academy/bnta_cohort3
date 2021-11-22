import axios from "axios";
import { useState, useEffect } from "react";
import DogViewer from "../components/DogViewer";
import NewDogButton from "../components/NewDogButton";

const DogContainer = () => {

    const [dog, setDog] = useState(null);

    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/image/random")
            .then(response => setDog(response.data))
    }, []);

    const updateDogData = () => {
        console.log("updating dog data from DogContainer");
        axios.get("https://dog.ceo/api/breeds/image/random")
            .then(response => setDog(response.data))
    }

    return (
        dog ?
        <>
            <DogViewer dog={dog}/>
            <NewDogButton onClick={updateDogData}/>
        </>
        :
        <p>Loading dog photo...</p>
    )

}

export default DogContainer;