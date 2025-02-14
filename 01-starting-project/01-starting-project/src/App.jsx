import CorConcept from "./component/CorConcept";
import Header from "./component/Header";
import TabButton from "./component/TabButton";
import { useState } from 'react';
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
function App() {
  const [tabSelected, setTabSelected] = useState('components');
  function handleClick(selectedTab){
    console.log(selectedTab)
   setTabSelected(selectedTab)
}
  return (
    <div>
     <Header />
     
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
          <CorConcept title={CORE_CONCEPTS[0].title}
     description = { CORE_CONCEPTS[0].description}
     image = { CORE_CONCEPTS[0].image} />
     <CorConcept {...CORE_CONCEPTS[1]} />
     <CorConcept {...CORE_CONCEPTS[2]} />
     <CorConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
          <TabButton lebal='components' onSelect={()=>handleClick('components')}>Components</TabButton>
          <TabButton lebal='jsx' onSelect={()=>handleClick('jsx')}>JSX</TabButton>
          <TabButton lebal='props' onSelect={()=>handleClick('props')}>Props</TabButton>
          <TabButton lebal='state' onSelect={()=>handleClick('state')}>State</TabButton>
          </menu>
          {tabSelected}
          <div id="tab-content">
            <h3>{EXAMPLES[tabSelected].title}</h3>
            <p>{EXAMPLES[tabSelected].description}</p>
            <pre>
              <code>{EXAMPLES[tabSelected].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
