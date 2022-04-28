import { StyleSheet, View, Text, Alert, FlatList, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

import Title from '../components/ui/Title.js';
import NumberContainer from '../components/game/NumberContainer.js';
import PrimaryButton from '../components/ui/PrimaryButton.js';
import Card from '../components/ui/Card.js';
import InstructionText from '../components/ui/InstructionText.js';
import GuessLogItem from '../components/game/GuessLogItem.js';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {

    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => { //execute only once 
        console.log("useEffect with no param");
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    console.log("Game Screen..." + guessRounds.length);

    useEffect(() => {
        console.log("useEffect with param");
        if (currentGuess == userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) { //lower, higher

        if ((direction === 'lower' && currentGuess < userNumber)
            || (direction === 'higher' && currentGuess > userNumber)
        ) {
            Alert.alert("Sorry", "Don't lie! you know it is wrong...", [
                { text: 'Sorry', style: 'cancel' },
            ]);
            return;
        }

        if (direction == 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds((prevGuess) => {
            return [newRndNumber, ...prevGuess];
        });
    }

    const guessRoundsListLength = guessRounds.length;

    return (
        <View nestedScrollEnabled style={styles.container}>
            <Title>Opponent's Number</Title>
            <NumberContainer>{currentGuess}</NumberContainer>

            <Card>
                <InstructionText>Higher or Lower ? </InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove-circle" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                            <Ionicons name="add-circle" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList data={guessRounds}
                    renderItem={(data) => {
                        return <GuessLogItem roundNumber={(guessRoundsListLength - data.index)} guess={data.item}/>;
                    }}
                    keyExtractor={(item, index) => {
                        return item;
                    }}
                    showsVerticalScrollIndicator={false}
               />
            </View>  
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({

    screen: {
        flex:1,
    },
    container: {
        flex: 1,
        padding: 24,
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 15,
    },

    button: {
        flex: 1,
        marginHorizontal: 8,
    },

    listContainer: {
       flex:1,
        marginTop: 24,
    }
});