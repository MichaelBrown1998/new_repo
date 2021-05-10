import { useState } from 'react';

import FunctionalToDoList from './functional/ToDoList';
import ClassToDoList from './class-based/ToDoList';

function App() {

  const [isFunctional, setIsFunctional] = useState(true);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <label>
            <input type="checkbox" checked={isFunctional} onChange={(evt) => setIsFunctional(evt.target.checked)} />
            &nbsp;Show Functional
        </label>
        </div>
        <h1 className="col">{isFunctional ? "Functional" : "Class-based"}</h1>
      </div>
      {isFunctional ? <FunctionalToDoList /> : <ClassToDoList />}
    </div>
  );
}

export default App;
