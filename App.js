import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Button, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { firestore, collection, addDoc, MESSAGES, serverTimestamp } from './firebase/Config';

import { QuerySnapshot, onSnapshot, orderBy, query } from 'firebase/firestore';
import { convertFirebaseTimeStampToJS } from './helpers/Functions';
//import { SafeAreaView, ScrollView } from 'react-native-web';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const q = query(collection(firestore, MESSAGES), orderBy('created', 'desc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tempMessages = [];

      querySnapshot.forEach((doc) => {
const messageObject = {
  id: doc.id,
  text: doc.data().text,
  created: convertFirebaseTimeStampToJS(doc.data().created)
}

        tempMessages.push(messageObject);
      });
      setMessages(tempMessages);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const save = async () => {
    const docRef = await addDoc(collection(firestore, MESSAGES), {
      text: newMessage,
      created: serverTimestamp()
    });
    setNewMessage('');
    console.log('Message saved');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {messages.map((message) => (
          <View style={styles.message} key={message.id}>
            <Text style={styles.messageInfo}>{message.created}</Text>
            <Text>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
      <TextInput placeholder='Send Message....' value={newMessage} onChangeText={text => setNewMessage(text)} />
      <Button title="Send" type="button" onPress={save} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  message: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
    marginLeft: 10,
    marginRight: 10
    
  },
  messageIngo: {
    fontSize: 8
  }
});
