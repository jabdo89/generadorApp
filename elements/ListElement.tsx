import { Button, Icon, Layout } from "@ui-kitten/components";
import Text from "components/Text";
import DisplayElements from "../DisplayElements";
import React from "react";
import { ScrollView, StyleProp, View, ViewStyle, Image } from "react-native";
import {
  ListType,
  ListNavigationType,
  ListIndicatorType,
  ListProgressType,
} from "../types";
import json from "../json";
import ProgressBar from "components/ProgressBar";

export type Props = {
  component: ListType;
  absolute: Boolean;
};

const settings = {
  primary: { main: "rgb(143,206,0)", contrast: "rgb(0,0,0)" },
  secondary: { main: "rgb(61,133,198)", contrast: "rgb(224,239,253)" },
};

const ListElement: React.FC<Props> = ({ component, absolute }) => {
  let styles: StyleProp<ViewStyle> = {};

  if (absolute) {
    styles.position = "absolute";
    styles.marginTop = component.config.y;
    styles.marginLeft = component.config.x;
  } else {
    // if (component.style?.marginLeft) {
    //   styles.marginLeft =
    //     parseInt(component.style?.marginLeft?.slice(0, -2) ?? "0") ??
    //     styles.marginLeft;
    // }
    // if (component.style?.marginTop) {
    //   styles.marginTop =
    //     parseInt(component.style?.marginTop?.slice(0, -2) ?? "0") ??
    //     styles.marginTop;
    // }
  }

  styles.display = "flex";
  styles.flexDirection = "column";

  //styles.overflow = "scroll";

  //   styles.justifyContent = "space-evenly";
  //   styles.alignContent = "center";

  styles.height = component.config.height;
  styles.width = component.config.width;

  //   if (component.style?.marginRight) {
  //     styles.marginRight =
  //       parseInt(component.style?.marginRight?.slice(0, -2) ?? "0") ??
  //       styles.marginRight;
  //   }
  //   if (component.style?.marginBottom) {
  //     styles.marginBottom =
  //       parseInt(component.style?.marginBottom?.slice(0, -2) ?? "0") ??
  //       styles.marginBottom;
  //   }
  //   if (component.style?.padding) {
  //     styles.padding =
  //       parseInt(component.style?.padding?.slice(0, -2) ?? "0") ?? styles.padding;
  //   }
  //   if (component.style?.paddingRight) {
  //     styles.paddingRight =
  //       parseInt(component.style?.paddingRight?.slice(0, -2) ?? "0") ??
  //       styles.paddingRight;
  //   }
  //   if (component.style?.paddingLeft) {
  //     styles.paddingLeft =
  //       parseInt(component.style?.paddingLeft?.slice(0, -2) ?? "0") ??
  //       styles.paddingLeft;
  //   }
  //   if (component.style?.paddingTop) {
  //     styles.paddingTop =
  //       parseInt(component.style?.paddingTop?.slice(0, -2) ?? "0") ??
  //       styles.paddingTop;
  //   }
  //   if (component.style?.paddingBottom) {
  //     styles.paddingBottom =
  //       parseInt(component.style?.paddingBottom?.slice(0, -2) ?? "0") ??
  //       styles.paddingBottom;
  //   }
  //   if (component.style?.borderRadius) {
  //     styles.borderRadius =
  //       parseInt(component.style?.borderRadius?.slice(0, -2) ?? "0") ??
  //       styles.borderRadius;
  //   }
  //styles.fontSize = component.style?.fontSize ?? styles.fontSize;
  //styles.color = component.style?.color ?? styles.color;
  //   if (component.style?.margin) {
  //     styles.margin =
  //       parseInt(component.style?.margin?.slice(0, -2) ?? "0") ?? styles.margin;
  //   }

  let containerStyles: StyleProp<ViewStyle> = {};
  containerStyles.backgroundColor =
    component.backgroundColor === "primary"
      ? settings.primary.main
      : component.backgroundColor === "secondary"
      ? settings.secondary.main
      : component.style?.backgroundColor ?? undefined;

  return (
    <ScrollView
      style={styles}
      contentContainerStyle={{
        marginLeft: "auto",
        marginRight: "auto",
        flexGrow: 1,
        ...containerStyles,
      }}
      showsVerticalScrollIndicator={false}
    >
      {component.elements.map((element) => {
        return (
          <View style={{ margin: 5 }}>
            {component.elementType === "navigation" ? (
              <NavigationElement
                element={element}
                width={component.config.width * 0.85}
              />
            ) : component.elementType === "indicators" ? (
              <IndicatorElement
                element={element}
                width={component.config.width * 0.85}
              />
            ) : (
              <ProgressElement
                element={element}
                width={component.config.width * 0.85}
              />
            )}
          </View>
        );
      })}
    </ScrollView>
  );
};

const NavigationElement: React.FC<{
  element: ListNavigationType;
  width: number;
}> = ({ element, width }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 16,
        marginTop: 16,
        padding: 10,
        width: width,
        justifyContent: "space-between",
        backgroundColor: settings.primary.main,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View>
          <Image
            style={{ width: 30, height: 30 }}
            source={{ uri: element.url }}
          />
        </View>
        <View>
          <Text
            marginLeft={8}
            children={element.text}
            category="headline"
            status="black"
          />
          {element.secondary !== undefined ? (
            <Text
              marginLeft={8}
              children={element.secondary}
              category="caption1"
              status="black"
            />
          ) : null}
        </View>
      </View>
      <Icon
        pack="assets"
        name={"arrowRight16"}
        style={{ marginLeft: "auto", marginRight: "auto" }}
      />
    </View>
  );
};

const IndicatorElement: React.FC<{
  element: ListIndicatorType;
  width: number;
}> = ({ element, width }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 16,
        marginTop: 16,
        padding: 10,
        width: width,
        justifyContent: "space-between",
        backgroundColor: settings.primary.main,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View>
          <Icon fill="#8F9BB3" pack="assets" name="question" />
        </View>
        <View>
          <Text
            marginLeft={8}
            children={element.text}
            category="headline"
            status="black"
          />
          {element.secondary !== undefined ? (
            <Text
              marginLeft={8}
              children={element.secondary}
              category="caption1"
              status="black"
            />
          ) : null}
        </View>
      </View>
      <View style={{ marginLeft: "auto" }}>
        <Text
          marginLeft={8}
          children={element.helper}
          category="headline"
          status="black"
        />
        {element.helperSecondary !== undefined ? (
          <Text
            marginLeft={8}
            children={element.helperSecondary}
            category="caption1"
            status="black"
          />
        ) : null}
      </View>
    </View>
  );
};

const ProgressElement: React.FC<{
  element: ListProgressType;
  width: number;
}> = ({ element, width }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        borderRadius: 16,
        marginTop: 16,
        padding: 10,
        width: width,
        backgroundColor: settings.primary.main,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View>
          <Image
            style={{ width: 30, height: 30 }}
            source={{ uri: element.url }}
          />
        </View>
        <View>
          <Text
            marginLeft={8}
            children={element.text}
            category="headline"
            status="black"
          />
          {element.secondary !== undefined ? (
            <Text
              marginLeft={8}
              children={element.secondary}
              category="caption1"
              status="black"
            />
          ) : null}
        </View>
      </View>
      {element.progress !== undefined ? (
        <ProgressBar didDone={element.progress} total={100} />
      ) : null}
    </View>
  );
};

export default ListElement;
