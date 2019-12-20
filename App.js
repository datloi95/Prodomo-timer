import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class WorkCounter extends Component {
  state = {
    count: 0,
  }
  
  componentDidMount() {
    this.timer = setInterval(this.incrementCount, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
  
  incrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  
  render() {
    return <Text>{this.state.count}</Text>
  }
}


export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Work Timer</Text>
        <WorkCounter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
