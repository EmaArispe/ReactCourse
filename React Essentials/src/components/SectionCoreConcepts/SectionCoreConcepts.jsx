import CoreConcepts from "../CoreConcepts/CoreConcepts";
import {CORE_CONCEPTS} from "../../data";
import './SectionCoreConcepts.css';
import Section from "../Section/Section";



export default function SectionCoreConcepts() {
    return (
        <Section title="Core Concepts" id="core-concepts">
            <ul>
                {CORE_CONCEPTS.map((item)=>{ return <CoreConcepts key={item.title} {...item} /> })}
            </ul>
        </Section>
    )
}