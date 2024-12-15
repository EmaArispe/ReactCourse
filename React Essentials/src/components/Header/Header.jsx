import imgReactConcepts from "../../assets/react-core-concepts.png";
import './Header.css';

const arrayWord = ["Fundamental", "Core", "Crucial"];

function generateRandomInt(max) {
    return Math.floor(Math.random() * (max));
}

export default function Header() {
    const randomWord = arrayWord[generateRandomInt(arrayWord.length)];

    return (<header>
        <img src = {imgReactConcepts} alt="Stylized atom"/>
        <h1>React Essentials</h1>
        <p>
            {randomWord} React concepts you will need for almost any app you are
            going to build!
        </p>
    </header>);
}