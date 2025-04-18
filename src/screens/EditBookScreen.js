import React, {useState, useRef, useMemo, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../Component/CustomButton';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/EditBookStyles';
import ImagePicker from 'react-native-image-crop-picker';

const EditBookScreen = () => {
  const navigation = useNavigation();

  const handleImagePick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setImage(image.path);
      })
      .catch(error => {
        console.log('Image pick cancelled', error);
      });
  };

  const handleAutoGenerate = () => {
    const generated = 'Auto Generated Description';
    setDescription(generated);
  };

  const [isbn, setIsbn] = useState('');
  const [name, setName] = useState('');
  const [author, setAuther] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [ageLimit, setAgeLimit] = useState('');
  const [description, setDescription] = useState('');
  const [condition, setCondition] = useState('');
  const [image, setImage] = useState('https://www.w3.org/Icons/w3c_home.png');

  return (
    <View style={{flex: 1, padding: 16}}>
      <Text style={styles.title}>Edit details</Text>

      {/* <ImageBackground source={{uri: image}} style={{height: 100, width: 100, borderRadius: 30, alignItems: 'center', justifyContent: 'center'}}>
        <View>
          <Icon
            name="camera"
            size={35}
            color="#fff"
            onPress={handleImagePick}
          />          
        </View>
      </ImageBackground> */}

      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={handleImagePick}>
          <ImageBackground
            source={{uri: image}}
            style={styles.image}
            imageStyle={{borderRadius: 30}}>
            <Icon name="camera" size={35} color="#fff" />
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="ISBN"
        value={isbn}
        onChangeText={setIsbn}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Author"
        value={author}
        onChangeText={setAuther}
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Age Limit"
        value={ageLimit}
        onChangeText={setAgeLimit}
      />

      <View style={styles.inputWithButton}>
        <TextInput
          style={styles.flexInput}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <TouchableOpacity
          style={styles.autoButton}
          onPress={handleAutoGenerate}>
          <Text style={styles.autoButtonText}>Auto</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Condition"
        value={condition}
        onChangeText={setCondition}
      />

      <CustomButton
        title="Update Book"
        onPress={() => navigation.navigate('TabNavigator')}
      />
    </View>
  );
};

export default EditBookScreen;
