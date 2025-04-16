import { View, Text,ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const EditProfileScreen = () => {
  const user = {
    username: 'johndoe777',
    name: 'John Doe',
    email: 'johnn@email.com',
    date_of_birth: '1997-02-07',
    age: 26,
    address: 'No. 43, Main Road, Negombo',
    imageUrl: 'https://1857756846.rsc.cdn77.org/static/features/ai-face-generator/man1-swap-2.jpeg',
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View>
      <View style={styles.container}>
      <TouchableOpacity>
        <Image
              source={{ uri: user.imageUrl }}
          style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 26 }}
        />
      </TouchableOpacity>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Username</Text>
        <Text style={styles.value}>{user.username}</Text>
          </View>
          <View style={styles.infoBox}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{user.name}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user.email}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Age</Text>
        <Text style={styles.value}>{user.age}</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
    </View>
      </View>
      </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      //justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 10,
    paddingTop: 50,
  },
  isbn: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
      textAlign: 'center',
      marginBottom: 8,
      color: '#1d3557',
  },
  author: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  image: {
    width: 160,
    height: 240,
    resizeMode: 'contain',
    marginVertical: 16,
    borderRadius: 10,
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    paddingBottom: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
  button: {
    backgroundColor: '#1d3557',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  descriptionBox: {
    marginTop: 20,
    width: '100%',
  },
  description: {
    fontSize: 15,
    color: '#444',
    marginTop: 4,
    lineHeight: 22,
  },
});
