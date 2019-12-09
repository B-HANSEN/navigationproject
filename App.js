import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './src/views/LoginScreen';
import AlertScreen from './src/views/AlertScreen';
import ScannerScreen from './src/views/ScannerScreen';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        
        <View style={ styles.image }>
          <Image
          style={{width: 200, height: 200}}
          source={{uri:'https://i.ibb.co/dgGrqwW/ic-launcher-foreground.png'}}
          />
        </View>
      
        <LoginScreen navigation={ this.props.navigation } />

      </View>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Scanner: ScannerScreen,
    Alert: AlertScreen
  },
  {
    initialRouteName: 'Home',
  }
);  


const AppContainer = createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  image: {
    alignItems: 'center'
  }
});


export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <AppContainer />
      </PaperProvider>
    )
  }
}