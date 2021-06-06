import Profile from "./components/Profile/Profile";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
  return <div>
    <Provider store={store}>
    <Profile/>
    </Provider>
  </div>;
}

export default App;
