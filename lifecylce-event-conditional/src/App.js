import './App.css';
import Clock from './stateNLifecycle.js'
import HandlingEvent from './handlingEvents';
import ConRender from './conditionalrendering';
import ExperimentForm from './ExperimentForm';
import Calculator from './Calculator'
function App() {
  return (
    <div className="App">
      <HandlingEvent/>
      <Clock name='kislay clock says'/>
      <ConRender/>
      <ExperimentForm/>
      <Calculator/>
    </div>
  );
}

export default App;
