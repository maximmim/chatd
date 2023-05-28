import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

function ChatListScreen() {
  const [items, setItems] = useState([]);
  const navigation = useNavigation()
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://644ab0e4a8370fb32155be44.mockapi.io/users');
      setItems(response.data);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const handleChatPress = (chatId) => {
    
    console.log('Выбран чат с ID:', chatId);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => {
        navigation.navigate('Chat', { id: item.id ,name: item.name});
      }}
    >
      <Text style={styles.chatName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  listContent: {
    paddingVertical: 10,
  },
  chatItem: {
    
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 20,
    
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ChatListScreen;
