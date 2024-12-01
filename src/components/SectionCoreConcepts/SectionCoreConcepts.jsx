import CoreConcepts from "../CoreConcepts/CoreConcepts";
import {CORE_CONCEPTS} from "../../data";
import './SectionCoreConcepts.css';

export default function SectionCoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                <CoreConcepts {...CORE_CONCEPTS[0]} />
                <CoreConcepts image={CORE_CONCEPTS[1].image}
                              title={CORE_CONCEPTS[1].title}
                              description={CORE_CONCEPTS[1].description}/>
                <CoreConcepts {...CORE_CONCEPTS[2]} />
                <CoreConcepts {...CORE_CONCEPTS[3]} />
            </ul>
        </section>
    )
}