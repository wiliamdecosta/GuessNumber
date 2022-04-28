import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../shared/colors';

function GuessLogItem({ roundNumber, guess }) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.item}>#{roundNumber}</Text>
            <Text style={styles.item}>Opponent's Guess : {guess} </Text>
        </View>
    );

}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem:  {
        borderColor: Colors.primaryColor,
        borderWidth: 1,
        borderRadius: 24,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.yellow,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
    },

    item : {
        fontFamily: 'poppins-bold',
        fontSize: 16,
    }
});