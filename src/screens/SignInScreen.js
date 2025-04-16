import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
//import auth from '@react-native-firebase/auth';
const SignInScreen = () => {
  /* const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const onLogin = () => {
    auth()
      .signInwithEmailAndPassword(email, password)
      .then((response) => {
        console.log('User login successful', response);
      }
      ).catch((error) => {
        console.log('error :', error);
      });
  } */
    return (
        <View style={styles.container}>
            <Text style={styles.Signin}>Sign In</Text>
            <TextInput placeholder="Email" style={styles.inputBox} />
            <TextInput placeholder="Password" style={styles.inputBox} />
            <TouchableOpacity style={styles.signIn}>
                <Text style={styles.registerText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  Signin: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputBox: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  signIn: {
    backgroundColor: '#1d3557',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  registerText: {
    color: '#fff',
    fontSize: 16,
  },
});
export default SignInScreen;
