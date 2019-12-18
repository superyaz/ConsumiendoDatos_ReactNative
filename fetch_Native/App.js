/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import Home from './src/screen/Home/Home';

class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return <Home />;
  }
}

export default App;
