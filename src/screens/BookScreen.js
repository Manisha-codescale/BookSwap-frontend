import { View, Image,  Text, Touchable, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const BookScreen = () => {
    const book = {
        ISBN: 50505005050,
        name: 'Beyond the Ocean Door',
        author: 'Amisha Sathi',
        category: 'Tragedy',
        price: 44.5,
        age_limit: 16,
        description: 'The main character opens a door that only she can see through, sparking curiosity about what awaits her. Her glowing sword suggests both magic and danger, while the light pouring from the door has a liquid quality, hinting at its oceanic nature. Though digitally painted, I added texture and soft edges to give the illustration a traditional, hand-painted feel, enhancing its depth and atmosphere.',
        isConditionUsed: true,
        image: 'https://blog-cdn.reedsy.com/directories/gallery/248/large_65b0ae90317f7596d6f95bfdd6131398.jpg',
      };
    return (
        <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.name}>{book.name}</Text> 
          <Text style={styles.isbn}>ISBN : {book.ISBN}</Text>
          <Text style={styles.author}>Author : {book.author}</Text>

          <Image source={{ uri: book.image }} style={styles.image} />

          <View style={styles.infoBox}>
              <Text style={styles.label}>Category </Text>
              <Text style={styles.value}> {book.category}</Text>
          </View>

          <View style={styles.infoBox}>
              <Text style={styles.label}>Condition </Text>
              <Text style={styles.condition}>{book.isConditionUsed ? 'Used' : 'New'}</Text>
          </View>

          <View style={styles.infoBox}>
              <Text style={styles.label}>Price </Text>
              <Text style={styles.value}>US$ {book.price}</Text>
          </View>

          <View style={styles.infoBox}>
              <Text style={styles.label}>Age Limit</Text>
              <Text style={styles.value}>{book.age_limit}+</Text>
          </View>

          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Contact Seller</Text>
          </TouchableOpacity>

          <View style={styles.descriptionBox}>
              <Text style={styles.label}>Description</Text>
              <Text style={styles.description}>{book.description}</Text>
            </View>

            </ScrollView>
            </View>

  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
      paddingTop: 30,
    },
    isbn: {
      fontSize: 14,
      color: '#555',
      marginBottom: 4,
    },
    name: {
      fontSize: 30,
      fontWeight: '700',
        textAlign: 'center',
        marginBottom: 8,
        color: '#1d3557',
    },
    author: {
      fontSize: 18,
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
      fontSize: 18,
      fontWeight: '600',
      color: '#333',
    },
    value: {
      fontSize: 18,
      color: '#555',
    },
    condition: {
        fontSize: 18,
        color: '#dc143c',
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
      fontSize: 18,
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

export default BookScreen;
