import * as React from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';
import { NavigationEvents } from 'react-navigation';

export default class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission, scanned } = this.state;


    if (hasCameraPermission === null) {
      return (
        <View>
          {/* <Text>Requesting for camera permission</Text>; */}
        </View>
      )
    }
    if (hasCameraPermission === false) {
      return (
        <View>
          <Text>No access to camera</Text>;
        </View>
      )
    }
    return (
      <View
        style={{
          height: 300,
          width: 300
        }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={[StyleSheet.absoluteFill, styles.container]}>
          <Text style={styles.description}>Scan your QR code</Text>
        </BarCodeScanner>

        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => this.setState({ scanned: false })}
          />
        )}
      </View>
    );
  }

  handleBarCodeScanned = (input) => {
    console.log(input)
    let { type, data } = input
    this.setState({ scanned: true });
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    this.props.navigation.navigate('Alert');
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  description: {
    marginTop: '10%',
    textAlign: 'center',
    width: '70%',
    color: 'white',
  }
});


// onPress={() => this.props.navigation.navigate('Scanner')}