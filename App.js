import React from 'react';
import SignUpScreen from './src/screens/SignUpScreen.js';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashBoard from './src/screens/DashBoard.js';
import AddedBooks from './src/screens/AddedBooks.js';
import Profile from './src/screens/Profile.js';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const App = () => {
  function TabNavigator() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="DashBoard"
          component={DashBoard}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="AddedBooks"
          component={AddedBooks}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{headerShown: false}}/>
        <Stack.Screen name= "TabNavigator" component={TabNavigator} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  // return (
  //   <NavigationContainer>
  //     {/* <Stack.Navigator>
  //         <Stack.Screen name="SignUp" component={SignUpScreen} />
  //         <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
  //       </Stack.Navigator> */}
  //     <Tab.Navigator>
  //       <Tab.Screen name="DashBoard" component={DashBoard} options={{ headerShown: false }} />
  //       <Tab.Screen name="AddedBooks" component={AddedBooks} options={{ headerShown: false }}/>
  //       <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
  //     </Tab.Navigator>
  //   </NavigationContainer>
  // );
};

export default App;
