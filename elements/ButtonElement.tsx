import { Button } from '@ui-kitten/components';
import Text from 'components/Text';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ButtonType } from '../types';

export type Props = {
    component: ButtonType;
    absolute: Boolean;
    setCurrentPage: Function;
};

const settings = {primary: {main: 'rgb(143,206,0)', contrast: 'rgb(0,0,0)'}, secondary: {main: 'rgb(61,133,198)', contrast: 'rgb(224,239,253)'}};

const ButtonElement: React.FC<Props> = ({component, absolute, setCurrentPage}) => {


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

    styles.backgroundColor = component.backgroundColor === "primary" ? settings.primary.main : settings.secondary.main;

    if(component.style?.marginLeft){
        styles.marginLeft = parseInt(component.style?.marginLeft?.slice(0, -2) ?? "0") ?? styles.marginLeft;
    }
    if(component.style?.marginTop){
        styles.marginTop = parseInt(component.style?.marginTop?.slice(0, -2) ?? "0") ?? styles.marginTop;
    }
    if(component.style?.marginRight){
        styles.marginRight = parseInt(component.style?.marginRight?.slice(0, -2) ?? "0") ?? styles.marginRight;
    }
    if(component.style?.marginBottom){
        styles.marginBottom = parseInt(component.style?.marginBottom?.slice(0, -2) ?? "0") ?? styles.marginBottom;
    }
    if(component.style?.padding){
        styles.padding = parseInt(component.style?.padding?.slice(0, -2) ?? "0") ?? styles.padding;
    }
    if(component.style?.paddingRight){
        styles.paddingRight = parseInt(component.style?.paddingRight?.slice(0, -2) ?? "0") ?? styles.paddingRight;
    }
    if(component.style?.paddingLeft){
        styles.paddingLeft = parseInt(component.style?.paddingLeft?.slice(0, -2) ?? "0") ?? styles.paddingLeft;
    }
    if(component.style?.paddingTop){
        styles.paddingTop = parseInt(component.style?.paddingTop?.slice(0, -2) ?? "0") ?? styles.paddingTop;
    }
    if(component.style?.paddingBottom){
        styles.paddingBottom = parseInt(component.style?.paddingBottom?.slice(0, -2) ?? "0") ?? styles.paddingBottom;
    }
    if(component.style?.borderRadius){
        styles.borderRadius = parseInt(component.style?.borderRadius?.slice(0, -2) ?? "0") ?? styles.borderRadius;
    }
    styles.backgroundColor = component.style?.backgroundColor ?? styles.backgroundColor;
    //styles.fontSize = component.style?.fontSize ?? styles.fontSize;
    //styles.color = component.style?.color ?? styles.color;
    styles.margin = parseInt(component.style?.margin?.slice(0, -2) ?? "0") ?? styles.margin;
    
    const onClick = () => {
        if(component.actionType === "navigate") {
            setCurrentPage(component.navigate);
            //set current page to component.navigate
        }
    }

    return <Button 
        key={component.key}
        activeOpacity={0.7}
        onPress={() => onClick}
        style={styles}
        >
        <Text style={{color: component.backgroundColor === "primary" ? settings.primary.contrast : settings.secondary.contrast}}>{component.title}</Text>
    </Button>

}

export default ButtonElement;