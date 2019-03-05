import { Toast } from "native-base";

export const showToast = (text, textStyle) => {
    Toast.show({
        text: text,
        duration: 2500,
        position: "top",
        textStyle: { ...textStyle, textAlign: "center" }
    });
};
