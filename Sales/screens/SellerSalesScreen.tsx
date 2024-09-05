import Ionicons from '@expo/vector-icons/Ionicons';

import { Button } from 'native-base';
import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';

const SellerSalesScreen = () => {

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
    <View className="w-1/2 rounded-md border border-gray-300 h-64">

      <Image className="w-full h-3/4 bg-slate-300"></Image>

      <View className="flex flex-row w-full h-1/4">
        <View className="w-3/5 py-2 px-3">
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
        </View>

        <Button className="w-2/5 bg-transparent">
          <Ionicons name="bookmark" size={24} />
        </Button>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View className="h-[800px] w-[800px] bg-cyan-600 rounded-full -translate-y-[600px] -translate-x-[195px] -mb-[625px]">

        <View className="mx-auto mt-auto mb-[7vh] flex flex-row">
          <Button className="bg-transparent absolute -left-24 -top-8">
            <Ionicons name="arrow-back" size={28} color="white" />
          </Button>
          
          <Image className="rounded-full bg-gray-500 w-16 h-16 mr-5"></Image>
          <View className="flex flex-col">
            <Text className="text-white text-xl font-bold">某某某的小舗</Text>
            <Text className="text-yellow-400 text-lg">系級</Text>
          </View>
        </View>

      </View>

      <View className="flex flex-row mx-auto mb-5">
        <Button className="rounded-full bg-cyan-500 mx-2 w-36">
          <Text className="text-white text-lg font-bold"><Ionicons name="chatbubble-outline" size={18} color="white" /> 私訊賣家</Text>
        </Button>
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


      <View style={styles.content} className="w-full -translate-x-1">
        <FlatList
          data={productData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2} // Number of columns in the grid
          columnWrapperStyle={styles.row} // Additional style for the row
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
    gap: 8,
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
export default SellerSalesScreen;

