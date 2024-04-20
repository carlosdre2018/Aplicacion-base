import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, Button, FlatList} from 'react-native';
import {Card, FAB} from 'react-native-paper';

function Home() {
    const [data, setData] = useState([])

    useEffect(()=>{
        console.log('datos:',data)
        },[data])

    useEffect(() => {
        console.log('antes del fetch::')

        fetch('https://9b7f-38-25-30-140.ngrok-free.app/get', {
            method: 'GET'
        })
        .then(resp => resp.json())
        .then(article => {
            setData(article)
        })
        .catch(function (error) {
            console.log("Hubo un problema con la petición Fetch:" + error.message);
        });

    }, [])

    const renderData = (item) => {
        return (
            <Card style= {styles.cardStyle} >
                <Text>{item.title}</Text>
                <Text>{item.body}</Text>
            </Card>
        )
    }
 
    return (
        <View style = {{flex:1}}>
            <FlatList 
                data = {data}
                renderItem = {({item}) => {
                    return renderData(item)
                }}
                keyExtractor={ item => `${item.id}`}
            />

            <FAB 
            style= {styles.fab}
            small={false}
            icon="plus"
            theme = {{colors: {accent: "green"}}}
            onPress = {() => console.log("Pressed")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  cardStyle: {
    margin: 10,
    padding: 10
  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  }
})

export default Home;