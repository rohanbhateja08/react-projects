import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../../data.js";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <ul>
                {CORE_CONCEPTS.map((concept) => <CoreConcept key={concept.title} {...concept} />)}
            </ul>
        </section>
    );
}

// function CoreConcepts(props) {
// instead of props, we can use {} to destructure the props object

{/* we can also use map function to iterate over the array of objects and pass each object as argument to the component with jsx */ }
{/* https://react.dev/learn/rendering-lists#why-does-react-need-keys */ }

{/* use ... Spread operator to pass object as argument */ }
{/* < CoreConcepts {...CORE_CONCEPTS[0]} />
          <CoreConcepts title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image} />
          <CoreConcepts {...CORE_CONCEPTS[2]} />
          <CoreConcepts {...CORE_CONCEPTS[3]} /> */}

{/* <CoreConcepts title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image} />
          <CoreConcepts title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image} />
          <CoreConcepts title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image} /> */}