import React, { useEffect } from 'react';
import {
    Button,
    View,
    TextInput
} from 'react-native';
import { connect } from "react-redux";
import Colors from '../utils/Colors';
import { addToDoList, updateToDoList } from '../redux/todo/ToDoActions';
import styles from './styles';

function AddToDo(props) {
    const [title, onChangeTitle] = React.useState(props.route.params?.todDoObj
        ? props.route.params?.todDoObj.title : '');
    const [desc, onChangeDescription] = React.useState(props.route.params?.todDoObj
        ? props.route.params?.todDoObj.description : '');


    useEffect(() => {
        if (props.route.params?.todDoObj) {
            props.navigation.setOptions({ title: 'Update ToDo' })
        }
    });

    function addToDo(title, desc) {
        let toDoList = [...props.toDoList]
        toDoList.push({ title: title, description: desc })
        props.addToDoItem(toDoList)
        props.navigation.goBack()
    }

    function updateToDo(title, desc) {
        var toDoList = [...props.toDoList]
        var index = toDoList.indexOf(props.route.params?.todDoObj)
        toDoList[index] = { title: title, description: desc }
        props.updateToDoItem(toDoList)
        props.navigation.goBack()
    }

    return (
        <View style={styles.addToDoContainer}>
            <TextInput
                autoFocus
                style={styles.titleInput}
                placeholder='Title'
                placeholderTextColor={Colors.black}
                onChangeText={text => onChangeTitle(text)}
                value={title}
            />

            <TextInput
                style={styles.descInput}
                placeholder='Description'
                placeholderTextColor={Colors.black}
                onChangeText={text => onChangeDescription(text)}
                value={desc}
                multiline={true}
            />

            <Button
                title={props.route.params?.todDoObj ? 'Update' : 'Add'}
                onPress={_ => {
                    props.route.params?.todDoObj
                        ? updateToDo(title, desc) :
                        addToDo(title, desc)
                }} />
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
        addToDoItem: (todo) => {
            dispatch(addToDoList(todo))
        },
        updateToDoItem: (todo) => {
            dispatch(updateToDoList(todo))
        },

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);
