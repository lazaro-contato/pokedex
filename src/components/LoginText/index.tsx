import {LoginTextStyle} from "./styles";

type Props = {
    children: string
}

export const LoginText = (props: Props) => {
    return (
        <LoginTextStyle>{props.children}</LoginTextStyle>
    )
}