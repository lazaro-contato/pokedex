import React, {useContext} from 'react';
import {ThemeContext} from "styled-components";


import {LoginSection} from "../../components/LoginSection";
import {BackgroundImage} from "./styles";
import BackgroundImageLogo from '../../assets/login-background.png'
import {ThemeSwtich} from "../../components/ThemeSwitch";

type Props = {

};
export const Login = (props: Props) => {

    return (
            <div>
                <BackgroundImage src={BackgroundImageLogo}/>
                <LoginSection />
                <ThemeSwtich />
            </div>
    );
};