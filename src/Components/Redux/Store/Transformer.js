import { combineReducers } from "@reduxjs/toolkit";
import { ValidationReducer } from "../Reducers/ValidationReducer";
import { CurrentUserReducer } from "../Reducers/CurrentUserReducer";
import { UserDetailsReducer } from "../Reducers/UserDetailsReducer";
import { DownloadScreenReducer } from "../Reducers/DownloadScreenReducer";
import { ConfFormSreenSectionReducer } from "../Reducers/ConfFormSreenSectionReducer";
import { PaperConfScreenReducer } from "../Reducers/PaperConfScreenReducer";

const Transformer = combineReducers({
    ValidationReducer: ValidationReducer,
    CurrentUserReducer: CurrentUserReducer,
    UserDetailsReducer: UserDetailsReducer,
    DownloadScreenReducer: DownloadScreenReducer,
    ConfFormSreenSectionReducer: ConfFormSreenSectionReducer,
    PaperConfScreenReducer: PaperConfScreenReducer,
  });

export default Transformer

