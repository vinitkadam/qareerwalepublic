import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native'
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';
import reducers from './src/reducers';
import { AppLoading } from "expo";
import * as Font from 'expo-font';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoading: true, // to load font in expo      
    };
  }

  // componentDidMount() {
  //   SplashScreen.hide()
  // }
  async componentWillMount() {
    await Font.loadAsync({
      'work-sans': require('./assets/fonts/WorkSans-Regular.ttf'),
      'work-sans-bold': require('./assets/fonts/WorkSans-Bold.ttf'),
      'work-sans-medium': require('./assets/fonts/WorkSans-Medium.ttf'),
      'work-sans-semi-bold': require('./assets/fonts/WorkSans-SemiBold.ttf'),
      'open-sans-semi-bold': require('./assets/fonts/OpenSans-SemiBold.ttf')
    });
    this.setState({ fontLoading: false });
  }


  render() {
    const store = createStore(
      reducers,
      {},
      compose(
        applyMiddleware(ReduxThunk),
      )
    );

    persistStore(store, null, () => { store.getState(); });

    if (this.state.fontLoading) {
      return (
        <AppLoading />
      );
    } else {
      return (
        <Provider store={store}>
          <Router />
        </Provider>
      );
    }
  }

}

// App = codePush(
//   { 
//     checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
//     installMode: codePush.InstallMode.ON_NEXT_RESUME
//   }
// )(App);

export default App;
