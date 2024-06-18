import { useState } from 'react';
import TabButton from "../TabButton/TabButton"
import { EXAMPLES } from "../../data.js";
import Section from "../Section/Section.jsx";
import Tabs from "../TabButton/Tabs.jsx";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    let tabContent = <p>Select a topic to learn more!</p>;
    if (selectedTopic) {
        tabContent = <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
        </div>
    }

    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log('You clicked on the button - ' + selectedButton);
    }

    return (
        <Section title="Examples" id="examples">
            {/* Use {children} to pass children to the component, as component composition, we can add html contents instead of Components text  */}
            {/* props slots {buttons} */}
            <Tabs
                ButtonsContainer="menu"
                buttons={
                    <>
                        <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick('components')}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleClick('state')}>State</TabButton>
                    </>
                }>{tabContent}</Tabs>
        </Section>
    )
}

{/* {!selectedTopic ?
      (<p>Select a topic to learn more!</p>) :
      (<div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>)
    } */}