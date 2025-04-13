import { StyleSheet } from "react-native";

const SignInstyles = StyleSheet.create({
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
      paddingHorizontal: 135,
      borderRadius: 5,
    },
    signInText: {
      color: '#fff',
      fontSize: 16,
    },
    forgotPw: {
      borderColor: '#ccc',
      textAlign: 'right',
      marginBottom: 20,
    },
    forgotPwText: {
        color: '#007BFF',
        textDecorationLine: 'underline',
      },
      pressed: {
        opacity: 0.5,
      },
});
export default SignInstyles;