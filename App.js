import * as React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { Audio} from 'expo-av';

class SoundButton extends React.Component {
  playSound = async () => {
       await Audio.Sound.createAsync(
         { uri: "http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3"},
         { shouldPlay: true}
       );
  };

  render() {
    return (
      <TouchableOpacity
        style={{
          marginLeft: 108,
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',
          alignItems: 'centre',
          width: 200,
          height: 200,
          backgroundColor: 'red',
          borderRadius: 100,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            fontSize: 20,
            marginLeft: 50,
            marginTop: 85,
          }}>
          {' '}
          Press Me{' '}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 200 }}>
        <SoundButton />
      </View>
    );
  }
}
