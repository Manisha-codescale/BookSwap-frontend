import React from 'react';
import SignUpScreen from './src/screens/SignUpScreen.js';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashBoardScreen from './src/screens/DashBoardScreen.js';
import AddedBooks from './src/screens/AddedBooksScreen.js';
import ProfileScreen from './src/screens/ProfileScreen.js';
import SignInScreen from './src/screens/SignInScreen.js';
import ChangePasswordScreen from './src/screens/ChangePasswordScreen.js';
import BookScreen from './src/screens/BookScreen.js';
import EditProfileScreen from './src/screens/EditProfileScreen.js';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const App = () => {
  function TabNavigator() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="DashBoard"
          component={DashBoardScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="AddedBooks"
          component={AddedBooks}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="AddedBooks"
          component={AddedBooks}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BookDetails"
          component={BookScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{headerShown: false}}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;