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
    styles.alignItems = "center",
    styles.justifyContent = "space-evenly",
    styles.alignContent = "center"

    styles.height = component.config.height;
    styles.width = component.config.width;
    styles.backgroundColor = component.backgroundColor === "primary" ? settings.primary.main : settings.secondary.main;

    if (isGrid === true) {
        styles.flexGrow = 1;
    }

    styles.backgroundColor = component.style?.backgroundColor ?? styles.backgroundColor;
    return <View style={styles}>
        {Object.keys(json.main.components).map((key) => {
            if(json.main.components[key].parentId === component.key) {
            return <DisplayElements key={key} component={json.main.components[key]} absolute={false} isGrid={true} />
            }
        })}
    </View>

}

export default LayoutElement;