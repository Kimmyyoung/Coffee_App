import React, { useState } from "react";
import { View, Text,Button, Switch, TextInput} from "react-native";

const StateWithFunctionalComponent = ()=>{
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(false);
    const [name, setName] = useState("");

    return (
        <View>
            <Text>You clicked {count} times</Text>
            <Button title="Clicked Me!" onPress={()=>{setCount(count+1)}} />

            <Switch value={isOn} onValueChange={(v)=>{
                setIsOn(v);
            }} />

            <TextInput value={name} onChangeText={(v)=>{setName(v)}} />
        </View>
    )
}

export default StateWithFunctionalComponent;
