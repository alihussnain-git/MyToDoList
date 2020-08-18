import React from 'react';
import {
    View,
    Text,

} from 'react-native';
import { useState, useEffect } from 'react';
import Routes from '../utils/Routes';
import GeneralStyle from '../utils/GeneralStyles';
import styles from './styles';
import Strings from '../utils/Strings';

function SplashScreen({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace(Routes.todo)
        }, 1500);
    });

    return (
        <View style={GeneralStyle.centerAlignView}>
            <Text style={styles.splashText}>{Strings.splashTitle}</Text>
        </View>
    );
}
export default SplashScreen