import { Button } from "@ui-kitten/components";
import Text from "components/Text";
import DisplayElements from "../DisplayElements";
import React from "react";
import { ScrollView, StyleProp, View, ViewStyle } from "react-native";
import { CarouselType, TabsType } from "../types";
import json from "../json";

export type Props = {
  component: TabsType | CarouselType;
  absolute: Boolean;
  currentPage: string;
  changeCurrentPage: (page: string) => void;
};

const settings = {
  primary: { main: "rgb(143,206,0)", contrast: "rgb(0,0,0)" },
  secondary: { main: "rgb(61,133,198)", contrast: "rgb(224,239,253)" },
};

const TabsElement: React.FC<Props> = ({
  component,
  absolute,
  currentPage,
  changeCurrentPage,
}) => {
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
  styles.flexDirection = "row";

  //styles.overflow = "scroll";

  //   styles.justifyContent = "space-evenly";
  //   styles.alignContent = "center";

  styles.height = component.config.height;
  styles.width = component.config.width;
  styles.backgroundColor =
    component.backgroundColor === "primary"
      ? settings.primary.main
      : component.backgroundColor === "secondary"
      ? settings.secondary.main
      : undefined;

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

  return (
    <ScrollView
      style={styles}
      horizontal={true}
      contentContainerStyle={{ alignItems: "center" }}
      showsHorizontalScrollIndicator={false}
    >
      {component.children.map((key) => {
        return (
          <View style={{ margin: 5 }}>
            <DisplayElements
              key={key}
              component={json[currentPage].components[key]}
              changeCurrentPage={changeCurrentPage}
              absolute={false}
              isGrid={false}
              currentPage={currentPage}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default TabsElement;
