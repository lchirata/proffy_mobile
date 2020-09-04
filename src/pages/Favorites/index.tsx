import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles';
import PageHeader from '../../assets/components/PageHeader';
import TeacherItem, { Teacher } from '../../assets/components/TeacherItem';

import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    function loadFavorites() {

        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);

                setFavorites(favoritedTeachers);
            }
        });
    }
    useFocusEffect(() => {
        loadFavorites();
    });


    return (<View style={styles.container}>
        <PageHeader title="Minha Simulação" />

        <ScrollView
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
            }}
        >
            {favorites.map((teacher: Teacher) => {
                return (
                    <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favorited={true}
                    >

                    </TeacherItem>
                )
            })}
        </ScrollView>
    </View>)
}

export default Favorites;