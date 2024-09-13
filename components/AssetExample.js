import { Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


export default function AssetExample() {
  const [count, setCount] = useState(0);

  
  

  return (
    <View style={{flex:1}}>
      <View style={{flex:0.4,flexDirection:'row'}}>
        <View style={{flex:0.6,backgroundColor:'yellow'}}>
          <Image style={{height:"100%",width:"100%"}} source={require('../assets/book.png')} />
        </View>
        <View style={{flex:1,justifyContent:'space-around',paddingLeft:'2%'}}>
            <Text style={{fontSize:14,fontFamily:'bold'}}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={{fontSize:14,fontFamily:'bold'}}>Cung cấp bởi Tiki Trading</Text>
            <Text style={{fontSize:25,fontFamily:'bold',color:'red'}}>141.800d</Text>
            <Text style={{textDecorationLine: 'line-through',color:'gray'}}>145.000</Text>
            <View style={{flex:0.5,flexDirection:'row',}}>

    
        <TouchableOpacity style={{backgroundColor:'gray',width:20,height:22}} onPress={() =>{ setCount(count =>count - 1)}}>
          <Text style={{textAlign:'center'}}>-</Text>
        </TouchableOpacity>
        <Text style={{paddingLeft:'3%',paddingRight:'3%'}}>{count}</Text>
        
        <TouchableOpacity style={{backgroundColor:'gray',width:20,height:22}}  onPress={() =>{ setCount(count =>count + 1)}}>
          <Text style={{textAlign:'center'}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:88,height:22,marginLeft:'50px'}} >
          <Text style={{textAlign:'center',color:'blue',fontFamily:'bold',fontSize:18}}>Mua sau</Text>
        </TouchableOpacity>

      </View>
        </View>
      </View>
      <View style={{flex:1,flexDirection:'row'}}>

    
        
      </View>
    </View>
  );
}


