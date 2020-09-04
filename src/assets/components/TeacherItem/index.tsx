import React, { useState } from 'react';
import { View, Image, Text, Linking, ImageBackground } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../../assets/images/icons/whatsapp.png';
import AsyncStorage from '@react-native-community/async-storage';


import styles from './styles';
import api from '../../../services/api';


export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
    favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
    const [isFavorited, setIsFavorited] = useState(favorited);

    function handleLinkToWhatsapp() {

        api.post('connections', {
            user_id: teacher.id,
        })
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
    }

    async function handleToggleFavorite() {
        const favorites = await AsyncStorage.getItem('Favorites');
        let favoritesArray = [];
        if (favorites) {
            favoritesArray = JSON.parse(favorites);
        }

        if (isFavorited) {
            //remover dos favoritos
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id;
            });
            favoritesArray.splice(favoriteIndex, 1);
            setIsFavorited(false);
        } else {
            //adcionar dos favoritos
            favoritesArray.push(teacher);
            setIsFavorited(true);
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>O valor que você precisa é de: {`\n`}{`\n`}RS 50,000</Text>
                    <Text style={styles.subject}>E você pode parcelar em : 12X</Text>
                </View>
            </View>

            <Text style={styles.bio}>Trabalhando mais ou menos 3 dias, você consegue quitar o valor da parcela !</Text>

            <View style={styles.footer}>

            <Text>Entre em contato com um de nossos gerentes!</Text>


                <View style={styles.buttonContainer}>
                   
                    <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
                        <Text style={styles.contactButtonText}>Entrar em contato!</Text>
                    </RectButton>
                </View>
            </View>
        </View>

    )
}

export default TeacherItem;