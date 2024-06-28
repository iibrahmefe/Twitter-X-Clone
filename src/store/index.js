import {configureStore} from "@reduxjs/toolkit";
import auth from "~/store/auth";
import modal from "~/store/modal";
import appearance from "~/store/appearance";
import store from "store";

const Store = configureStore({
	reducer: {
		auth,
		modal,
		appearance,
	}
})

export default store