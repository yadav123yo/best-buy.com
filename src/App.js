
// import { Provider } from 'react-redux'

// import { store } from './Redux/store'
// import axios from 'axios'
import "./App.css"
// import  Main  from './Main';
import  AllRoutes  from './AllRoutes'

  // axios.defaults.baseURL='https://bestbuy-server.herokuapp.com/api/';
  // axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  return (
    <div className="App">
      {/* <Provider  store={store}> */}
        {/* <Main /> */}
        <AllRoutes />
      {/* </Provider> */}
    </div>
  );
}

export default App;
