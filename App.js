import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './src/views/LoginScreen';
import AlertScreen from './src/views/AlertScreen';
import ScannerScreen from './src/views/ScannerScreen';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={{ alignItems: 'center' }}>
          <Image
          style={{width: 200, height: 200}}
          source={{uri:'https://i.ibb.co/dgGrqwW/ic-launcher-foreground.png'}}
          />
        </View>

        <Button 
          title="Go to QR Code..."
          onPress={() => this.props.navigation.navigate('Scanner')}
        />
      
        <LoginScreen />

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
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
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