import React, {Component} from 'react'
import {View, Text, Button} from 'react-native';


class ClassHome extends Component {
    state = {
        name: 'Carlos Chavez'
    }

    render() {
        return (
            <View>
                <Text>Hello from Class</Text>
                <Text style={{paddingTop:20, fontSize: 20}}>{this.state.name}</Text>
                <Button title = "Click me" onPress = {() => this.setState({name: "This is a new text"})}/>
            </View>
        )
    }
}

export default ClassHome