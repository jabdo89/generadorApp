import { Button } from "@ui-kitten/components";
import Text from "components/Text";
import React from "react";
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { MapType } from "../types";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";

export type Props = {
  component: MapType;
  absolute: Boolean;
};

const settings = {
  primary: { main: "rgb(143,206,0)", contrast: "rgb(0,0,0)" },
  secondary: { main: "rgb(61,133,198)", contrast: "rgb(224,239,253)" },
};

const MapElement: React.FC<Props> = ({ component, absolute }) => {
  console.log("text " + absolute);

  const absoluteStyle = {
    position: "absolute",
    marginTop: component.config.y,
    marginLeft: component.config.x,
    height: component.config.height,
    width: component.config.width,
  };

  let styles: StyleProp<TextStyle> = {};
  let stylesView: StyleProp<ViewStyle> = {};

  stylesView.display = "flex";
  (stylesView.alignItems = "center"),
    (stylesView.justifyContent = "center"),
    (stylesView.alignContent = "center");

  if (absolute === true) {
    styles.position = "absolute";
    styles.marginTop = component.config.y;
    styles.marginLeft = component.config.x;
  }

  styles.height = component.config.height;
  styles.width = component.config.width;

  styles.textAlignVertical = "center";

  if (component.style?.marginLeft) {
    styles.marginLeft =
      parseInt(component.style?.marginLeft?.slice(0, -2) ?? "0") ??
      styles.marginLeft;
  }
  if (component.style?.marginTop) {
    styles.marginTop =
      parseInt(component.style?.marginTop?.slice(0, -2) ?? "0") ??
      styles.marginTop;
  }
  if (component.style?.marginRight) {
    styles.marginRight =
      parseInt(component.style?.marginRight?.slice(0, -2) ?? "0") ??
      styles.marginRight;
  }
  if (component.style?.marginBottom) {
    styles.marginBottom =
      parseInt(component.style?.marginBottom?.slice(0, -2) ?? "0") ??
      styles.marginBottom;
  }
  if (component.style?.padding) {
    styles.padding =
      parseInt(component.style?.padding?.slice(0, -2) ?? "0") ?? styles.padding;
  }
  if (component.style?.paddingRight) {
    styles.paddingRight =
      parseInt(component.style?.paddingRight?.slice(0, -2) ?? "0") ??
      styles.paddingRight;
  }
  if (component.style?.paddingLeft) {
    styles.paddingLeft =
      parseInt(component.style?.paddingLeft?.slice(0, -2) ?? "0") ??
      styles.paddingLeft;
  }
  if (component.style?.paddingTop) {
    styles.paddingTop =
      parseInt(component.style?.paddingTop?.slice(0, -2) ?? "0") ??
      styles.paddingTop;
  }
  if (component.style?.paddingBottom) {
    styles.paddingBottom =
      parseInt(component.style?.paddingBottom?.slice(0, -2) ?? "0") ??
      styles.paddingBottom;
  }
  if (component.style?.borderRadius) {
    styles.borderRadius =
      parseInt(component.style?.borderRadius?.slice(0, -2) ?? "0") ??
      styles.borderRadius;
  }
  styles.backgroundColor =
    component.style?.backgroundColor ?? styles.backgroundColor;
  //styles.fontSize = component.style?.fontSize ?? styles.fontSize;
  //styles.color = component.style?.color ?? styles.color;
  styles.margin =
    parseInt(component.style?.margin?.slice(0, -2) ?? "0") ?? styles.margin;

  const refMap = React.useRef<MapView | null>(null);

  return (
    <MapView
      ref={refMap}
      provider={PROVIDER_GOOGLE}
      style={styles}
      initialRegion={{
        latitude: component.lat,
        longitude: component.lng,
        latitudeDelta: 3,
        longitudeDelta: 3,
      }}
    >
      {component.markers.map((marker, index) => (
        <Marker
          key={index}
          coordinate={{ latitude: marker.lat, longitude: marker.lng }}
        />
      ))}
    </MapView>
  );
};

export default MapElement;
