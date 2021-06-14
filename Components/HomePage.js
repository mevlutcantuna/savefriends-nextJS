import { useDispatch, useSelector } from "react-redux";
import {ADDREMOVE, HADNLECHANGE} from "../Store/Constant/Constant";

function HomePage(props) {

  const name = useSelector((state) => state.FormReducer.name);
  const surname = useSelector((state) => state.FormReducer.surname);
  const age = useSelector((state) => state.FormReducer.age);
  const email = useSelector((state) => state.FormReducer.email);

  const dispatch = useDispatch();

  return (
    <div className={"homePage"}>
      <h1>Save Friends</h1>
      <div className={"homePage__form"}>
        <input
          onChange={(event) =>
            dispatch({
              type: HADNLECHANGE.HANDLE_NAME,
              payload: event.target.value,
            })
          }
          value={name}
          className={"homePage__form__input"}
          type={"text"}
          placeholder={"Name"}
        />
        <input
            onChange={(event) =>
                dispatch({
                    type: HADNLECHANGE.HANDLE_SURNAME,
                    payload: event.target.value,
                })
            }
          value={surname}
          className={"homePage__form__input"}
          type={"text"}
          placeholder={"Surname"}
        />
        <input
            onChange={(event) =>
                dispatch({
                    type: HADNLECHANGE.HANDLE_AGE,
                    payload: event.target.value,
                })
            }
          value={age}
          className={"homePage__form__input"}
          type={"number"}
          placeholder={"Age"}
        />
        <input
            onChange={(event) =>
                dispatch({
                    type: HADNLECHANGE.HANDLE_EMAIL,
                    payload: event.target.value,
                })
            }
          value={email}
          className={"homePage__form__input"}
          type={"text"}
          placeholder={"Email"}
        />
        <button onClick={() => dispatch({type:ADDREMOVE.ADD_PERSON})} className={"homePage__form__button"}>Save</button>
      </div>
    </div>
  );
}

export default HomePage;
