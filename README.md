# react-native-cocoalert 
A customizable alert component for React Native projects. You can display 4 types of messages (Info,Error,Warning and Success)

## Installation

You can install this package using npm or yarn:
```
npm install react-native-cocoalert
```
or
```
yarn add react-native-cocoalert
 ```



## Usage 

```javascript
import CocoAlert from 'react-native-cocoalert';

 <CocoAlert
visible={true}
type={'error'}
title={'Title'}
message={'Message'}
onClose={() => {
//other actions
}}
/>
```
## Example Usage

```Javascript
import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
// import CocoAlert from "../utils/CocoAlert";
import CocoAlert from "react-native-cocoalert/CocoAlert";

const TestCocoAlert = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState("Message")
    const [type, setType] = useState("");
    const [title, setTitle] = useState("Title")


    return (
        <View style={styles.container}>
            <Text style={styles.text} onPress={() => {
                setType("info")
                setShowAlert(true)
            }}>Info</Text>
            <Text style={styles.text} onPress={() => {
                setType("warning")
                setShowAlert(true)

            }}>Warning</Text>
            <Text style={styles.text} onPress={() => {
                setType("success")
                setShowAlert(true)

            }}>Success</Text>
            <Text style={styles.text} onPress={() => {
                setType("error")
                setShowAlert(true)

            }}>Error</Text>

            <CocoAlert
                visible={showAlert}
                type={type}
                title={title}
                message={message}
                onClose={() => {
                    setShowAlert(false)
                }}
            />

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        backgroundColor: '#000',
        padding: 10,
        textAlign: 'center',
        color: 'white',
        margin: 10
    },
});

export default TestCocoAlert;
```

## Properties
  | Property      | Type    | Description          |
| ------------- | ------- | --------------- |
| ```type```    | ```string```  | Specifies the type of alert. Values are ```info```,```error```,```success``` or ```warning```|
| ```title```   | ```string```  | The title of the alert ```optional```         |
| ```message```    | ```string``` | Display message |
| ```visible```    | ```boolean```  | Show alert with ```true``` or hide alert with ```false```          |
| ```onClose```   | ```function``` | You can close the alert here and any additional operations afterwards |





