


export const dataReducer = (state = {movies:[]} ,action )=>{

    switch (action.type) {
        case "YesData":
            return{ movies:action.data};
            case "NoData":
                return{ movies:action.data};
  
        default:
            return state;
    }
}



