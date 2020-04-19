import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function (props) {
    const { friend, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: friend.picture.thumbnail }} />
                <View style={styles.info}>
                    <Text style={styles.text}>
                        {friend.name.first} {friend.name.last}
                    </Text>
                    <Text style={styles.smallText}>
                        {friend.email}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 15
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    text: {
        fontSize: 20
    },
    smallText: {
        fontSize: 16,
        fontWeight: '100'
    }
});