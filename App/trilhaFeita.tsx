import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function TrilhaFeita()  {

    return (
        <View style={styles.container}>
            <View />

            <View style={styles.middleContent}>
                <Image source={require('../aa-assets-images/pig.png')} />
                <View>
                    <Image source={require('../aa-assets-images/coins.png')} />
                </View>
                <View>
                    <Image source={require('../aa-assets-images/trilhaBloqueada.png')} />
                </View>
            </View>

            <View>
                <TouchableOpacity>
                    <Image source={require('../aa-assets-images/checkButton.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flex:1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'
        },

        middleContent: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }
})