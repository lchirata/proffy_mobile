import { StyleSheet } from 'react-native';
import { Poppins_800ExtraBold } from '@expo-google-fonts/poppins';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#442C64'
    },

    teacherList: {
        marginTop: -40,

    },

    searchForm: {
       marginBottom: 8
    },

    label: {
        color: '#d4c2ff',
    
    },

    inputGroup: {
        flexDirection:'row',
        padding: 3,
        justifyContent:'center',
        alignItems:'baseline'
        
    },

    inputBlock: {
        // width: '48%',
        paddingHorizontal:16,
    

    },

    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 10,
        // marginBottom: 16
    },
    

    submitButton: {
        backgroundColor: '#50C2B1',
        height: 56,
        borderRadius: 8,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20

    },
    submitButtonText: {
        color: '#FFF',
        fontSize:16,
    },

    subtitulo: {
        color:'#FFF',
        fontSize:16,
    }





}) 

export default styles;