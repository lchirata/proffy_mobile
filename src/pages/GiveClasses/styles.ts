import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#50C2B1',
        justifyContent: 'center',
        padding: 40
    },

    content: {
        flex: 1,
        justifyContent: 'center',
  
    },

    title :{
        color: '#FFF',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180,
    },

    description: {
        marginTop: 24,
        color: '#FC6404',
        fontSize:16,
        lineHeight:26,
        maxWidth:240
    },

    okButton: {
        marginVertical:40,
        backgroundColor: '#442c74',
        height:58,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8

    },

    okButtonText :{
        color:'#FFF',
        fontSize:16,
    }
});

export default styles;