
import { Button } from 'native-base';
import React from 'react';
import { FlatList, SafeAreaView, Text, TextInput, View } from 'react-native';

const SalesCategoriesScreen = () => {

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
    <Button className="w-1/2 m-1 rounded-xl bg-gray-200 border border-gray-300 h-[130px] flex justify-center align-middle">
      <Text className="text-lg font-bold">{item.name}</Text>
    </Button>
  );


  return (
    <View style={styles.container}>

      <View className="flex flex-row w-full pt-10 pb-4">
        <SafeAreaView className="w-10/12 pl-5 my-auto flex flex-row">
          {/* <AntDesign name="search1" size={18} color="black" /> */}
          <TextInput
            className="rounded-full border border-gray-300 my-auto bg-slate-200 flex-1 px-3"
            placeholder='搜尋'
          />
        </SafeAreaView>
        <View className="w-2/12 flex flex-row pl-1 pr-2 justify-center">
          <Button className="w-1/2 bg-transparent p-0 m-0">
            <Text className="text-cyan-700 font-bold">取消</Text>
          </Button>
        </View>
      </View>


      <View style={styles.content}>
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
  },
};


export default SalesCategoriesScreen;

