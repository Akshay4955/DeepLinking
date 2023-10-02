import {TextInput, View, StyleSheet, Button} from 'react-native';
import React from 'react';

export default class MyTextInput extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lastName: '',
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.text_input}
          value={this.state.name}
          onChangeText={name => this.setState({name})}
          placeholderTextColor={'#000'}
          placeholder={'Enter your name'}></TextInput>
        <TextInput
          style={styles.text_input}
          value={this.state.lastName}
          onChangeText={lastName => this.setState({lastName})}
          placeholderTextColor={'#000'}
          placeholder={'Enter your last name'}></TextInput>
        <TextInput
          style={styles.text_input}
          value={this.state.email}
          onChangeText={email => this.setState({email})}
          placeholderTextColor={'#000'}
          placeholder={'Enter your email'}></TextInput>
        <TextInput
          style={styles.text_input}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          placeholderTextColor={'#000'}
          F
          placeholder={'Enter your password'}></TextInput>
        <View style={styles.submit}>
          <Button title={'Submit'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_input: {
    height: 60,
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    fontSize: 24,
    color: '#000',
  },
  submit: {
    marginTop: 10,
  },
});
