import { StyleSheet, Text, View,Image} from 'react-native';
import { AntDesign,FontAwesome,FontAwesome5,Ionicons,Foundation } from '@expo/vector-icons';
import { TouchableOpacity,TextInput} from 'react-native';
import { useState } from 'react';
import Post from './Post';

export default function App() {
  const [post, setPost] = useState('');
  const [list, setList] = useState([ ]);

  function transform(createpost) {
    return <Post post={createpost.post} />
  }

  function addpost(){
    setList([{post: post}, ...list])
    setPost('')
    
  }
  return (
    <View style={styles.container}>
             
      <View style={styles.fb}>
        <Text style={{fontSize:20,color:'blue',fontWeight:'bold'}}> Facebook</Text>
          <View style={{width:'50%'}}/> 
          <TouchableOpacity>
          <AntDesign name="search1" size={23} color="black" /> 
          </TouchableOpacity>
          <TouchableOpacity>
             <AntDesign name="bars" size={23} color="black" />   
             </TouchableOpacity>
                 </View>
                 <View style={styles.fb}>
                 <TouchableOpacity>
                   <FontAwesome name="home" size={23} color="blue" />
                   </TouchableOpacity>
                   <TouchableOpacity>
                      <FontAwesome5 name="user-friends" size={23} color="#999" />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <AntDesign name="wechat" size={23} color="#999" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                         <Ionicons name="notifications-circle-outline" size={23} color="#999" />
                         </TouchableOpacity>
                         <TouchableOpacity>
                            <Foundation name="play-video" size={23} color="#999" />
                            </TouchableOpacity>

                 </View>


      <View style={styles.post}>
        <View style={styles.pic_View}>
          <Image
          style={styles.profile}
          source={require('./mushroom.png')}
           />

           <View style={styles.details}>
             <Text style={styles.name}>Bubuskie Moorosi</Text>
             <View style={{flexDirection:'row', alignItems:'center'}}>
               <Text style={styles.time}>3 hours Ago</Text>
               <FontAwesome5 name="globe-americas" size={20} color="gray" />
             </View>

           </View>
        </View>
        <Text style={styles.Advert}>WELCOME TO MY BIO</Text>
        <Text style={styles.sloggen}>#GINKO INK DOING NICE THINGS FOR NICE PEOPLE LIKE YOU!  PLEASE FOLLOW OUR PAGE</Text>

      </View>
         <View style={{width:'95%',backgroundColor:'#fff',height:150,padding:8,marginBottom:5 }}>

            <TextInput style={styles.input} value={post} placeholder={"create post"} onChangeText={setPost} />

                    <TouchableOpacity onPress={addpost}>
                      
               <View style={{width:'100%',backgroundColor:'blue',alignItems:'center', marginTOp:10}}>
             <Text style={{color:'#fff',fontSize:20, fontWeight:'bold'}}>Post</Text>
          </View>
          </TouchableOpacity>
          
         </View>

        <Text style={{margin:10}}> {list.map(item => transform(item))}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  fb:{
    backgroundColor:'#fff',
    flexDirection: 'row',
    justifyContent:'space-between',
    width:'100%',
    padding:10,
  },
 
  
  post:{
    backgroundColor:'#fff',
    width:'95%',
    height:170,
    marginTop:10,
    
  },
  profile:{
    height:50,
    width:50,
    margin:5,
    borderRadius:30,
  },
  pic_View:{
    flexDirection:'row',
  },
  name:{fontSize:13,
    fontWeight:'bold',
    marginTop:7,
    marginLeft:2,
  },
  time:{
    fontSize:13,
    color:'gray',
    marginRight:10,
    marginLeft:2,
  },
   Advert:{
     color:'black',
     fontSize:13,
     fontWeight:'bold',
     margin:5,
   },
   sloggen:{
     fontSize:14,
     color:'#1565C0',
     margin:5,
     },

     input:{
      width:'100%',
      height:100, borderWidth:1,
      borderRadius:5, marginBottom:10,
      padding:30,

     }
     
    
 
});
