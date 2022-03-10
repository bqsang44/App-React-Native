import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import tw from 'tailwind-react-native-classnames';
import IMAGES from '../assets/images/index';
import {useNavigation} from '@react-navigation/native';
import Contents from '../Data/Content';
import {COLORS, SIZES} from '../constants';
import trongdong from '../assets/trong_dong.png';

const HomeScreen = ({navigation}) => {
  const Item = ({title, img, data}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('AskScreen', data);
      }}
      style={[
        tw`m-2 mb-0 bg-white shadow-lg`,
        {
          flex: 1,
          height: 100,
          borderBottomRightRadius: 30,
          borderTopLeftRadius: 50,
          borderBottomLeftRadius: 50,
          backgroundColor: '#3c6382',
          borderWidth: 1,
          borderColor: '#0a3d62',
        },
      ]}>
      <View>
        <Image source={img} style={styles.image} />
        <View
          style={{
            height: 100,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginLeft: 100,
              padding: 20,
              paddingTop: 10,
              paddingLeft: 15,
              paddingRight: 15,
              paddingBottom: 10,
              fontSize: 20,
              color: 'white',
            }}>
            {title.toUpperCase()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 25,
        backgroundColor: '#60a3bc',
      }}>
      <FlatList
        data={Contents}
        renderItem={({item}) => (
          <Item title={item.title} img={item.img} data={item} />
        )}
        keyExtractor={item => item.id}
      />
      <StatusBar style="light" backgroundColor="black" />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
export default HomeScreen;
