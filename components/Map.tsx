import React from "react";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {
  //   const region = {}

  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      style={{ width: "100%", height: "100%", borderRadius: 16 }}
      tintColor="black"
      mapType="standard"
      showsPointsOfInterest={false}
      //   initialRegion={region}
      showsUserLocation={true}
      userInterfaceStyle="light"
    ></MapView>
  );
};

export default Map;
