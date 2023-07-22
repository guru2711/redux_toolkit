import CarsForm from './component/CarsForm';
import CarsList from './component/CarsList';
import CarsSearch from './component/CarsSearch';
import CarsValue from './component/CarsValue';
import './App.css';


function App() {
 

  return (
    <div className="App">
      Redux ToolKit
      <hr></hr>
      <CarsForm/>
      <CarsList/>
      <CarsSearch/>
      <CarsValue/>
    </div>
  );
}

export default App;
