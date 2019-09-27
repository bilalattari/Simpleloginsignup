import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import Inbox from './Inbox'
import Button from './Button'
import { StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            userName: '',
            email: '',
            password1: '',
            password2: '',
            passwordErr: ''
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" , backgroundColor : "#94ecf9" }}>
                <View style = {{justifyContent : "center" , alignItems : "center"}}>
                    <Text style = {{color : "#2ccce4" , fontSize : 18 , fontWeight : "bold"}}>
                        Sign Up
                    </Text>

                </View>
                <Inbox placeholder='Full Name'
                    onChange={(text) => { this.setState({ fullName: text }) }}
                    iconName='user' />
                <Inbox placeholder='User Name'
                    onChange={(text) => { this.setState({ userName: text }) }}
                    iconName='user' />
                <Inbox placeholder='User Email'
                    onChange={(text) => { this.setState({ email: text }) }}
                    iconName='envelope-o' />
                <Inbox placeholder='Password'
                    onChange={(text) => { this.setState({ password1: text }) }}
                    iconName='lock' secure={true} />
                <Inbox placeholder='Confirm Password'
                    onChange={(text) => { this.setState({ password2: text }) }}
                    iconName='lock' secure={true} />

                <Button btnText='Sign Up'
                    onBtnPress={() => {
                        this.setState({
                            email: '',
                            password: '',
                            userName: '',
                            fullName: '',
                            password2: ''
                        })
                    }}
                />

                {/* {
                        (this.props.isError === true) ? (
                            <ErrorMessage errorMessge={this.props.errorMessage}></ErrorMessage>
                        ) : null
                    } */}

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }} >
                    <TouchableOpacity
                        // onPress={() =>
                        //     // Actions.signIn()
                        // }
                    >
                        <Text style={{
                            color: 'white', fontWeight: 'bold', marginTop: 10
                        }}>Already have an account</Text>
                    </TouchableOpacity>

                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({

})
export default SignUp