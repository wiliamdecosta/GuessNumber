import {
    StyleSheet,
    Text, 
    TouchableOpacity, 
} from 'react-native';

import Colors from '../../shared/colors.js';

function PrimaryButton(props) {

    function onPressHandler() {
        props.onPress();
    }

    return(
        <TouchableOpacity 
            style={styles.buttonContainer} 
            onPress={onPressHandler}>
            <Text style={styles.text}>{props.children}</Text>
        </TouchableOpacity>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonContainer:{
        paddingVertical: 8,
        paddingHorizontal:16,
        backgroundColor: Colors.primaryButton,
        borderRadius: 28,
        elevation: 4,
    },

    text: {
        color: '#ffffff',
        textAlign: 'center',
        fontFamily: 'poppins',
    }
});