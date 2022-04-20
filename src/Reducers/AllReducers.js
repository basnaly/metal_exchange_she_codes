import { combineReducers } from "redux";

import ChartReducer from "../Reducers/ChartReducer";
import TopReducer from "../Reducers/TopReducer";

const AllReducers = combineReducers({
    TopReducer: TopReducer,
    ChartReducer: ChartReducer
});

export default AllReducers;
