import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#442c74',
        justifyContent: 'center',
    },
    banner: {
        width: '100%',
        resizeMode: 'contain'
    },

    image: {
        // justifyContent: 'space-between',
    },

    title: {

        marginLeft: 60,
        color: '#FFF',
        fontFamily: 'Poppins_400Regular',
        fontSize: 26,
        lineHeight: 30,
        marginTop: 80,

    },

    titleBold: {
        fontFamily: 'Poppins_400Regular',
        color: "#50C2B1",
        textAlign:'center',
    },

    subtitle: {
        fontFamily: 'Poppins_400Regular',
        color: "#FC6404",
        textAlign:'center',
        fontSize: 26,

    },

    buttonsContainer: {
        // marginLeft: 5,
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between'
    },

    button: {

        height: 70,
        width: '42%',
        backgroundColor: '#333',
        borderRadius: 8,
        margin:15,
        justifyContent: 'space-between',
    },

    buttonPrimary: {
        backgroundColor: '#50C2B1',
        textAlign:'center',
        paddingTop:20,
        paddingLeft:40,
    },

    buttonSecoundary: {
        backgroundColor: '#FC6404',
        paddingTop:20,
        paddingLeft:28,
    },

    buttonText: {
        // fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 20,
    },

    totalConnections: {
        // fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 12,
        lineHeight: 20,
        textAlign:'center',
        // maxWidth: 140,
        // marginTop: 40,
        // marginLeft: 50,
    }
});

export default styles;