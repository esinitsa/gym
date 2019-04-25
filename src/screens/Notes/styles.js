import { StyleSheet, Dimensions } from 'react-native';

export const DEVICE_WIDTH = Dimensions.get("window").width;
export const DEVICE_HEIGHT = Dimensions.get("window").height;
export default StyleSheet.create({
    header: {
        borderBottomColor: "#f5f4f5",
        borderBottomWidth: 0,
        backgroundColor: "transparent"
    },
    leftHeader: {
        paddingLeft: 15
    },
    leftHeaderText: {
        fontSize: 25,
        fontWeight: "700"
    },
    profileIconHeader: {
        paddingLeft: 15,
        paddingRight: 15
    },
    noteTitle: {
        fontSize: 22,
        color: "#086ab2",
        fontWeight: '600'
    },
    touchableCard: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
    },
    card: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        width: DEVICE_WIDTH - 30,
        borderRadius: 10,
    },
})