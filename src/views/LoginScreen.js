import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { TextInput, List } from 'react-native-paper';
import Scanner from '../components/Scanner';


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
            <View style={{ alignItems: 'center' }}>
                <Image
                style={{width: 200, height: 200}}
                source={{uri:'https://i.ibb.co/dgGrqwW/ic-launcher-foreground.png'}}
                />
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
                        />  
                    </List.Accordion>
                </List.Section>
            </View>

            <View>
                <Scanner />
            </View>
         
            <View>
                <List.Section>
                    <List.Accordion
                        title="Login with QR Code"
                        left={props => <List.Icon {...props} icon="qrcode" />}
                    >
                       <List.Item title="TODO: add link to Camera" />
                     
                  </List.Accordion>
                 </List.Section>
            </View>
        </View>
      )
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 100,
    },
    button: {
        marginTop: 100
    },
  });