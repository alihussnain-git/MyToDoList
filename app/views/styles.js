import { StyleSheet } from 'react-native';
import Colors from '../utils/Colors';

export default StyleSheet.create({
    splashText: {
        color: Colors.black,
        fontSize: 25,
        fontWeight: 'bold'
    },
    todoList: {
        marginStart: 10,
        marginEnd: 10
    },
    fab: {
        position: 'absolute',
        bottom: 60,
        right: 20,
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: Colors.black
    },
    fabText: {
        color: Colors.white,
        fontSize: 35,
        alignSelf: 'center'
    },
    toDoItemContainer: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: Colors.grey,
        borderRadius: 10,
        margin: 10
    },
    toDoItemTitle: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold'
    },
    toDoItemDesc: {
        color: Colors.white,
        fontSize: 15,
        marginTop: 10
    },
    deleteButton: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        padding: 5,
    },
    editButton: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        padding: 5,
        marginTop: 5,
        alignItems: 'center'
    },
    addToDoContainer: {
        flex: 1,
        margin: 20,
    },
    titleInput: {
        height: 40,
        borderBottomColor: Colors.black,
        borderBottomWidth: 1
    },
    descInput: {
        marginTop: 20,
        marginBottom:20,
        height: 35,
        borderBottomColor: Colors.black,
        borderBottomWidth: 1
    }

})