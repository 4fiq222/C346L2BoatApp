import {Image, Text, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import React from "react";

const Boat = ({Name, descript, icon_name,poster}) => {
    return (
        <View>
            <Icon name = {icon_name} size={20}> <Text>{Name}</Text></Icon>
            <Text>{descript}</Text>
            <Image source={poster} style = {{width:300, height:300}}></Image>
        </View>
    );
}

export default Boat;
