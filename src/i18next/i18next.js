import i18n from "i18next";
// import XHR from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

// import config from "config";

const fallbackLng = ["uz"];
const availableLanguages = ["uz", "ru"];

const options = {
	fallbackLng,
	debug: false,
	whitelist: availableLanguages,

	interpolation: {
		escapeValue: false,
	},
	saveMissing: false,
};

export default () => {
	i18n.use(initReactI18next).init(options);

	return i18n;
};
