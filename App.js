import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import LoginScreen from './src/views/LoginScreen';
import AlertScreen from './src/views/AlertScreen';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginScreen />
        <Text>Open up App.js to start working on your app!</Text>
        <View>
          <Button
            title="Go to Details..."
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      </View>
    );
  }
}


class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <AlertScreen />
          <Button
            title="Go to Home..."
            onPress={() => this.props.navigation.navigate('Home')}
          />
      </View>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <AppContainer />;
      </PaperProvider>
    )
  }
}