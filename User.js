import React, { Component } from 'react';
import {View,Text} from 'react-native';

class User extends Component {
    constructor(id,name){
        this.id = id;
        this.name = name; 
    }

    render() {
        return (
            <View>
                <Text>{this.id}</Text>
                <Text>{this.name}</Text>
            </View>
        );
      }
}

export default User;
