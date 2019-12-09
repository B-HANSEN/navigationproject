import React from 'react';
import { StyleSheet, View, Image, Text, Button } from 'react-native';
import { TextInput, List } from 'react-native-paper';



export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            server: '',
            user: '',
            password: '',
            expanded: true
          };
    }

    render() {
      return (

        <View style={styles.container}>   



            <View>
                <List.Section>
                    <List.Accordion
                        title="Login with QR Code"
                        left={props => <List.Icon {...props} icon="qrcode" />}>    
                        <Button 
                            title="Tap to scan..."
                            onPress={() => this.props.navigation.navigate('Scanner')}>
                        </Button>
                    </List.Accordion>                         
                </List.Section>
            </View>

            <View>
                <List.Section>
                    <List.Accordion
                        title="Login with Email and Password"
                        left={props => <List.Icon {...props} icon="email" />}
                    >
                        <TextInput
                            label='Server Name'
                            value={this.state.server}
                            onChangeText={server => this.setState({ server })}
                        />

                        <TextInput
                            label='Username'
                            value={this.state.user}
                            onChangeText={user => this.setState({ user })}
                        />
          
                        <TextInput
                            label='Password'
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            secureTextEntry={true}
                        />  
                    </List.Accordion>
                </List.Section>
            </View>
        </View>
      )
    }
}


const styles = StyleSheet.create({
    container: {
        // marginTop: 30,
    },
    button: {
        // marginTop: 100
    },
  });