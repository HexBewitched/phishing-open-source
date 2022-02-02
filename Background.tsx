import React from 'react';
import { Dimensions, Image, StyleSheet } from "react-native";

export default function Background(props: { url: string }) {
    return (
        <Image source={{ uri: props.url }} style={styles.background} resizeMode={"stretch"} />
    );
}


const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,


    }
});
