import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { List } from 'react-native-paper';

export default function Navbar() {
  return(
    <View>
      <List.Item 
        title="Ping"
        right={props => <List.Icon {...props} icon="camera" />}
        style={styles.ping}
      />
    <View style={styles.navContainer} >
      <List.Item 
        title="Incoming Messages"
      />
      <Text style={styles.logout}>Logout</Text>
    </View>
    </View>
  )
};

const styles = StyleSheet.create({
  navContainer: {
    borderBottomWidth: 0.7,
    borderBottomColor: '#d6d7da',
  },
  logout: {
    height: 40,
    textAlign: 'right',
    fontSize: 15,
    marginRight: 8,
  },
  ping: {
    marginBottom: 4,
    borderRadius: 4,
    borderWidth: 0.7,
    borderColor: '#d6d7da',
  }
});