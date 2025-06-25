import { Image, StyleSheet,Text, View } from "react-native";

export default function Index() {
  return (
    
    <View
    style={styles.container}>

        <Text style={styles.text1}>COLLEGE OF COMPUTING AND INFORMATION SCIENCES</Text>
      
      <Image source={require('@/assets/images/image2.png')} style={styles.image1}>

      </Image>
    
    <Text style={styles.text1}>Developed By</Text>
    <Text style={styles.footertxt}>MIEVANJOY T. MORDEN</Text>
   
    
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
   },
   
   text1:{
    fontFamily:'Arial',
    fontSize:20,
    color: 'black',
    fontWeight:'bold',
    textAlign:'center'
    
   },

    image1:{
      width:300,
      height:400,
      borderRadius: 30,
      margin:20,
    },


    footertxt:{
      position:'absolute',
      bottom:30,
      width:'70%',
      textAlign:'center',
      fontSize:18,
      fontWeight:'bold'

    }
})