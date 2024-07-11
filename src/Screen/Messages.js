import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppHeader from '../components/AppHeader';
import { colors } from '../utils/styles';

const Messages = ({ navigation, route }) => {
  const { propertyId, landlordId } = route.params;  // Access parameters from route
  const dispatch = useDispatch();
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [token, setToken] = useState(null);  // State to hold the token

  // Fetch token from AsyncStorage
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const savedToken = await AsyncStorage.getItem('userToken');
        if (savedToken) {
          setToken(savedToken);
        }
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchToken();
  }, []);

  // handle message to send on database 
  const sendMessage = async () => {
    if (message && token) {
      const newMessage = {
        senderId: user._id,
        receiverId: landlordId,
        propertyId: propertyId,
        message: message,
      };

      try {
        await axios.post('http://192.168.31.41:5000/api/v1/message', newMessage, {
          headers: {
            'Authorization': `Bearer ${token}`,  // Include the token in the request headers
            'Content-Type': 'application/json',
          }
        });
        setMessages([...messages, newMessage]);
        setMessage('');
      } catch (error) {
        console.error('Error sending message:', error.response ? error.response.data : error.message);
      }
    } else {
      console.error('Message or token is missing');
    }
  };

  // console.log("Login user", user);
  // console.log("property id", propertyId);
  // console.log("landlord id", landlordId);

  return (
    <>
      <AppHeader
        title={"Messenger"}
        headerBg={colors.color1}
        back={true}
        iconColor={"#fff"}
        navigation={navigation}
        right="more-vertical"
        rightFunction={() => console.log("right")}
      />
      <View style={styles.container}>

        <FlatList
          data={messages}
          keyExtractor={(item) => item?._id}  // Ensure each key is unique and of type string
          renderItem={({ item }) => (
            <View style={styles.messageContainer}>
              <Text style={styles.sender}> {user?.name}:</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
          )}
        />
        <TextInput
          style={styles.input}
          placeholder='Type a message'
          value={message}
          onChangeText={setMessage}
        />
        <Button title='Send' onPress={sendMessage} />
      </View>
    </>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  messageContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  sender: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  message: {
    flexShrink: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
  },
});
