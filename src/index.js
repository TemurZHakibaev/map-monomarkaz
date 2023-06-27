import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import "./assets/style/mixin.scss";
import "./assets/style/font.css";
import store from "./Redux/store";
import { Provider } from "react-redux";
import "./i18next/i18next";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import translation_en from "./Services/I18NEX/En/translation.json";
import translation_uz from "./Services/I18NEX/Uz/translation.json";
import translation_ru from "./Services/I18NEX/Ru/translation.json";
import { BrowserRouter } from "react-router-dom";

import "./assets/style/font.css";

const changeLang = localStorage.getItem("lang");

i18next.init({
	interpolation: { escapeValue: false },
	lng: `${changeLang}`,
	resources: {
		en: {
			translation: translation_en,
		},
		uz: {
			translation: translation_uz,
		},
		ru: {
			translation: translation_ru,
		},
	},
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<I18nextProvider i18n={i18next}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</I18nextProvider>
	</Provider>
);
