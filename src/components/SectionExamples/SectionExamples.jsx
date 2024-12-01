import './SectionExamples.css';
import TabButton from "../TabButton/TabButton";

export default function SectionExamples () {
    return (<section id="examples">
                <h2>Examples</h2>
                <menu>
                    <TabButton onSelect={handleClick}>Components</TabButton>
                    <TabButton onSelect={handleClick}>JSX</TabButton>
                    <TabButton onSelect={handleClick}>Props</TabButton>
                    <TabButton onSelect={handleClick}>State</TabButton>
                </menu>
            </section>)
}

function handleClick(){
    console.log('clicked ME !!!');
}