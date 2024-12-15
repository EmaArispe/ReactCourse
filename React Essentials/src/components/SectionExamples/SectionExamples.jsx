import './SectionExamples.css';
import TabButton from "../TabButton/TabButton";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";
import {useState} from "react";
import {EXAMPLES} from "../../data";


/**
 * SectionExamples component
 * @returns {JSX.Element}
 * @constructor
 */
export default function SectionExamples () {
    const [selectedTopic, setSelectedTopic] = useState();


    function handleClick(selectedButton){
        setSelectedTopic(selectedButton);
    }

    return (<Section title="Examples" id="examples">
        <Tabs ButtonsComponent = "menu" buttons={<>   <TabButton isSelected={selectedTopic === 'components'} onClick={ ()=>handleClick('components')}>Components</TabButton>
                            <TabButton isSelected={selectedTopic === 'jsx'} onClick={()=>handleClick('jsx')}>JSX</TabButton>
                            <TabButton isSelected={selectedTopic === 'state'} onClick={()=>handleClick('state')}>State</TabButton>
                            <TabButton isSelected={selectedTopic === 'props'} onClick={()=>handleClick('props')}>Props</TabButton>
                        </>}>
            {!selectedTopic ? <p> Please select button</p> : null}
            {selectedTopic ? <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
            </div> : null}
        </Tabs>
    </Section>)
}
