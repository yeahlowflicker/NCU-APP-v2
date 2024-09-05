
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button } from 'native-base';
import React from 'react';
import { Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const SalesItemDetailsScreen = () => {

  const carouselItems = [
    {
        title:"Item 1",
        text: "Text 1",
    },
    {
        title:"Item 2",
        text: "Text 2",
    },
    {
        title:"Item 3",
        text: "Text 3",
    },
    {
        title:"Item 4",
        text: "Text 4",
    },
    {
        title:"Item 5",
        text: "Text 5",
    },
  ]


  const _renderItem = ({item, index}) => {
    return (
      <View style={{
        backgroundColor:'gray',
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginRight: 25, }}
      >
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  }

  return (

    
    <View className="h-full w-full flex flex-col px-5 bg-white">

      <View className="w-full pt-8 flex flex-row mb-5">
        <Button className="bg-transparent absolute left-0 top-6">
          <Ionicons name="arrow-back" size={28} />
        </Button>
        <Text className="w-full mx-auto text-center font-bold text-xl">出售</Text>
      </View>

      <View className="p-0 m-0 w-full">
        <Carousel
          data={carouselItems}
          renderItem={_renderItem}
          sliderWidth={400}
          itemWidth={400}
        />
      </View>
        
      <View className="py-5">
        <Text className="text-xl font-bold">商品名稱</Text>
        <Text className="text-xl font-bold">$19.99</Text>

        <Button className="bg-transparent w-fit absolute right-0 bottom-2">
          <Ionicons name="bookmark" size={24} />
        </Button>
      </View>

      <View className="w-full border border-gray-100"></View>

      <View className="p-0 m-0 flex flex-row h-fit">
        
        <View className="w-1/2 py-5 flex flex-col justify-center">
          <Text className="text-center text-gray-400">標籤</Text>
          <Button className="bg-transparent">
            <Text className="text-center underline text-cyan-600 text-lg">課業文具</Text>
          </Button>
        </View>

        <View className="border border-gray-100 my-3"></View>

        <View className="w-1/2 py-5 flex flex-col justify-center">
          <Text className="text-center text-gray-400">前往賣家小舗</Text>
          <Button className="bg-transparent">
            <Text className="text-center underline text-cyan-600 text-lg">賣家姓名</Text>
          </Button>
        </View>
      </View>

      <View className="w-full border border-gray-100"></View>

      <View style={styles.container} className="bg-cyan-300 p-0 m-0 h-fit py-5">
        <View className="flex flex-row my-2">
            <Text className="border-r-2 border-gray-500 pr-3 mr-3 text-gray-400">上架</Text>
            <Text className="">昨天 18:06</Text>
        </View>
        <View className="flex flex-row my-2">
            <Text className="border-r-2 border-gray-500 pr-3 mr-3 text-gray-400">狀態</Text>
            <Text className="">全新</Text>
        </View>
        <View className="flex flex-row my-2">
            <Text className="border-r-2 border-gray-500 pr-3 mr-3 text-gray-400">地點</Text>
            <Text className="">後門</Text>
        </View>
        <View className="flex flex-row my-2">
            <Text className="border-r-2 border-gray-500 pr-3 mr-3 text-gray-400">描述</Text>
            <Text className="">原價 $450，用一學期</Text>
        </View>
      </View>


      <Button className="rounded-full bg-cyan-600 mx-2 w-full border border-cyan-700 mb-5">
          <Text className="text-white text-base font-bold">
            <Ionicons name="chatbubble-outline" size={18} color="white" /> 聯絡賣家
          </Text>
      </Button>

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


export default SalesItemDetailsScreen;

