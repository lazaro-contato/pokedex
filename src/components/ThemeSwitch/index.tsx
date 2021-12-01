// @flow
import * as React from 'react';
import Switch from "react-switch";

import {toggleTheme} from "../../store/themeApplication/Theme.actions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import light from "../../themes/light";


type Props = {
};

export const ThemeSwtich= (props: Props) => {
    const globalTheme = useSelector((state:RootState) => state.appTheme)
    const dispatch = useDispatch()

    function setNewTheme() {
        const newTheme = globalTheme === 'light' ? 'dark' : 'light'
        dispatch(toggleTheme(newTheme))
    };

    return (
        <div>
            <Switch onChange={setNewTheme}
                    checked={globalTheme === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    width={40}
                    height={10}
                    handleDiameter={20}
            />
        </div>
    );
};

