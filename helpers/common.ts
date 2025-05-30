import { Dimensions} from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

export const heightPercentage = (percentage: any) => {
    return (percentage * deviceHeight) / 100;
}

export const widthPercentage = (percentage: any) => {
    return (percentage * deviceWidth) / 100;
}