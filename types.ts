interface Config {
  x: number;
  y: number;
  height: number;
  width: number;
}

interface CSSStyles {
  margin: string;
  marginRight: string;
  marginLeft: string;
  marginTop: string;
  marginBottom: string;
  borderRadius: string;
  padding: string;
  paddingRight: string;
  paddingLeft: string;
  paddingTop: string;
  paddingBottom: string;
  backgroundColor: string;
  fontSize: string;
}

interface ButtonType {
  type: "button";
  config: Config;
  title: string;
  backgroundColor: string;
  key: string;
  parentId?: string;
  style?: CSSStyles;
  actionType?: string;
  navigate?: string;
}

interface InputType {
  type: "input";
  config: Config;
  title: string;
  color: string;
  isPassword: Boolean;
  key: string;
  parentId?: string;
  style?: CSSStyles;
}

interface TextType {
  type: "text";
  config: Config;
  title: string;
  color: string;
  textType:
    | "h6"
    | "roboto"
    | "extra-1"
    | "extra-2"
    | "header"
    | "title1"
    | "title2"
    | "title3"
    | "title4"
    | "body"
    | "headline"
    | "call-out"
    | "subhead"
    | "footnote"
    | "caption1"
    | "caption2"
    | "label"
    | undefined;
  key: string;
  parentId?: string;
  style?: CSSStyles;
}

// interface ListType {
//   type: "list";
//   config: Config;
//   children: [];
//   key: string;
//   parentId?: string;
//   style?: CSSStyles;
// }

interface IconType {
  type: "icon";
  config: Config;
  icon: string;
  color: string;
  backgroundColor: string;
  key: string;
  parentId?: string;
  style?: CSSStyles;
}

interface LayoutType {
  type: "layout";
  config: Config;
  backgroundColor: string;
  cols: number;
  rows: number;
  key: string;
  parentId?: string;
  style?: CSSStyles;
  grid?: boolean;
  children: Array<string>;
}

interface ImageType {
  type: "image";
  config: Config;
  key: string;
  parentId?: string;
  style?: CSSStyles;
  url: string;
}

interface TabsType {
  type: "tabs";
  config: Config;
  backgroundColor: string;
  key: string;
  parentId?: string;
  style?: CSSStyles;
  children: Array<string>;
}

interface CarouselType {
  type: "carousel";
  config: Config;
  backgroundColor: string;
  key: string;
  parentId?: string;
  style?: CSSStyles;
  children: Array<string>;
}

interface ListIndicatorType {
  text?: string;
  secondary?: string;
  icon?: string;
  helper?: string;
  helperSecondary?: string;
}

interface ListNavigationType {
  text?: string;
  secondary?: string;
  url?: string;
}

interface ListProgressType {
  text?: string;
  secondary?: string;
  url?: string;
  progress?: number;
}

interface ListType {
  type: "list";
  config: Config;
  backgroundColor: string;
  key: string;
  parentId?: string;
  style?: CSSStyles;
  elementType: "navigation" | "progress" | "indicators";
  elements: Array<ListIndicatorType | ListNavigationType | ListProgressType>;
}

interface MapType {
  type: "map";
  config: Config;
  key: string;
  parentId?: string;
  style?: CSSStyles;
  lat: number;
  lng: number;
  zoom: number;
  markers: Array<{ lat: number; lng: number }>;
}

export {
  ButtonType,
  InputType,
  TextType,
  ListType,
  IconType,
  LayoutType,
  CSSStyles,
  Config,
  ImageType,
  TabsType,
  CarouselType,
  ListIndicatorType,
  ListNavigationType,
  ListProgressType,
  MapType,
};
