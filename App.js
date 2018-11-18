import React from "react";
import Expo, { AppLoading } from "expo";

// Component
import HomePage from "./Components/HomePage";
import { Provider } from "react-redux";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import rootReducer from "./store/reducers";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontsAreLoaded: false
    };
  }

  componentDidMount() {
    Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    }).then(() => this.setState({ fontsAreLoaded: true }));
  }
  render() {
    if (!this.state.fontsAreLoaded) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}

export default App;
