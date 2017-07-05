import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  ActivityIndicator
} from 'react-native';

import {getAPI} from '../../api.js';
var axios = require('axios');
const url='https://www.reddit.com/r/movies/top.json?limit=30'
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class AxiosDemoApp extends Component {
  constructor(props){
  super(props);
   this.state = {
      dataSource: ds.cloneWithRows([]),
    //  dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      loaded: false,
    };
}

  componentDidMount() {
    const that = this;
    axios.get('https://www.reddit.com/r/movies/top.json?limit=5')
    .then(function (response) {
      console.log(response.data.data.children);

      that.setState({
        loaded:true,
        dataSource:ds.cloneWithRows(response.data.data.children),
      })

  //  alert(dataSource)

      //bodyText: response.data.data
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    if (!this.state.loaded) {
     return this.renderLoadingView();
   }
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}

          style={styles.listView}
          renderRow={this.renderPost}
        />

        </View>
  );
  }
  renderLoadingView(){
    return(
      <View style={styles.centreContainer}>
        <ActivityIndicator
        animating={!this.state.loaded}
        style={{height: 100}}
        size="large"
      />
      </View>
    )
  }
  renderPost(post){
    return(
      // <View style={styles.postContainer}>
      //   <Image
      //     source={{uri:post.data.thumbnail}}
      //     style={styles.thumbnail}
      //     />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{post.data.title}</Text>
          </View>
      //</View>
    )
  }
}


const styles = StyleSheet.create({
  centreContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  postContainer: {
    flex: 1,
    margin:5,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textbox: {
    height: 40,
    width: 300,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer: {
   flex: 1,
   marginLeft:10
 },
 title: {
    fontSize: 10,
    paddingTop:5,
    marginBottom: 8,
    textAlign: 'left',
  },
  year: {
    textAlign: 'center',
  },
  istView:{
    backgroundColor:'#333333',
  }
});
