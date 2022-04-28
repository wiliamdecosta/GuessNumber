import { StyleSheet, Text} from 'react-native';
import Colors from '../../shared/colors.js';

export default function Title(props) {
    if(props.text != null)
        return <Text style={styles.text}>{props.text}</Text>;
    return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontFamily: 'poppins-bold',
        color: Colors.white,
        textAlign: 'center',
        padding: 10,
        borderWidth: 3,
        borderColor: Colors.white,
    },
});