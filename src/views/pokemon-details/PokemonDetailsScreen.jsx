import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Constants from 'expo-constants'




const PokemonDetailsScreen = ({ navigation }) => {
    return (
        <View style={styles.containerDetails}>
            <TouchableOpacity
                style={styles.styleButtonDetails}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.styleTextButton}>Go Back Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PokemonDetailsScreen

const styles = StyleSheet.create({
    containerDetails: {
        flex: 1,
        backgroundColor: '#282940',
        flexDirection:'row',
        paddingTop: Constants.statusBarHeight,
        justifyContent:'center'
    },
    styleButtonDetails: {
        
        backgroundColor: '#BACDD9',
        borderRadius: 10,
        marginTop: 10,
        padding: 15,
        alignSelf:'flex-end',
        
    },
    styleTextButton: {
        fontWeight: '600',
        fontSize: 15,
        
    },
    styleText: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'center'
    }
})