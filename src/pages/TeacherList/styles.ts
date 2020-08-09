import { StyleSheet } from 'react-native';
import { Poppins_800ExtraBold } from '@expo-google-fonts/poppins';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f0f0f7'
    },

    teacherList: {
        marginTop: -40,

    },

    searchForm: {
       marginBottom: 8,
    },

    label: {
        color: '#d4c2ff',
    },

    inputGroup: {
        flexDirection:'row',
        justifyContent:'space-between'
    },

    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },

    inputBlock: {
        width: '48%',
    }



}) 

export default styles;