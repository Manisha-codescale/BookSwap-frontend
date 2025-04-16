import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles/ProfileStyles';

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    age: 25,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>{user.name}</Text>

      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>{user.email}</Text>

      <Text style={styles.label}>Age:</Text>
      <Text style={styles.value}>{user.age}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Profile