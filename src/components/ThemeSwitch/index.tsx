// @flow
import * as React from 'react';
import Switch from "react-switch";
import {useState} from "react";
import { useSelector, useDispatch } from 'react-redux'

import {toggleTheme} from "../../store/themeApplication/Theme.actions";

import light from "../../themes/light";
import dark from "../../themes/dark";

type Props = {
};

export const ThemeSwtich= (props: Props) => {

    const [theme, setTheme] = useState(light)

   const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light)

    }

    return (
        <div>
            <Switch onChange={toggleTheme}
                    checked={theme.title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    width={40}
                    height={10}
                    handleDiameter={20}
            />
        </div>
    );
};