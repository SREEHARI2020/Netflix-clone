
import './App.css';
import Row from './Row';
import requests from './request';

function App() {
  return (
    <div className="App">
    <h1>Netflix-clone</h1>
    <Row title="Netflix Orginals" fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="trending now" fetchUrl={requests. fetchTrending}/>
    </div>
  );
}

export default App;
