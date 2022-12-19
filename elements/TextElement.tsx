import { Button } from '@ui-kitten/components';
import Text from 'components/Text';
import React from 'react';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import { TextType } from '../types';

export type Props = {
    component: TextType;
    absolute: Boolean;
    isGrid: Boolean;
};

const settings = {primary: {main: 'rgb(143,206,0)', contrast: 'rgb(0,0,0)'}, secondary: {main: 'rgb(61,133,198)', contrast: 'rgb(224,239,253)'}};

const TextElement: React.FC<Props> = ({component, absolute, isGrid}) => {

    console.log("text " + absolute)

    const absoluteStyle = {
        position: 'absolute',
        marginTop: component.config.y,
        marginLeft: component.config.x,
        height: component.config.height,
        width: component.config.width,
    }

    let styles: StyleProp<TextStyle> = {}
    let stylesView: StyleProp<ViewStyle> = {}

    if (isGrid === true) {
        stylesView.flexGrow = 1;
    }
    stylesView.display = "flex";
    stylesView.alignItems = "center",
    stylesView.justifyContent = "center",
    stylesView.alignContent = "center"

    if(absolute === true) {
        styles.position = "absolute";
        styles.marginTop = component.config.y;
        styles.marginLeft = component.config.x;
    }

    styles.height = component.config.height;
    styles.width = component.config.width;

    styles.textAlignVertical = "center";

    return <View style={stylesView}>
        <Text 
        key={component.key}
        category={component.textType}
        style={styles}
        status="black"
        >{component.title}</Text>
    </View>

}

export default TextElement;