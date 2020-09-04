import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationHelpersContext } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import landingImg from '../../assets/images/empreende.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClasses from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import api from '../../services/api';

function Landing() {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    })
  }, []);

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigate('Study');
  }

  return (
    <View style={styles.container}>
      {/* <Image style={styles.image }source={landingImg} /> */}

      <Text>
        Logo
      </Text>
    
      <Text style={styles.title}> 
        Sua oportunidade de dar o primeiro passo para o seu sonho. {'\n'}
          <Text style={styles.titleBold}> {'\n'}Você planeja.{'\n'} Você simula. {'\n'}Você conquista.{'\n'}
          </Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateToStudyPages}
          style={[styles.button, styles.buttonPrimary]}>
          <Text style={styles.buttonText} >Simular</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigateToGiveClassesPage}
          style={[styles.button, styles.buttonSecoundary]}>
          <Text style={styles.buttonText}>Abrir conta</Text>
        </RectButton>
      </View>

      <Text style={styles.subtitle} >
          {'\n'} O BMG só te ajuda com o primeiro investimento.
      </Text>


      <Text style={styles.totalConnections}>
      Contribuindo para um futuro com grandes mulheres empreendedoras.
        <Image source={heartIcon} />
      </Text>

    </View>
  );
};

export default Landing;