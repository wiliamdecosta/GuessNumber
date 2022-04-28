import {StyleSheet, View} from 'react-native'; 
import Colors from '../../shared/colors';

function Card({children}) {
    return(
        <View style={styles.cardContainer}>
            {children}
        </View>        
    );
}

export default Card;

const styles = StyleSheet.create({
    cardContainer: {
        padding: 16,
        marginHorizontal: 24,
        backgroundColor: Colors.primaryColor,
        borderRadius: 10,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        alignItems: 'center',
    },    
});