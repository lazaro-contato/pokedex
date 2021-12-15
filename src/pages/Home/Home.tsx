import React from "react";
import {Header} from "../../components/Header";
import {DefaultHome} from "../../components/DefaultHome";
import {ThemeSwtich} from "../../components/ThemeSwitch";
import {TestMotion} from "../../components/TestMotion";

type Props = {

}

export const Home = (props: Props) => {
    return(
        <div>
            <Header />
            <DefaultHome />
            <TestMotion />
        </div>
    )
};

