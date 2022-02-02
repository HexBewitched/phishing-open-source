import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Background from './Background';

export default function App() {
    const [page, setPage] = React.useState(0);
    const onClick = () => {
        setPage((page + 1) % 8);

    }

    if (page === 0) {
        return (
            <View style={styles.container}>
                <Background url={"https://yt3.ggpht.com/a-/AAuE7mAzzkLVaRzp_1cv9cX9oY1MrQR5Du5J5Jk0QQ=s900-mo-c-c0xffffffff-rj-k-no"} />
                <Text style={styles.text}>Tap for 100000000000000000000000 free bobux</Text>
                <TouchableOpacity style={styles.button} onPress={onClick}>
                    <Text style={styles.buttonText}>Uhhh yes duhhhhh🙄🙄</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        );
    }
    else if (page === 1) {
        return (
            <View style={styles.container}>
                <Background url={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipartmag.com%2Fimages%2Fcartoon-robber-clipart-25.png&f=1&nofb=1"} />
                <Text style={styles.text}>We Will Take Your Money</Text>
                <TouchableOpacity style={styles.button} onPress={onClick}>
                    <Text style={styles.buttonText}>Oh No</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        );
    } else if (page === 2) {
        return (
            <View style={styles.container}>
                <Background url={"https://media.makeameme.org/created/that-moment-you-qi2jww.jpg"} />
                <Text style={styles.text}>It's too late</Text>
                <TouchableOpacity style={styles.button} onPress={onClick}>
                    <Text style={styles.buttonText}>Pls No</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        );
    } else if (page === 3) {
        return (
            <View style={styles.container}>
                <Background url={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiles.123freevectors.com%2Fwp-content%2Foriginal%2F33483-loudly-crying-face-emoji-icons-vector.jpg&f=1&nofb=1"} />
                <Text style={styles.text}>We stole your credit Card Information when you downloaded this app</Text>
                <TouchableOpacity style={styles.button} onPress={onClick}>
                    <Text style={styles.buttonText}>*Cries*</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        );
    } else if (page === 4) {
        return (
            <View style={styles.container}>
                <Background url={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.i0RTPRaXGurvbQHtGSwkLwHaE8%26pid%3DApi&f=1"} />
                <Text style={styles.text}>We also took your bitcoin</Text>
                <TouchableOpacity style={styles.button} onPress={onClick}>
                    <Text style={styles.buttonText}>
                        whaaaaatt???????
                    </Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        );
    } else if (page === 5) {
        return (
            <View style={styles.container}>
                <Background url={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc8.alamy.com%2Fcomp%2FTYFEEJ%2Fanonymous-hooded-computer-hacker-portrait-on-computer-code-background-TYFEEJ.jpg&f=1&nofb=1"} />
                <Text style={styles.text}>We took your Ip</Text>
                <TouchableOpacity style={styles.button} onPress={onClick}>
                    <Text style={styles.buttonText}>
                        Sadge
                    </Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        );
    } else if (page === 6) {
        return (
            <View style={styles.container}>
                <Background url={"https://media.istockphoto.com/photos/cool-grandma-stands-for-her-right-picture-id526199351?k=6&m=526199351&s=612x612&w=0&h=dazpU0O1fvKO7hdtcdD2wpsAnuWoCkWHPoHYtVy54sc="} />
                <Text style={styles.text}>We stole your GRANDMA!!!</Text>
                <TouchableOpacity style={styles.button} onPress={onClick}>
                    <Text style={styles.buttonText}>
                        *Dies of Death*
                    </Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        );
    } else if (page === 7) {
        return (
            <View style={styles.container}>
                <Background url={"https://i.imgur.com/4niQAuE.jpg"} />
                <Text style={styles.text}>Your MAC adress is 8c:8c:aa:59:c1:19</Text>
                <TouchableOpacity style={styles.button} onPress={onClick}>
                    <Text style={styles.buttonText}>
                        *Austin gets booted offline*
                    </Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: "#dddddd77",
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    buttonText: {
        textAlign: "center",
        fontSize: 30,
        color: "#8f00ff"
    },
    text: {
        textAlign: "center",
        fontSize: 22,
        color: "#ffffff",
        fontWeight: "bold",
        shadowColor: "black",
        shadowRadius: 3,
        shadowOpacity: 1,
        shadowOffset: {
            height: 2,
            width: 0
        }
    }
});
