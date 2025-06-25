import { Image, StyleSheet,Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image source={require('@/assets/images/image1.jpg')} style={styles.image1}></Image>
      <Text style={styles.text1}>Mark Zuckerberg</Text>
      <Text style={styles.text2}>CEO Meta</Text>
    </View>
  );
}
const styles= StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
   },
   image1:{
    width:300,
    height:480,
    borderRadius: 30,
    margin:20,
   },
    text1:{
    fontFamily:'Arial',
    fontSize:19,
    color: 'black',
    fontWeight:'bold'
   },
   text2:{
    fontFamily:'Arial',
    fontSize:18,
   },

})