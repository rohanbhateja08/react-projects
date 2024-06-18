import '../src/components/Header/Header.css';
import '../src/components/CoreConcepts/CoreConcepts.css';
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";

function App() {

  // we have to return only 1 element here, so we can wrap all the elements in a div, but that div will appear in the html dom, to overcome the issue we can use
  // Fragment, which will not appear in the html dom, <Fragment></Fragment>, or we can use <></> which is shorthand for <Fragment></Fragment>
  // Also for modern react project, we dont need to have, import {Fragment} from 'react' as it is already included in the react package
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
