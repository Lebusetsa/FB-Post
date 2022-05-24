import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { MaterialIcons,EvilIcons,AntDesign  } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


export default function Post({post}) {
    const [like, setlike]= useState(0);
    function likepost(){
        setlike(like+1);
    }
  return (
    <View style={styles.container}>
      <Text >{post}</Text>
      <View style={{flexDirection:'row',width:'40%', justifyContent:'space-between',marginTop:25}}>
         <Text> {like}</Text>
          <TouchableOpacity onPress={likepost}>
             <MaterialIcons name="favorite" size={24} color="red" />
                </TouchableOpacity>
                  <TouchableOpacity>
                    <EvilIcons name="comment" size={24} color="gray" />
                </TouchableOpacity>
              <TouchableOpacity>
          <AntDesign name="sharealt" size={24} color="black" />
     </TouchableOpacity>

      </View>


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:100, 
        borderWidth:1,
        borderRadius:5, 
       margin:10,
        backgroundColor:'#fff',
        padding:10,
        
    }
})