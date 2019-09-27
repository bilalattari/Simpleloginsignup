import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import Button from './Button'
import { StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';


class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#94ecf9" }}>
                <Button btnText='Sign In' onBtnPress={() => {
                   Action.menu()
                }} />

            </View>
        )
    }
}

const styles = StyleSheet.create({

})
export default Home