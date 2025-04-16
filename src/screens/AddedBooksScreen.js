import { View, Image, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons'

const books = [
    {
      ISBN: '97804373565',
      name: 'Frankenstein',
      author: 'F. Scott Fitzgerald',
      category: 'Classics',
      price: 10.0,
      isConditionUsed: true,
      age_limit: 16,
      image: 'https://blog-cdn.reedsy.com/directories/gallery/235/large_0837bd13c2fb31d4b3ee904a0eaaf0af.jpg',
    },
    {
      ISBN: '9780061120084',
      name: 'Junior Year Bites',
      author: 'Harper Lee',
      category: 'Fiction',
      price: 8.0,
      isConditionUsed: false,
      age_limit: 3,
      image: 'https://blog-cdn.reedsy.com/directories/gallery/231/large_dd77074591fde734d9147ffaa936f4e1.jpg',
    },
    {
      ISBN: '9780451524935',
      name: 'Half A cup of Sand and Sky',
      author: 'George Orwell',
      category: 'Dystopian',
      price: 5.0,
      isConditionUsed: true,
      age_limit: 12,
      image: 'https://blog-cdn.reedsy.com/directories/gallery/232/large_c965f30130bbc034d036cea530f8c30c.jpg',
    },
  ];

const AddedBooksScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your Added Books</Text>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {books.map((book, index) => (
                    <View key={index} style={styles.card}>
                         <TouchableOpacity style={styles.editIcon}>
                            <Icon name = "create-outline" size = {20} color ="555"/>
                        </TouchableOpacity>
                        <Image source={{ uri: book.image }} style={styles.bookImage} />
                        <View style={styles.bookInfo}>
                            <Text style={styles.name}>{book.name}</Text>
                            <Text style ={styles.isbn}>ISBN {book.ISBN}</Text>
                            <Text style ={styles.author}>{book.author}</Text>
                            <Text style ={styles.details}>{book.category}</Text>
                            <View style={styles.textGap}>
                            <View style = {styles.column}>
                                    <Text style={styles.details}>US$ {book.price}{'\u2003\u2003\u2003\u2003'} </Text></View>
                                    <View style = {styles.column}>
                                    <Text style={styles.details}> Age : {book.age_limit}+{'\u2003\u2003\u2003\u2003\u2003'}</Text></View>
                                    <View style = {styles.column}> <Text style={styles.condition}>{book.isConditionUsed ? 'Used' : 'New'}</Text></View>
                            </View>
        </View>
           {/* <TouchableOpacity style={styles.editIcon}>
            <MaterialIcons name="edit" size={20} color="#333" />
          </TouchableOpacity>  */}
        </View>
      ))}
    </ScrollView>
    <TouchableOpacity style={styles.fab}>
      <Text style={styles.fabText}>+</Text>
    </TouchableOpacity>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingTop: 60,
  backgroundColor: '#fff',
},
header: {
  fontSize: 22,
  fontWeight: '700',
  paddingHorizontal: 16,
  marginBottom: 10,
  color: '#1d3557',
},
scrollContent: {
  paddingHorizontal: 16,
  paddingBottom: 100,
    },
card: {
  flexDirection: 'row',
  backgroundColor: '#fafafa',
  padding: 10,
  marginBottom: 12,
  borderRadius: 12,
  elevation: 1,
  alignItems: 'center',
    },
    column: {
        flex: 1,
        alignItems: 'center',
    },
textGap: {
    flexDirection: 'row',
    width: ' 100%',
    fontSize: 13,
    color: '#555',
    marginTop: 2,
    justifyContent: 'space-between',
    marginVertical: 8,
    },
bookImage: {
  width: 60,
  height: 90,
  borderRadius: 6,
  resizeMode: 'cover',
},
bookInfo: {
  flex: 1,
  marginLeft: 12,
},
isbn: {
  fontSize: 12,
  color: '#777',
},
name: {
  fontSize: 16,
  fontWeight: '600',
  color: '#1d3557',
},
author: {
  fontSize: 14,
  color: '#444',
},
details: {
    fontSize: 13,
    color: '#555',
  marginTop: 2,
    },
viewRow: {
        fontSize: 13,
        color: '#555',
      marginTop: 2,
        },
condition: {
        //fontSize: 13,
    color: '#dc143c',
    textAlign: 'center' ,
        //marginTop: 2,
},
editIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    padding: 5,
  },
fab: {
  position: 'absolute',
  bottom: 20,
  right: 20,
  backgroundColor: '#1d3557',
  width: 56,
  height: 56,
  borderRadius: 28,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 5,
},
fabText: {
  color: '#fff',
  fontSize: 28,
  fontWeight: 'bold',
  marginBottom: 2,
},
});

export default AddedBooksScreen;
