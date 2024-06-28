import {configureStore} from "@reduxjs/toolkit";
import auth from "~/store/auth";
// import modal from "~/store/modal";
import appearance from "~/store/appearance";

const store = configureStore({
	reducer: {
		auth,

		appearance,
	}
})

export default store