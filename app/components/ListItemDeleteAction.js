import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ListItemDeleteAction({ onPress }) {
    return (
        
            <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
                <MaterialCommunityIcons
                name="trash-can"
                size={35}
                color={colors.white}
                />
            </TouchableWithoutFeedback>
        

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        flex: 1,
        width: 70,
        justifyContent: "center",
        alignItems: "center"
        
    }
})

export default ListItemDeleteAction;