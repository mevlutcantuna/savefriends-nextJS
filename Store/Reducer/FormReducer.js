import {ADDREMOVE,HADNLECHANGE} from "../Constant/Constant";

const INITIALSTATE = {
    favourites: [],
    name:'',
    surname:'',
    age:'',
    email:'',
}

const FormReducer = (state = INITIALSTATE,action) => {
    switch (action.type){
        case ADDREMOVE.ADD_PERSON:
            const newItem = {
                name:state.name,
                surname:state.surname,
                age: state.age,
                email: state.email,
                id: Math.trunc(Math.random()*1000)
            }
            if(localStorage.getItem('favs') === null){
                const localSt = []
                const newLocalSt = [...localSt,newItem];
                localStorage.setItem('favs',JSON.stringify(newLocalSt))
            }else{
                const oldLocalSt = JSON.parse(localStorage.getItem('favs'));
                const newLocalSt = [...oldLocalSt,newItem];
                localStorage.setItem('favs',JSON.stringify(newLocalSt))
            }
            if(state.name.trim() && state.surname.trim() && state.age.trim() && state.email.trim() !== ''){
                return {
                    name: '',
                    surname:'',
                    age:'',
                    email:'',
                    favourites: [...state.favourites,newItem]};
            }else {
                alert('please enter all your information ');
            }
            return state;
        case ADDREMOVE.REMOVE_PERSON:
            const localStr = localStorage.getItem("favs");
            const newLocalStr = JSON.parse(localStr).filter(
                (item) => item.id !== action.payload
            );
            localStorage.setItem("favs", JSON.stringify(newLocalStr));
            const newFavourites = state.favourites.filter((item) => item.id !== action.payload);
            return {...state,favourites:newFavourites};
        case HADNLECHANGE.HANDLE_NAME:
            return {...state,name:action.payload};
        case HADNLECHANGE.HANDLE_SURNAME:
            return {...state,surname:action.payload};
        case HADNLECHANGE.HANDLE_AGE:
            return {...state,age:action.payload};
        case HADNLECHANGE.HANDLE_EMAIL:
            return {...state,email:action.payload};
        default:
            return state;
    }
}

export default FormReducer;