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

const jsonString = `[{"key":"k97LpZbdH","type":"button","config":{"x":187,"y":286,"height":61,"width":118},"title":"button"},{"key":"IlY_uCGBr","type":"text","config":{"x":192,"y":83,"height":56,"width":118},"title":"text"},{"key":"LbwAzulWq","type":"input","config":{"x":145,"y":150,"height":58,"width":200},"title":"input"},{"key":"yYfj2dlIN","type":"input","config":{"x":147,"y":220,"height":58,"width":200},"title":"input"}]`;
const json = JSON.parse(jsonString);

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
              {json.map((element: { key: string; type: string; config: { y: number ; x: number ; height: number; width: number; }; title: string; }) => {
                switch(element.type) {
                  case "button":
                    return (
                      <Button key={element.key} activeOpacity={0.7} style={{
                        position: "absolute",
                        marginTop: element.config.y,
                        marginLeft: element.config.x,
                        height: element.config.height,
                        width: element.config.width,
                      }}>
                        <Text>{element.title}</Text>
                      </Button>
                    );
                  case "text":
                    return (
                      <Text key={element.key} style={{position: "absolute", width: element.config.width, height: element.config.height}} marginLeft={element.config.x} marginTop={element.config.y} status="black">{element.title}</Text>
                    );
                  default:
                    return (<Input key={element.key} placeholder={element.title} style={{
                              position: "absolute",
                              marginTop: element.config.y,
                              marginLeft: element.config.x,
                              height: element.config.height,
                              width: element.config.width,
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
