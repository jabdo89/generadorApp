import { Button, Input } from '@ui-kitten/components';
import Text from 'components/Text';
import ButtonElement from './elements/ButtonElement';
import InputElement from './elements/InputElement';
import TextElement from './elements/TextElement';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { ButtonType, InputType, TextType, IconType, ListType, LayoutType } from './types';
import LayoutElement from './elements/LayoutElement';
import IconElement from './elements/IconElement';

export type Props = {
    component: ButtonType | InputType | TextType | IconType | ListType | LayoutType;
    absolute: Boolean;
};

const settings = {primary: {main: 'rgb(143,206,0)', contrast: 'rgb(0,0,0)'}, secondary: {main: 'rgb(61,133,198)', contrast: 'rgb(224,239,253)'}};

const DisplayElements: React.FC<Props> = ({component, absolute}) => {

    console.log(component.type + " " + component.key + " " + component.config.height + " " + component.config.width);

    const absoluteStyle = {
        position: 'absolute',
        marginTop: component.config.y,
        marginLeft: component.config.x,
        height: component.config.height,
        width: component.config.width,
    }

    let styles: StyleProp<ViewStyle> = {}

    if(absolute) {
        styles.position = "absolute";
        styles.marginTop = component.config.y;
        styles.marginLeft = component.config.x;    
    }

    styles.height = component.config.height;
    styles.width = component.config.width;

    switch(component.type) {
        case "button":
            return <ButtonElement component={component} absolute={absolute}/>
        case "text":
            return <TextElement component={component} absolute={absolute} />
        case "input":
            return <InputElement component={component} absolute={absolute} />
        case "list":
            return <Text>list</Text>
        case "icon":
            return <IconElement component={component} absolute={absolute} />
        case "layout":
            return <LayoutElement component={component} absolute={absolute} />
    }

}

export default DisplayElements;