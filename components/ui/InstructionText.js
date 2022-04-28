import {StyleSheet, Text} from 'react-native';
import Colors from '../../shared/colors';

function InstructionText({children, style}) {
    return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.yellow,
        fontSize:24,
        fontFamily: 'poppins',
    },    
});