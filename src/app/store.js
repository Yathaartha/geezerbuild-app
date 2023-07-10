import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../components/login/authSlice";
import assignmentSlice, {
  getAssignments,
} from "../components/assignments/assignmentSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  assignment: assignmentSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

store.dispatch(getAssignments());
