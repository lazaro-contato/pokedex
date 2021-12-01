import React from "react";
import {Header} from "../../components/Header";
import {DefaultHome} from "../../components/DefaultHome";
import {ThemeSwtich} from "../../components/ThemeSwitch";

type Props = {

}

export const Home = (props: Props) => {
    return(
        <div>
            <Header />
            <DefaultHome />
            <ThemeSwtich />
        </div>
    )
};

