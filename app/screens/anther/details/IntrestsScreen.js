import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import AppScreen from "../../../shared/AppScreen";

import {
  cssVariables,
  moderateScale,
  appStyles,
  verticalScale,
  scale,
} from "../../../../config/index";
import PurposeScreenSvg from "../../../assets/svg/PurposeScreenSvg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native-animatable";
import AppTextColorCoded from "../../../shared/AppTextColorCoded";
import AppButtonRound from "../../../shared/AppButtonRound";
import { DetailsContext } from "../../../context";
import { updateProgress, ProgressDots } from "./shared";

function IntrestsScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);

  return (
    <AppScreen>
      <View style={styles.container}>
        <ProgressDots num={6} />
        <AppTextColorCoded
          front="Things "
          colored="I like"
          rest="doing are..."
          styles={[appStyles.smHeading, styles.title]}
          animation="fadeInUp"
        />
        <View style={styles.midContainer}></View>
        {/* <View style={styles.svgWrap}>
          <PurposeScreenSvg
            height={verticalScale(200)}
            width={moderateScale(200)}
          />
        </View> */}
        <View style={styles.navBtnContainer}>
          <AppButtonRound
            icon="leftcircle"
            go="back"
            style={styles.navBtn}
            onPress={() => {
              navigation.navigate("relationshipStatus");
            }}
          />
          <AppButtonRound
            icon="leftcircle"
            style={styles.navBtn}
            onPress={() => {
              navigation.navigate("school");
            }}
          />
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    marginTop: verticalScale(40),
    marginBottom: verticalScale(10),
    marginHorizontal: moderateScale(30),
  },
  svgWrap: {
    marginVertical: verticalScale(10),
  },
  midContainer: {
    marginVertical: verticalScale(10),
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  checkbox: { marginVertical: verticalScale(10) },
  navBtnContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: verticalScale(60),
  },
  navBtn: {
    marginHorizontal: moderateScale(40),
  },
});
export default IntrestsScreen;