import {StyleSheet, View, Text} from 'react-native';
import Colors from '../../shared/colors';

function NumberContainer({children}) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container:{
        borderWidth: 4,
        borderColor: Colors.yellow,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Colors.yellow,
        fontSize: 36,
        fontFamily: 'poppins-bold',
    },
});