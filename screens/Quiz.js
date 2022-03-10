import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  Animated,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {COLORS, SIZES} from '../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
var Sound = require('react-native-sound');

Sound.setCategory('Playback');

var whoosh_traloidung = new Sound(
  'tra_loi_dung.mp3',
  Sound.MAIN_BUNDLE,
  error => {
    if (error) {
      console.log('[tra_loi_dung.mp3] failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log(
      '[tra_loi_dung.mp3] duration in seconds: ' +
        whoosh_traloidung.getDuration() +
        ', number of channels: ' +
        whoosh_traloidung.getNumberOfChannels() +
        ', set volume: ' +
        whoosh_traloidung.getVolume(),
    );
  },
);

var whoosh_traloisai = new Sound(
  'tra_loi_sai.mp3',
  Sound.MAIN_BUNDLE,
  error => {
    if (error) {
      console.log('[tra_loi_sai.mp3] failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log(
      '[tra_loi_sai.mp3] duration in seconds: ' +
        whoosh_traloisai.getDuration() +
        ', number of channels: ' +
        whoosh_traloisai.getNumberOfChannels() +
        ', set volume: ' +
        whoosh_traloisai.getVolume(),
    );
  },
);

var whoosh_chucmung = new Sound('chuc_mung.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('[chuc_mung.mp3] failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log(
    '[chuc_mung.mp3] duration in seconds: ' +
      whoosh_chucmung.getDuration() +
      ', number of channels: ' +
      whoosh_chucmung.getNumberOfChannels() +
      ', set volume: ' +
      whoosh_chucmung.getVolume(),
  );
});

var whoosh_thuacuoc = new Sound('thua_cuoc.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('[thua_cuoc.mp3] failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log(
    '[thua_cuoc.mp3] duration in seconds: ' +
      whoosh_thuacuoc.getDuration() +
      ', number of channels: ' +
      whoosh_thuacuoc.getNumberOfChannels() +
      ', set volume: ' +
      whoosh_thuacuoc.getVolume(),
  );
});

const playSong_traloidung = () => {
  whoosh_traloidung.stop(() => {
    whoosh_traloidung.play(success => {
      if (success) {
        console.log('[tra_loi_dung.mp3] successfully finished playing');
      } else {
        console.log(
          '[tra_loi_dung.mp3] playback failed due to audio decoding errors',
        );
      }
    });
  });
};

const playSong_traloisai = () => {
  whoosh_traloisai.stop(() => {
    whoosh_traloisai.play(success => {
      if (success) {
        console.log('[tra_loi_sai.mp3] successfully finished playing');
      } else {
        console.log(
          '[tra_loi_sai.mp3] playback failed due to audio decoding errors',
        );
      }
    });
  });
};

const playSong_chucmung = () => {
  whoosh_chucmung.stop(() => {
    whoosh_chucmung.play(success => {
      if (success) {
        console.log('[chuc_mung.mp3] successfully finished playing');
      } else {
        console.log(
          '[chuc_mung.mp3] playback failed due to audio decoding errors',
        );
      }
    });
  });
};

const playSong_thuacuoc = () => {
  whoosh_thuacuoc.stop(() => {
    whoosh_thuacuoc.play(success => {
      if (success) {
        console.log('[thua_cuoc.mp3] successfully finished playing');
      } else {
        console.log(
          '[thua_cuoc.mp3] playback failed due to audio decoding errors',
        );
      }
    });
  });
};

const Quiz = ({route, navigation}) => {
  const allQuestions = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const validateAnswer = selectedOption => {
    let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption == correct_option) {
      // Set Score
      setScore(score + 1);
      {
        playSong_traloidung();
      }
    } else {
      {
        playSong_traloisai();
      }
    }
    // Show Next Button
    setShowNextButton(true);
  };
  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      // Last Question
      // Show Score Modal
      setShowScoreModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const renderQuestion = () => {
    return (
      <View
        style={{
          marginVertical: 40,
        }}>
        {/* Question Counter */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              opacity: 0.8,
              marginRight: 2,
            }}>
            {currentQuestionIndex + 1}
          </Text>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 18,
              opacity: 0.8,
            }}>
            / {allQuestions.length}
          </Text>
        </View>

        {/* Question */}
        <Text
          style={{
            color: COLORS.white,
            fontSize: 30,
            marginBottom: 5,
          }}>
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
        {allQuestions[currentQuestionIndex]?.image ? (
          <View>
            <Image
              style={{
                height: 150,
                width: '80%',
                marginRight: 'auto',
                marginLeft: 'auto',
                marginBottom: 0,
                marginTop: 0,
                borderRadius: 20,
                borderWidth: 3,
                borderColor: 'white',
              }}
              source={allQuestions[currentQuestionIndex].image}
            />
          </View>
        ) : null}
      </View>
    );
  };
  const renderOptions = () => {
    return (
      <View>
        {allQuestions[currentQuestionIndex]?.options.map(option => (
          <TouchableOpacity
            style={{
              borderWidth: 3,
              borderColor:
                option == correctOption
                  ? COLORS.success
                  : option == currentOptionSelected
                  ? COLORS.error
                  : // : COLORS.secondary + '40',
                    '#f6b93b' + '70',
              backgroundColor:
                option == correctOption
                  ? COLORS.success + '20'
                  : option == currentOptionSelected
                  ? COLORS.error + '20'
                  : // : COLORS.secondary + '20',
                    '#f6b93b' + '20',
              height: 'auto',
              paddingTop: 5,
              paddingBottom: 5,
              paddingRight: 15,
              paddingLeft: 15,
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}
            onPress={() => validateAnswer(option)}
            disabled={isOptionsDisabled}
            key={option}>
            <Text
              style={{
                flex: 1,
                fontSize: 20,
                color: COLORS.white,
              }}>
              {option}
            </Text>
            {/* Show Check Or Cross Icon based on correct answer*/}
            {option == correctOption ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: COLORS.success,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 5,
                }}>
                <MaterialCommunityIcons
                  name="check"
                  color={COLORS.white}
                  size={20}
                />
              </View>
            ) : option == currentOptionSelected ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: COLORS.error,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="close"
                  color={COLORS.white}
                  size={20}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
          onPress={handleNext}
          style={{
            marginTop: 20,
            width: '100%',
            backgroundColor: '#78e08f',
            padding: 20,
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: COLORS.white,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Câu hỏi kế tiếp
          </Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ['0%', '100%'],
  });
  const renderProgressBar = () => {
    return (
      <View
        style={{
          width: '100%',
          height: 20,
          borderRadius: 20,
          backgroundColor: '#00000020',
        }}>
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 20,
              backgroundColor: '#e58e26',
            },
            {
              width: progressAnim,
            },
          ]}></Animated.View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#3c6382',
      }}>
      <ScrollView>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
        <View
          style={{
            flex: 1,
            paddingVertical: 40,
            paddingHorizontal: 16,
            backgroundColor: 'transparent',
            position: 'relative',
          }}>
          {/* ProgressBar */}
          {renderProgressBar()}
          {/* Question */}
          {renderQuestion()}
          {/* Options */}
          {renderOptions()}
          {/* Next Button */}
          {renderNextButton()}
          {/* Score Modal */}
          {console.log(
            'cau ',
            currentQuestionIndex + 1,
            '/',
            allQuestions.length,
          )}
          <Modal
            animationType="slide"
            transparent={true}
            visible={showScoreModal}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#0a3d62',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  backgroundColor: COLORS.white,
                  width: '90%',
                  borderRadius: 20,
                  padding: 20,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: COLORS.black,
                  }}>
                  {score > allQuestions.length / 2
                    ? 'Xin chúc mừng!'
                    : 'Bạn cần cố gắng thêm!'}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginVertical: 20,
                  }}>
                  <Text
                    style={{
                      fontSize: 30,
                      color:
                        score > allQuestions.length / 2
                          ? COLORS.success
                          : COLORS.error,
                    }}>
                    {score}
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      color: COLORS.black,
                    }}>
                    / {allQuestions.length}
                  </Text>
                </View>
                {/* Retry Quiz button */}

                <TouchableOpacity
                  onPress={restartQuiz}
                  style={{
                    backgroundColor: '#e58e26',
                    padding: 20,
                    width: '100%',
                    borderRadius: 20,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: COLORS.white,
                      fontSize: 20,
                    }}>
                    Thử lại
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.replace('Home')}
                  style={{
                    backgroundColor: '#38ada9',
                    padding: 20,
                    width: '100%',
                    borderRadius: 20,
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: COLORS.white,
                      fontSize: 20,
                    }}>
                    Trang chủ
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          {/* Background Image */}
        </View>
      </ScrollView>
      <Image
        source={require('../assets/trong_dong.png')}
        resizeMode="cover"
        style={{
          position: 'absolute',
          flex: 1,
          justifyContent: 'center',
          zIndex: -1,
          opacity: 0.2,
          minWidth: windowWidth,
          minHeight: windowHeight,
        }}
      />
    </SafeAreaView>
  );
};

export default Quiz;
