import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      timeRemaining: -1,
      buttonText: "Start"
    }
    this.timer = 0;
  }

  start = () => {
    this.setState(() => ({ 
        timeRemaining: 10,
        buttonText: "Restart"
    }));
    clearTimeout(this.timer);
    this.timer = setTimeout(this.timerTick, 1000);
  }

  timerTick = () => {
    this.setState(prevState => ({
      timeRemaining: prevState.timeRemaining - 1
    }));

    if (this.state.timeRemaining > 0) { 
      this.timer = setTimeout(this.timerTick, 1000);
    } else {
      this.timer = undefined;
    }
  }

  getDisplayText = () => {
    if (this.state.timeRemaining > 0) {
      return this.state.timeRemaining;
    } else if (this.state.timeRemaining < 0) {
      return "Click to start!";
    } else {
      return "Timer Done!";
    }
  }

  render() {
    return (
      <View style={styles.timerContainer}>
        <Text style={styles.timerTitle}>
          10 Second Timer 
        </Text>
        <Text style={styles.timeLeft}>
          { this.getDisplayText() }
        </Text>
        <TouchableOpacity
          onPress = {this.start} 
          style = {styles.b}>
          <Text style = {styles.bText}>
            {this.state.buttonText}
          </Text>
        </TouchableOpacity>
      </View>
      );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer/>
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
  timerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerTitle: {
    fontSize: 40
  },
  timeLeft: {
    fontSize: 20,
    margin: 10
  },
  b: {
    padding: 10,
    backgroundColor: "green",
  },
  bText: {
    color: "white", 
    justifyContent: 'center', 
    alignItems: 'center'
  }
  
});
