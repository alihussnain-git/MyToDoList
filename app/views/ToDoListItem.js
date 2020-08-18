import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Colors from '../utils/Colors'
import styles from './styles'
import GeneralStyles from '../utils/GeneralStyles'

export const ToDoListItem = (props) => {
    return (
        <View style={styles.toDoItemContainer}>
            <View
                style={GeneralStyles.defaultFlex}>
                <Text
                    style={styles.toDoItemTitle}>
                    {props.item.title}
                </Text>
                <Text
                    style={styles.toDoItemDesc}>
                    {props.item.description}
                </Text>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={_ => props.onPressDelete(props.item)}>
                    <Text>delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={_ => props.onPressEdit(props.item)}>
                    <Text>edit</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}