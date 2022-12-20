import { Button } from '@ui-kitten/components';
import Text from 'components/Text';
import DisplayElements from '../DisplayElements';
import React from 'react';
import { FlatList, StyleProp, View, ViewStyle } from 'react-native';
import { LayoutType } from '../types';
import json from '../json';

export type Props = {
    component: LayoutType;
    absolute: Boolean;
};



const settings = {primary: {main: 'rgb(143,206,0)', contrast: 'rgb(0,0,0)'}, secondary: {main: 'rgb(61,133,198)', contrast: 'rgb(224,239,253)'}};

const LayoutElement: React.FC<Props> = ({component, absolute}) => {

    let styles: StyleProp<ViewStyle> = {}

    if (absolute) {
        styles.position = "absolute";
        styles.marginTop = component.config.y;
        styles.marginLeft = component.config.x;
    }

    styles.height = component.config.height;
    styles.width = component.config.width;
    styles.backgroundColor = component.backgroundColor === "primary" ? settings.primary.main : settings.secondary.main;

    styles.backgroundColor = component.style?.backgroundColor ?? styles.backgroundColor;

    styles.display = "flex";

    return <FlatList
                contentContainerStyle={{flex: 1, justifyContent : "center", alignContent: "space-between", alignItems: "center"}}
                columnWrapperStyle={component.cols > 1 ? {justifyContent: "center"} : undefined}
                style={styles}
                data={Object.keys(json.main.components)}
                renderItem={({item}) => {
                    if(json.main.components[item].parentId === component.key) {
                        if(json.main.components[item].type === "empty") {
                            return <View/>
                        }
                        return <DisplayElements key={item} component={json.main.components[item]} absolute={false}/>
                    }
                    return null;
                }}
                listKey={component.key}
                key={component.key}
                numColumns={component.grid === true ? component.cols : undefined}
                keyExtractor={item => json.main.components[item].key}
                horizontal={component.grid === false && component.cols === 0 ? true : false}
            />

}

export default LayoutElement;