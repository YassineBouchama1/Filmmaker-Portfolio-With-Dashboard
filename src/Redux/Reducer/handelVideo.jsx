


export const handelVideo = (state = {VidsUrls:[]} ,action )=>{

    switch (action.type) {
        case "VidData":
            return{ VidsUrls:action.data};
            case "NoVids":
                return{ VidsUrls:action.data};
        default:
            return state;
    }
}



