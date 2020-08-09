import { StyleSheet } from "react-native";
import {View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding:30,
        backgroundColor:'#8257e5'
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title : {
        color:'#FFF',
        fontSize:24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40,
    }
});


export default styles;