import { StatusBar } from 'expo-status-bar';
import { TextInput, Image,StyleSheet, Text, View, ScrollView, Button, Switch } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title='Click me!'
        onPress={()=>{
            console.log('Button Clicked!')
        }}
         />
         <Switch value={true} />
         <Switch value={false} />
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <ScrollView>
        <Image source={require("./cute-puppy.jpeg")} style={styles.local_image} />
        <Image source={{uri: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS"}} style={styles.url_image} />
        <TextInput placeholder='내용을 입력해주세요' />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  local_image: {
    width:100,
    height:100
  },
  url_image: {
    width:200,
    height:200
  }

});
