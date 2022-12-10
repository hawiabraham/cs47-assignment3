import { StyleSheet, View, Image, Text} from "react-native";
import { Themes } from "../assets/Themes";
import millisToMinutesAndSeconds from '../utils/millisToMinutesAndSeconds';


export default function Song({title, duration, album, artist, index, id}) {
    return (
            <View style={styles.track}>
                <View style={styles.trackContainer}>
                    <Text style={styles.trackText}>{index}</Text>
                </View>

                <Image source={album.images[1]} style={styles.albumContainer}>
                </Image>

                <View style={styles.infoContainer}>
                    <Text style={styles.titleText} numberOfLines={1}>{title}</Text>
                    <Text style={styles.artistText} numberOfLines={1}>{artist[0].name}</Text>
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.titleText} numberOfLines={1}>{album.name}</Text>
                </View>

                <View style={styles.minuteContainer}>
                    <Text style={styles.albumText} numberOfLines={1}>{millisToMinutesAndSeconds(duration)}</Text>
                </View>

            </View>
    )

};

const styles = StyleSheet.create({
    track: {
      backgroundColor: Themes.colors.background,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: 10,
      width: '100%'
    }, 
    trackContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40
    },
    trackText: {
        color: Themes.colors.gray
    },
    titleContainer: {
        width: '30%',
    },
    titleText: {
        color: Themes.colors.white
    },
    artistText: {
        color: Themes.colors.gray
    },
    albumContainer: {
        width: 50,
        height: 50,
        marginRight: 8
    },
    minuteContainer: {
        width: '20%'
    },
    infoContainer: {
        width: '30%'
    },
    albumText: {
        color: Themes.colors.white,
    }
  });
  