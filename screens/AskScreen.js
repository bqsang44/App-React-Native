import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {WebView} from 'react-native-webview';
import tw from 'tailwind-react-native-classnames';
import {COLORS, SIZES} from '../constants';

// const text = "none";

const AskScreen = ({navigation, route}) => {
  const {desc, quiz, video} = route.params;

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <StatusBar barStyle="light" />
      <WebView
        source={{uri: video}}
        javaScriptEnabled={true}
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={true}
        cacheEnabled={true}
        style={{flex: 1, marginTop: StatusBar.currentHeight}}
      />
      <View style={{flex: 2, backgroundColor: '#3c6382'}}>
        <ScrollView>
          <Text
            style={{
              padding: 12,
              paddingTop: 10,
              paddingBottom: 45,
              fontSize: 18,
              textAlign: 'justify',
              color: COLORS.white,
            }}>
            {desc}
          </Text>
        </ScrollView>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 7,
          backgroundColor: '#38ada9',
        }}
        onPress={() => {
          navigation.navigate('Quiz', quiz);
          // playSong();
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Trắc nghiệm
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AskScreen;
