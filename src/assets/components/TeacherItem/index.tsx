import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://pm1.narvii.com/6440/edcd9dd8759dd25b93011656d7ab57222afa2e3d_00.jpg' }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Uraraka Ochako</Text>
                    <Text style={styles.subject}>Educação Física</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Professora de educação física especializada em artes marciais.
                {'\n'}{'\n'}
                Ama o Midoriya
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'  '}
                    <Text style={styles.priceValue}> R$ 20,00 </Text>
                </Text>

                <View style={styles.buttonContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>

    )
}

export default TeacherItem;