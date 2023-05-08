
import React,{useContext} from 'react'
import {ProductsContext } from '../context/ProductsProvider'
import {Appbar, Card, ProgressBar, MD3Colors, Button} from 'react-native-paper';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    Alert
  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';


const UserList = () => {
    const { products,handleDelete } = useContext(ProductsContext);
    const navigation=useNavigation()
  return (
    <FlatList
            data={products}
            ListEmptyComponent={() => {
              return (
                <View>
                  <ProgressBar progress={0.5} color={MD3Colors.error50} />
                  <Text>Data Not Found</Text>
                </View>
              );
            }}
            renderItem={({item}) => {
              return (
             <TouchableOpacity onPress={()=>navigation.navigate('DetailProduct',{item:item})} >
                 <Card.Title
                
                title={item.title}
                subtitle={item.description}
                left={props => (
                  <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: `${item.thumbnail}`,
                    }}
                  />
                )}
                right={props => <View><Text>{item.price} $</Text>
                
               <TouchableOpacity onPress={()=>handleDelete(item.id)}>

               <Icon name='trash' size={20} color='red' />


               </TouchableOpacity>
                </View>}
              />
             </TouchableOpacity>
              );
            }}
          />
  )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
      },
})

export default UserList

