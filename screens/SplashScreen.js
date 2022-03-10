import React, {useRef, useEffect} from 'react';
import {Animated, Easing, Text, View} from 'react-native';

var Sound = require('react-native-sound');

Sound.setCategory('Playback');

var whoosh_splash = new Sound('splash.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('[splash.mp3] failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log(
    '[splash.mp3] duration in seconds: ' +
      whoosh_splash.getDuration() +
      ', number of channels: ' +
      whoosh_splash.getNumberOfChannels() +
      ', set volume: ' +
      whoosh_splash.getVolume(),
  );
});

const playSong_splash = () => {
  whoosh_splash.play(success => {
    if (success) {
      console.log('[splash.mp3] successfully finished playing');
    } else {
      console.log('[splash.mp3] playback failed due to audio decoding errors');
    }
  });
};

export default function SplashScreen({navigation}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const runAnim = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    runAnim();
  });

  setTimeout(() => {
    navigation.replace('Home');
  }, 3500);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#60a3bc',
      }}>
      {playSong_splash()}
      <Animated.Image
        style={{
          opacity: fadeAnim,
          width: 250,
          height: 250,
          borderRadius: 75,
        }}
        source={require('../assets/images/logo.png')}></Animated.Image>
    </View>
  );
}
