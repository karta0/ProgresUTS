import React, { Component } from 'react';
import {
  View,
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ListView,
  Button,
  ScrollView,
} from 'react-native';

const gym = require('./Image/barbel.png');

var URL="http://mhs.rey1024.com/1415051038/fitnessapp/get_fitcenter.php";

export default class Index extends Component {
	static navigationOptions = {
    title: 'Home',
  };

  constructor(props, context) {
    super(props, context);
 	var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
       dataSource: ds,
    };
  }
  AmbilDataFit() {
    fetch(URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows
        (responseData),
      });
    }) .done();
  }

    renderRow(record) {

    return (
      <View style={styles.row} >
      	<View style={styles.iconContainer}>
         <Image source={gym} style={styles.icon} />
        </View>

        <View style={styles.info}>
          <Text style={styles.items}>{record.fitname}</Text>
          <Text style={styles.fitname}>{record.mapel}</Text>
        </View>

        <View style={styles.total}>
          <Text style={styles.alamat}>{record.alamat}</Text>
        </View>
      </View>
      
    );
  }


  render() {
    this.AmbilDataFit();
    return (
      <View style={styles.mainContainer}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }

}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    backgroundColor: '#0f1b29',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 40,
    textAlign: 'center',
  },
  row: {
    borderColor: '#f1f1f1',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#feb401',
    borderColor: '#feaf12',
    borderRadius: 25,
    borderWidth: 0,
    justifyContent: 'center',
    height: 50,
    width: 50,
  },
  icon: {
    
    height: 60,
    width: 60,
  },
  info: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  items: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  pesan: {
    color: '#ccc',
    fontSize: 14,
  },
  total: {
    width: 80,
  },
  date: {
    fontSize: 12,
    marginBottom: 5,
  },
  price: {
    color: '#1cad61',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
