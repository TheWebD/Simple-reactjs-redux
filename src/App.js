import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from "react-redux"
import  store from "./components/store"
import  Cart  from "./components/Cart"

function App() {
  return (
    <Provider store={store}>
      <Cart/>
    </Provider>
  );
}

export default App;
