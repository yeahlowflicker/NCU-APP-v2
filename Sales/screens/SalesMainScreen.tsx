import { Octicons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Button } from 'native-base';
import React from 'react';
import { FlatList, Image, SafeAreaView, Text, TextInput, View } from 'react-native';

const SalesMainScreen = () => {

  const productData = [
    { id: '1', name: 'Product 1', price: '$19.99' },
    { id: '2', name: 'Product 2', price: '$29.99' },
    { id: '1', name: 'Product 1', price: '$19.99' },
    { id: '2', name: 'Product 2', price: '$29.99' },
    { id: '1', name: 'Product 1', price: '$19.99' },
    { id: '2', name: 'Product 2', price: '$29.99' },
    { id: '1', name: 'Product 1', price: '$19.99' },
    { id: '2', name: 'Product 2', price: '$29.99' },
    { id: '1', name: 'Product 1', price: '$19.99' },
    { id: '2', name: 'Product 2', price: '$29.99' },
    { id: '1', name: 'Product 1', price: '$19.99' },
    { id: '2', name: 'Product 2', price: '$29.99' },
    { id: '1', name: 'Product 1', price: '$19.99' },
    { id: '2', name: 'Product 2', price: '$29.99' },
    // Add more products as needed
  ];

  const renderItem = ({ item }) => (
    <View className="w-4/5 rounded-xl border border-gray-300 my-3 mx-auto h-96">

      <Image className="w-full h-4/5 bg-slate-300 rounded-t-lg"></Image>

      <View className="flex flex-row w-full h-1/5">
        <View className="w-full h-full justify-center py-2 px-3 flex flex-col align-middle">
          <Text className="text-lg font-bold">{item.name}</Text>
          <Text className="text-cyan-800">{item.price}</Text>
        </View>

        <Button className="bg-transparent absolute bottom-0 right-0">
          <Ionicons name="bookmark" size={24} />
        </Button>
      </View>
    </View>
  );


  return (
    <View style={styles.container}>

      <View className="flex flex-row w-full pt-10 pb-4">
        <SafeAreaView className="w-4/5 pl-5 my-auto flex flex-row">
          {/* <AntDesign name="search1" size={18} color="black" /> */}
          <TextInput
            className="rounded-full border border-gray-300 my-auto bg-slate-200 flex-1 px-3"
            placeholder='搜尋'
          />
        </SafeAreaView>
        <View className="w-1/5 flex flex-row pl-1 pr-2">
          <Button className="w-1/2 bg-transparent p-0 m-0">
            <Octicons name="person" size={22} color="black" />
          </Button>
          <Button className="w-1/2 bg-transparent p-0 m-0">
            <Ionicons name="chatbubble-outline" size={22} color="black" />
          </Button>
        </View>
      </View>

      <View className="flex flex-row mx-auto">
        <Button className="rounded-full bg-cyan-600 mx-2 w-24 border border-cyan-700">
          <Text className="text-white text-base font-bold">收購</Text>
        </Button>
        <Button className="rounded-full bg-transparent mx-2 w-24 border border-cyan-700">
          <Text className="text-black text-base font-bold">出售</Text>
        </Button>
        <Button className="rounded-full bg-transparent mx-2 p-0 w-24 border border-cyan-700">
          <Text className="text-black text-base font-bold">租借</Text>
        </Button>
      </View>


      <View style={styles.content}>
        <FlatList
          data={productData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={1} // Number of columns in the grid
          contentContainerStyle={styles.content}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    padding: 10,
  },
  headerCard: {
    borderRadius: 10,
    padding: 20,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: 'blue',
  },
  halfCircle: {
    width: 50,
    height: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: 'blue',
    position: 'absolute',
    top: 0,
    right: '45%',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    marginRight: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  button: {
    margin: 5,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  content: {
    padding: 10,
  },
  card: {
    width: '50%',
    borderRadius: 1,
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 5,
  },
  cardImage: {
    height: 200, // Adjust as needed
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 10,
  },
  itemName: {
    fontWeight: 'bold',
  },
  itemPrice: {
    marginTop: 5,
    color: 'grey',
  },
  saveButton: {
    marginLeft: 'auto',
  },
  row: {
    justifyContent: 'space-between',
    marginVertical: 10,
  },
};
/*const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    padding: 10,
  },
  headerCard: {
    backgroundColor: 'blue',
    padding: 20,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  halfCircle: {
    width: 50,
    height: 20,
    backgroundColor: 'blue',
    position: 'absolute',
    top: 0,
    right: '45%',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    marginRight: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  button: {
    margin: 5,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  content: {
    padding: 10,
  },
  card: {
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 5,
  },
  cardImage: {
    height: 200, // Adjust as needed
    width: null,
    flex: 1,
  },
  itemName: {
    fontWeight: 'bold',
  },
  itemPrice: {
    marginTop: 5,
    color: 'grey',
  },
  saveButton: {
    marginLeft: 'auto',
  },
};
*/
export default SalesMainScreen;

