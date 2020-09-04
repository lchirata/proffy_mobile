import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import styles from './styles';
import PageHeader from '../../assets/components/PageHeader';
import TeacherItem, { Teacher } from '../../assets/components/TeacherItem';
import api from '../../services/api';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                })
                setFavorites(favoritedTeachersIds);
            }
        });
    }

    useFocusEffect(() => {
        loadFavorites();
    });



    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    async function handleFiltersSubmit() {
        loadFavorites();
        const response = await api.get('classes', {
            params: {

            }
        });
        console.log(response.data);
        setIsFiltersVisible(false);
        setTeachers(response.data);
    }

    return <View style={styles.container}>
        <PageHeader
            title="Responda as seguintes perguntas! "
        >
            <Text
                style={styles.subtitulo}
            >Precise que pense no seu negócio e detalhe ao máximo as suas respostas! {'\n'}</Text>

        </PageHeader>

        <ScrollView
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
            }}
        >

            <View style={styles.searchForm}>
                <Text style={styles.label}>Dados Pessoais</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={subject}
                    onChangeText={text => setSubject(text)}
                >
                </TextInput>
                <TextInput
                    style={styles.input}
                    placeholder="CPF"
                    value={subject}
                    onChangeText={text => setSubject(text)}
                >
                </TextInput>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={subject}
                    onChangeText={text => setSubject(text)}
                >
                </TextInput>
                <TextInput
                    style={styles.input}
                    placeholder="Telefone"
                    value={subject}
                    onChangeText={text => setSubject(text)}
                >
                </TextInput>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do seu negócio"
                    value={subject}
                    onChangeText={text => setSubject(text)}
                >
                </TextInput>
                <TextInput
                    style={styles.input}
                    placeholder="Qual a matéria?"
                    value={subject}
                    onChangeText={text => setSubject(text)}
                >
                </TextInput>

                <TextInput
                    style={styles.input}
                    placeholder="CNPJ (se tiver)"
                    value={subject}
                    onChangeText={text => setSubject(text)}
                >
                </TextInput>

            </View>

            <Text
                style={styles.subtitulo}
            >O que você precisa para começar seu projeto? {'\n'}</Text>

            <Text
                style={styles.subtitulo}
            >Liste pelo menos 5 Items {'\n'}</Text>




            <View style={styles.inputGroup}>
                <View style={styles.inputBlock}>
                    <Text style={styles.label}>Items</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="item 1 "
                        value={week_day}
                        onChangeText={text => setWeekDay(text)}
                    >
                    </TextInput>

                    <TextInput
                        style={styles.input}
                        placeholder="item 1 "
                        value={week_day}
                        onChangeText={text => setWeekDay(text)}
                    >
                    </TextInput>

                    <TextInput
                        style={styles.input}
                        placeholder="item 1 "
                        value={week_day}
                        onChangeText={text => setWeekDay(text)}
                    >
                    </TextInput>

                    <TextInput
                        style={styles.input}
                        placeholder="item 1 "
                        value={week_day}
                        onChangeText={text => setWeekDay(text)}
                    >
                    </TextInput>

                    <TextInput
                        style={styles.input}
                        placeholder="item 1 "
                        value={week_day}
                        onChangeText={text => setWeekDay(text)}
                    >
                    </TextInput>

                </View>
                <View style={styles.inputGroup}>
                    <View style={styles.inputBlock}>
                        <Text style={styles.label}>Valor </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="0,00"
                            value={time}
                            onChangeText={text => setTime(text)}
                        >
                        </TextInput>

                        <TextInput
                            style={styles.input}
                            placeholder="0,00"
                            value={time}
                            onChangeText={text => setTime(text)}
                        >
                        </TextInput>

                        <TextInput
                            style={styles.input}
                            placeholder="0,00"
                            value={time}
                            onChangeText={text => setTime(text)}
                        >
                        </TextInput>

                        <TextInput
                            style={styles.input}
                            placeholder="0,00"
                            value={time}
                            onChangeText={text => setTime(text)}
                        >
                        </TextInput>

                        <TextInput
                            style={styles.input}
                            placeholder="0,00"
                            value={time}
                            onChangeText={text => setTime(text)}
                        >
                        </TextInput>

                    </View>
                </View>
            </View>


            <View>
                <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                    <Text style={styles.submitButtonText}> Confirmar</Text>
                </RectButton>
            </View>

        </ScrollView>

    </View>
}

export default TeacherList;