import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";

import AppDetail from "../../../shared/AppDetail";
import DobScreenSvg from "../../../assets/svg/DobScreenSvg";
import AppDatetimePicker from "../../../shared/AppDatetimePicker";
import { DetailsContext } from "../../../context";
import { verticalScale } from "../../../../config";
// import { updateDetailsApi } from "./shared/index";

function DobScreen({ navigation }) {
  const detailsContext = useContext(DetailsContext);

  const getMaxDate = () => {
    const d = new Date();
    return new Date(d.setDate(d.getDate() - 5844)); // - number of days
  };

  let dob = getMaxDate();
  return (
    <AppDetail
      progressNum={4}
      //Header
      headerTextFront="You were"
      headerTextColored="born"
      headerTextRest="on"
      //Svg
      Svgname={DobScreenSvg}
      svgWidth={200}
      svgHeight={200}
      //Navigation
      botNavOnPressLeft={() => {
        navigation.navigate("purpose");
      }}
      botNavOnPressRight={() => {
        //setContext
        let details = detailsContext.details;
        details.content["dob"] = dob;
        detailsContext.setDetails(details);

        // updateDetailsApi({ dob: detailsContext.details.content.dob });
        navigation.navigate("relationshipStatus");
      }}
    >
      <AppDatetimePicker
        style={styles.date}
        _mode="date"
        maxdate={getMaxDate}
        getSelectedDate={(date) => {
          dob = date;
        }}
      />
    </AppDetail>
  );
}

const styles = StyleSheet.create({
  date: {},
});

export default DobScreen;
