import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
// import { Picker } from '@react-native-community/picker';

import styles from './styles';
import PageHeader from '../../assets/components/PageHeader';
import TeacherItem from '../../assets/components/TeacherItem';

function TeacherList() {

    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    return <View style={styles.container}>
        <PageHeader title="Proffys disponíveis">
            {/* {isFiltersVisible && ( )}  */}
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Qual a matéria?"
                    >
                    </TextInput>

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Qual o dia?" >
                            </TextInput>
                        </View>
     

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Qual horário?" >
                            </TextInput>
                        </View>
                    </View>
                    </View>

                </View>
         
        </PageHeader>

        <ScrollView
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
            }}
        >
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
        </ScrollView>

    </View>
}

export default TeacherList;