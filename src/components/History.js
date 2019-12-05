import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { DataTable, Card, Title, Badge } from 'react-native-paper';

export default class History extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Card.Content>
            <Title>Alert History</Title>

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
                      <Badge>System Alert</Badge>
                    </DataTable.Cell>
                <DataTable.Cell>01-DEC-19</DataTable.Cell>
                <DataTable.Cell>16:00</DataTable.Cell>
                <DataTable.Cell numeric>190</DataTable.Cell>
                <DataTable.Cell numeric>3,500</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                <DataTable.Cell>
                      <Badge>Data Alert</Badge>
                    </DataTable.Cell>
                <DataTable.Cell>01-DEC-19</DataTable.Cell>
                <DataTable.Cell>15:00</DataTable.Cell>
                <DataTable.Cell numeric>237</DataTable.Cell>
                <DataTable.Cell numeric>3,400</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                <DataTable.Cell>
                      <Badge>Data Alert</Badge>
                    </DataTable.Cell>
                <DataTable.Cell>01-DEC-19</DataTable.Cell>
                <DataTable.Cell>12:00</DataTable.Cell>
                <DataTable.Cell numeric>410</DataTable.Cell>
                <DataTable.Cell numeric>6,700</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                <DataTable.Cell>
                      <Badge>Data Alert</Badge>
                    </DataTable.Cell>
                <DataTable.Cell>01-DEC-19</DataTable.Cell>
                <DataTable.Cell>09:00</DataTable.Cell>
                <DataTable.Cell numeric>237</DataTable.Cell>
                <DataTable.Cell numeric>300</DataTable.Cell>
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
    marginTop: 40
  },
});