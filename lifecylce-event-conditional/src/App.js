// import './App.css';
// import Clock from './stateNLifecycle.js'
// import HandlingEvent from './handlingEvents';
// import ConRender from './conditionalrendering';
// import ExperimentForm from './ExperimentForm';
// import Calculator from './Calculator'
// function App() {
//   return (
//     <div className="App">
//       <HandlingEvent/>
//       <Clock name='kislay clock says'/>
//       <ConRender/>
//       <ExperimentForm/>
//       <Calculator/>
//     </div>
//   );
// }

// export default App;

// -----This was for lazy loading------
// import React from 'react';
// import List from './List.js';
// import WithLoading from './withLoading.js';
// const ListWithLoading = WithLoading(List);
// class App extends React.Component {
//   state = {}
//   componentDidMount() {
//     this.setState({ loading: true });
//     fetch(`https://api.github.com/users/hacktivist123/repos`)
//       .then((json) => json.json())
//       .then((repos) => {
//         this.setState({ loading: false, repos: repos });
//       });
//   }
//   render() {
//     return (
//       <ListWithLoading
//         isLoading={this.state.loading}
//         repos={this.state.repos}
//       />
//     );
//   }
// }
// export default App;
// -----This was for lazy loading------


//-------This was for error handing----------
// import React from 'react';
// import HandleErrorsWithErrorBoundary from './handlingErrorsWithErrorBoundary';

// function App()
// {
//   return(
//     <div >
//       <HandleErrorsWithErrorBoundary/>
//     </div>
//   )
// }
// export default App;
//-------This was for error handing----------

//------This is for understanding refs-----
// import React from 'react';
// import UnderstandingRefs from './UnderstandingRefs';

// function App()
// {
//   return(
//     <div >
//       <UnderstandingRefs/>
//     </div>
//   )
// }
// export default App;
//------This is for understanding refs-----

//this is for context api-----
import React from 'react';
import UnderstandingContext from './UnderstandingContext';

function App()
{
  return(
    <div >
      <UnderstandingContext/>
    </div>
  )
}
export default App;

//this is for context api-----