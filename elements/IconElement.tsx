import { Button, Icon, Input } from '@ui-kitten/components';
import Text from 'components/Text';
import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { IconType } from '../types';

export type Props = {
    component: IconType;
    absolute: Boolean;
};

const settings = {primary: {main: 'rgb(143,206,0)', contrast: 'rgb(0,0,0)'}, secondary: {main: 'rgb(61,133,198)', contrast: 'rgb(224,239,253)'}};

const IconElement: React.FC<Props> = ({component, absolute}) => {

    // const absoluteStyle = {
    //     position: 'absolute',
    //     marginTop: component.config.y,
    //     marginLeft: component.config.x,
    //     height: component.config.height,
    //     width: component.config.width,
    // }

    let styles: StyleProp<TextStyle> = {}

    // if(absolute) {
    //     styles.position = "absolute";
    //     styles.marginTop = component.config.y;
    //     styles.marginLeft = component.config.x;
    // }

    styles.height = component.config.height;
    styles.width = component.config.width;

    // styles.backgroundColor = component.color === "primary" ? settings.primary.main : settings.secondary.main;
    // styles.color = component.color === "primary" ? settings.primary.contrast : settings.secondary.contrast
    return <Icon
        style={styles}
        fill='#8F9BB3'
        pack="assets"
        name={component.icon}
    />

}

export default IconElement;