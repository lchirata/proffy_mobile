import React, {ReactNode} from 'react';
import { BorderlessButton } from 'react-native-gesture-handler'
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import backIcon from '../../images/icons/back.png';
// import logoImage from '../../images/logo.png';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
    title: string;
    headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({title,headerRight, children}) => {
    const { navigate } = useNavigation();

    function handleGoBack() {
        navigate('Landing');
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>

                {/* <Image source={logoImage} resizeMode="contain" /> */}

            </View>

            <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            {headerRight}
            </View>

            {children}
        </View>

    )
}

export default PageHeader;

