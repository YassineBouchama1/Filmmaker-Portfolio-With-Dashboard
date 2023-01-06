




export const handelLogin = (state = {isAuth:localStorage.getItem("isAuth")} ,action )=>{

    switch (action.type) {
        case "isLog":
            return  localStorage.setItem("isAuth", true) ;
            case "notLog":
                return  localStorage.clear(), {isAuth:false} , window.location.pathname = "/login";
        default:
            return state;
    }
}

