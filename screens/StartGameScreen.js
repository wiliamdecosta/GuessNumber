import { Text, TextInput, SafeAreaView, StyleSheet, View, Alert, KeyboardAvoidingView, ScrollView, } from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../shared/colors.js';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen(props) {

    const [guessNumber, setGuessNumber] = useState('');

    function onChangeInputHandler(val) {
        setGuessNumber(val);
    }

    function onConfirmHandler() {
        if (guessNumber === '') {
            Alert.alert('Empty', 'Oops, please enter a number!',
                [{ text: 'Okay', style: 'destructive', onPress: onReset }]
            );
            return;
        }

        const inputNumber = parseInt(guessNumber);
        if (isNaN(inputNumber) || inputNumber <= 0) {
            Alert.alert('Information', 'Sorry, please input a number greater than zero.',
                [{ text: 'Okay', style: 'destructive', onPress: onReset }]);
            return;
        }

        props.onPickedNumber(inputNumber.toString());
    }

    function onReset() {
        setGuessNumber('');
    }

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={styles.rootContainer}>
                    <View style={styles.title}>
                        <Title>Guess My Number</Title>
                    </View>
                    <Card>
                        <InstructionText>Enter a Number : </InstructionText>
                        <TextInput
                            keyboardType='decimal-pad'
                            maxLength={2}
                            style={styles.numberInput}
                            autoCorrect={false}
                            value={guessNumber}
                            onChangeText={onChangeInputHandler}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.button}>
                                <PrimaryButton onPress={onReset}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.button}>
                                <PrimaryButton onPress={onConfirmHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({

    screen: {
        flex: 1,
    },

    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },

    numberInput: {
        width: 50,
        height: 50,
        fontSize: 32,
        borderBottomWidth: 2,
        borderBottomColor: Colors.yellow,
        color: Colors.yellow,
        marginVertical: 8,
        fontFamily: 'poppins-bold',
        textAlign: 'center',
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

    title: {
        marginBottom: 24,
    },

});