import React from "react";
import logout from '../../assets/logout.svg'

import {ExitBtn, LogoutImg, LogoutText} from "./styles";

type Props = {

}

export const ExitButton = (props: Props) => {
    return (
        <div>
        <ExitBtn>
            <LogoutText>Sair</LogoutText>
            <LogoutImg src={logout}/>
        </ExitBtn>
        </div>

    )
}