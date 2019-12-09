import React from 'react';
import { Text, View } from 'react-native';

import Incoming from '../components/History';
import History from '../components/Incoming';


export default class AlertScreen extends React.Component {

    render() {
        return (
        <View>
           <Incoming />
           <History />
        </View>
        )
    }
}