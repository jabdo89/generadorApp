import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import AppContainer from "./navigation/AppContainer";
import * as eva from "@eva-design/eva";
import { default as darkTheme } from "constants/theme/dark.json";
import { default as lightTheme } from "constants/theme/light.json";
import { default as customTheme } from "constants/theme/appTheme.json";
import { ApplicationProvider, Button, IconRegistry, Input } from "@ui-kitten/components";
import { default as customMapping } from "./constants/theme/mapping.json";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import AssetIconsPack from "assets/AssetIconsPack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ThemeContext from "./ThemeContext";
import Text from "./components/Text";
// import { patchFlatListProps } from "react-native-web-refresh-control";

// patchFlatListProps();

const jsonString = `[{"key":"o4IJUpeWP","type":"text","config":{"x":130,"y":99,"height":50,"width":67},"title":"title","textType":"title1"},{"key":"PcNgbhgoE","type":"text","config":{"x":120,"y":152,"height":30,"width":88},"title":"subtitle","textType":"title2"},{"key":"7cwNkH4vP","type":"input","config":{"x":68,"y":189,"height":58,"width":200},"title":"input","color":"secondary"},{"key":"hbTRbrbyX","type":"input","config":{"x":69,"y":255,"height":58,"width":200},"title":"input","color":"secondary"},{"key":"Bd873NkwE","type":"button","config":{"x":128,"y":335,"height":30,"width":80},"title":"button","color":"primary"},{"key":"p7qfdWP5J","type":"text","config":{"x":119,"y":387,"height":30,"width":100},"title":"Random text","textType":"body"}]`;
const json = JSON.parse(jsonString);

const settings = {primary: {main: '#8fce00', contrast: '#000000'}, secondary: {main: '#3d85c6', contrast: '#e0effd'}};

export default function App() {
  const [theme, setTheme] = React.useState<"light" | "dark">("dark");
  React.useEffect(() => {
    AsyncStorage.getItem("theme").then((value) => {
      if (value === "light" || value === "dark") setTheme(value);
    });
    console.log(json)
  }, []);
  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    AsyncStorage.setItem("theme", nextTheme).then(() => {
      setTheme(nextTheme);
    });
  };
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <IconRegistry icons={[EvaIconsPack, AssetIconsPack]} />
          <ApplicationProvider
            {...eva}
            theme={
              theme === "light"
                ? { ...eva.light, ...customTheme, ...lightTheme }
                : { ...eva.dark, ...customTheme, ...darkTheme }
            }
            /* @ts-ignore */
            customMapping={customMapping}
          >
            <SafeAreaProvider>
              <StatusBar
                style={theme === "light" ? "dark" : "light"}
                translucent={true}
                backgroundColor={"#00000000"}
              />
              {json.map((element: {
                  textType: "body" | "h6" | "header" | "label" | "roboto" | "extra-1" | "extra-2" | "title1" | "title2" | "title3" | "title4" | "headline" | "call-out" | "subhead" | "footnote" | "caption1" | "caption2" | undefined;
                  key: string;
                  type: string;
                  color: string | undefined;
                  config: { y: number ; x: number ; height: number; width: number; };
                  title: string;
                }) => {
                switch(element.type) {
                  case "button":
                    return (
                      <Button key={element.key} activeOpacity={0.7} style={{
                        position: "absolute",
                        marginTop: element.config.y,
                        marginLeft: element.config.x,
                        height: element.config.height,
                        width: element.config.width,
                        backgroundColor: element.color === "primary" ? settings.primary.main : settings.secondary.main
                      }}>
                        <Text style={{color: element.color === "primary" ? settings.primary.contrast : settings.secondary.contrast}}>{element.title}</Text>
                      </Button>
                    );
                  case "text":
                    return (
                      <Text key={element.key} category={element.textType} style={{position: "absolute", width: element.config.width, height: element.config.height}} marginLeft={element.config.x} marginTop={element.config.y} status="black">{element.title}</Text>
                    );
                  default:
                    return (<Input key={element.key} placeholder={element.title} style={{
                              position: "absolute",
                              marginTop: element.config.y,
                              marginLeft: element.config.x,
                              height: element.config.height,
                              width: element.config.width,
                              backgroundColor: element.color === "primary" ? settings.primary.main : settings.secondary.main,
                              color: element.color === "primary" ? settings.primary.contrast : settings.secondary.contrast
                            }}></Input>);
                }
              })}
            </SafeAreaProvider>
          </ApplicationProvider>
        </ThemeContext.Provider>
      </SafeAreaProvider>
    );
  }
}
