import React from 'react';
import {

    Button,
    View,
    FlatList,
    TouchableOpacity,
    Text
} from 'react-native';
import { connect } from "react-redux";
import Routes from '../utils/Routes';
import GeneralStyles from '../utils/GeneralStyles';
import { ToDoListItem } from './ToDoListItem';
import { deleteToDoList } from '../redux/todo/ToDoActions';
import Strings from '../utils/Strings';
import styles from './styles';

function ToDoList(props) {

    function deleteTodo(item) {
        let toDoList = [...props.toDoList]
        var index = toDoList.indexOf(item)
        if (index !== -1) {
            toDoList.splice(index, 1)
            props.deleteTodo(toDoList)
        }
    }

    if (props.toDoList.length < 1) {
        return (
            <View style={GeneralStyles.centerAlignView}>
                <Button
                    title={Strings.addButtonTitle}
                    onPress={_ => props.navigation.navigate(Routes.addToDo)} />
            </View>
        );
    }
    return (
        <View style={GeneralStyles.whiteBg}>
            <FlatList
                style={styles.todoList}
                data={props.toDoList}
                renderItem={({ item }) => <ToDoListItem
                    item={item}
                    onPressEdit={item => props.navigation.navigate(Routes.addToDo, { todDoObj: item })}
                    onPressDelete={item => deleteTodo(item)} />}
                keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity style={styles.fab} onPress={_ => props.navigation.navigate(Routes.addToDo)}>
                <Text style={styles.fabText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

function mapStateToProps(state) {
    let { toDoState } = state;
    return {
        ...toDoState
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteTodo: (todo) => {
            dispatch(deleteToDoList(todo))
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);