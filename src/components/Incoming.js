import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, DataTable, Title, Badge } from 'react-native-paper';


export default class Incoming extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Card>
            <Card.Content>
              <Title>Incoming Message</Title>
              <DataTable>
                  <DataTable.Header>
                    <DataTable.Title>Message Type</DataTable.Title>
                    <DataTable.Title>Date</DataTable.Title>
                    <DataTable.Title>Time</DataTable.Title>
      
                    <DataTable.Title numeric>Sales vol</DataTable.Title>
                    <DataTable.Title numeric>Sales USD</DataTable.Title>
                  </DataTable.Header>

                  <DataTable.Row>
                 
                    <DataTable.Cell>
                      <Badge style={{padding: 0}}>Data Alert</Badge>
                    </DataTable.Cell>
                    <DataTable.Cell>02-DEC-19</DataTable.Cell>
                    <DataTable.Cell>09:00</DataTable.Cell>
                    <DataTable.Cell numeric>378</DataTable.Cell>
                    <DataTable.Cell numeric>51,500</DataTable.Cell>
                  </DataTable.Row>

                </DataTable>
            </Card.Content>
          </Card>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  badge: {
   
  }
});