import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import auth, { sendPasswordResetEmail } from '@react-native-firebase/auth';
import styles from '../styles/SignInStyles.js';


const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log('User login successful', response);
        Alert.alert('Login successful');
      })
      .catch(error => {
        console.log('Firebase error :', error);

        switch (error.code) {
          case 'auth/invalid-email':
            Alert.alert('Error', 'Invalid email format');
            break;
          case 'auth/invalid-credential':
            Alert.alert('Error', 'Credentials are invalid');
            break;
          case 'auth/user-disabled':
            Alert.alert('Error', 'This account has been disabled');
            break;
          case 'auth/too-many-requests':
            Alert.alert('Error', 'Too many failed attempts. Try again later');
            break;
          default:
            Alert.alert(
              'Error',
              `${error.code}`,
              'Failed to Sign In' || error.message,
            );
        }
      });
  };

  const forgotPassword = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter email');
      return;
    }
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert('Password reset email sent');
      })
      .catch(err => {
        Alert.alert('Error', err.message);
      });
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.Signin}>Sign In</Text>
      <TextInput
        placeholder="Email"
        style={styles.inputBox}
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        placeholder="Password"
        style={styles.inputBox}
        secureTextEntry
        value={password}
        onChangeText={value => setPassword(value)}
      />

      <Pressable
        onPress={forgotPassword}
        style={({pressed}) => [styles.forgotPw, pressed && styles.pressed]}>
        <Text style={styles.forgotPwText}>
          {
            '\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003'
          }
          Forgot Password?
        </Text>
      </Pressable>

      <TouchableOpacity style={styles.signIn} onPress={onLogin}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;
