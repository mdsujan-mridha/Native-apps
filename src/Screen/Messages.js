import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const Messages = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState('');
  // handle message to send on database 
  const sendMessage = async () => {
    if (message) {
      const newMessage = {
        senderId: userId,
        receiverId: "09484249845jf94u",
        propertyId: "j8ehc033473f8uy4",
        message: message,
      };

      try {
        await axios.post('http://your-backend-url/messages', newMessage);
        setMessages([...messages, newMessage]);
        setMessage('');
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.sender}> Sujan :</Text>
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
  )
}

export default Messages

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
})