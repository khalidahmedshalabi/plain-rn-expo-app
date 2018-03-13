import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Platform, TextInput } from 'react-native';

export default class LoginScreen extends React.Component {

    state = {
        username: ''
    }

    loginUser = () => {
        if(this.state.username.length < 3)
            alert("You must enter a username with a minimum of 3 characters");
        else
            this.props.navigation.navigate('Tabs', { });
    }

    getDeviceTypeAsString = () => {
        return (
            (Platform.OS === 'ios') ? 'iOS' : 'Android'
        )
    }

    static navigationOptions = {
        header:null
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex:0.2 }}>
                    <TextInput
                        underlineColorAndroid='transparent'
                        placeholder='Enter your username'
                        placeholderTextColor='#CCCCCC'
                        autoGrow={false}
                        multiline={false}
                        autoFocus={false}
                        style={styles.textInput}
                        onChangeText={ (new_text) => this.setState( {username: new_text}) }
                        onSubmitEditing={(event) => this.loginUser() } />

                    <Text>Current username length {this.state.username.length}</Text>
                </View>

                <View style={{ flex:0.5, backgroundColor:'#B63FF2' }}>
                    <Text style={{ color:'white' }}>
                    Your current device operating system is { this.getDeviceTypeAsString() }
                    </Text>
                </View>

                <View style={{ flex:0.3 }}>
                    <TouchableOpacity
                        style={{ backgroundColor:'#9B1ADB', borderRadius:13, padding:10, margin:10 }}
                        onPress={ () => this.loginUser() }>

                    <Text style={{ color:'white' }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  textInput: {
        flex: 1,
        color: '#B63FF2',
        padding: 9,
        margin:9,
        borderRadius: 4,
        backgroundColor: 'transparent',
        borderBottomColor: '#B63FF2',
        borderBottomWidth: 0.7
    },
});
