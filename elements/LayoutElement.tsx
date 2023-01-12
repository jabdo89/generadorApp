import { Button } from '@ui-kitten/components';
import Text from 'components/Text';
import DisplayElements from '../DisplayElements';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { LayoutType } from '../types';
import json from '../json';

export type Props = {
    component: LayoutType;
    absolute: Boolean;
    cols: number | undefined;
    rows: number | undefined;
    isGrid: Boolean | undefined;
};

const settings = {primary: {main: 'rgb(143,206,0)', contrast: 'rgb(0,0,0)'}, secondary: {main: 'rgb(61,133,198)', contrast: 'rgb(224,239,253)'}};

const LayoutElement: React.FC<Props> = ({component, absolute, cols, rows, isGrid}) => {

    const absoluteStyle = {
        position: 'absolute',
        marginTop: component.config.y,
        marginLeft: component.config.x,
        height: component.config.height,
        width: component.config.width,
    }

    const notAbsStyle = {
        width: component.config.width,
        height: component.config.height,
        gridColumn: cols,
        gridRow: rows,
        // position: component.absolute === true ? "relative" : "inherit",
        // overflow: component.absolute === true ? "hidden" : "inherit",
    }

    let styles: StyleProp<ViewStyle> = {}

    if (absolute) {
        styles.position = "absolute";
        styles.marginTop = component.config.y;
        styles.marginLeft = component.config.x;
    } else {
        if(component.style?.marginLeft){
            styles.marginLeft = parseInt(component.style?.marginLeft?.slice(0, -2) ?? "0") ?? styles.marginLeft;
        }
        if(component.style?.marginTop){
            styles.marginTop = parseInt(component.style?.marginTop?.slice(0, -2) ?? "0") ?? styles.marginTop;
        }
    }

    if (component.grid !== true) {
        if(component.cols === 0) {
            styles.flexDirection = "row";
        } else if (component.rows === 0){
            styles.flexDirection = "column";
        }
    } else {
        //styles.flex = component.cols;
        styles.flexDirection = "row";
    }

    styles.display = "flex";
    
    styles.flexWrap = "wrap";
    styles.alignItems = "center";
    styles.justifyContent = "space-evenly";
    styles.alignContent = "center";

    styles.height = component.config.height;
    styles.width = component.config.width;
    styles.backgroundColor = component.backgroundColor === "primary" ? settings.primary.main : component.backgroundColor === "secondary" ? settings.secondary.main : undefined;

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

    return <View style={styles}>
        {component.children.map((key) => {
            return <DisplayElements key={key} component={json.main.components[key]} absolute={false} isGrid={true} />
        })}
    </View>

}

export default LayoutElement;