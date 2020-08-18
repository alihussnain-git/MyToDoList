import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './app/views/Splash';
import ToDoList from './app/views/ToDoList';
import AddToDo from './app/views/AddUpdateToDo';
import Routes from './app/utils/Routes';
import { StatusBar } from 'react-native';
import { store } from './app/redux/store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false, }} name={Routes.splash} component={SplashScreen} />
          <Stack.Screen options={{ title: 'My ToDo List' }} name={Routes.todo} component={ToDoList} />
          <Stack.Screen options={{ title: 'Add ToDo', headerBackTitle: 'ToDoList' }} name={Routes.addToDo} component={AddToDo} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}