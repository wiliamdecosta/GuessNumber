import { StyleSheet, Text, ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  console.log("Load App...");
  const [userNumber, setUserNumber] = useState('');
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] =  useState(0);

  const [fontsLoaded] = useFonts({
    'poppins' : require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold' : require('./assets/fonts/Poppins-Bold.ttf'),
    'poppins-italic' : require('./assets/fonts/Poppins-Italic.ttf'),
    'poppins-semi-bold' : require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  if(!fontsLoaded) {
    return <AppLoading/>;
  }
  
  function pickedNumberHandler(value) {
    setUserNumber(value);
    setGameIsOver(false);
  }

  function setGameOverHandler(guessRounds) {
    setGuessRounds(guessRounds);
    setGameIsOver(true);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }


  console.log("Check Screen...");

  let currentScreen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    currentScreen = <GameScreen userNumber={userNumber} onGameOver={setGameOverHandler}/>;
  }

  if(gameIsOver && userNumber){
    currentScreen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>
  }


  return (

    <LinearGradient
      colors={['#4e0329', '#ddb52f']}
      style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {currentScreen}
        </SafeAreaView>
        <StatusBar style='light' colors='white' backgroundColor='brown' />
      </ImageBackground>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
