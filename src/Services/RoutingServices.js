import { GetUserAcc, RemoveAccout } from "../Config/Storage";
import { mainPage, signIn } from "../Config/Routes";

export const CheckLogin = (props) => {
    if(!GetUserAcc()) {
        props.history.push(signIn);
    } else {
        props.history.push(mainPage);
    }
}

export const LogOut = (history) => {
    RemoveAccout();
    history.push(signIn);
}

 