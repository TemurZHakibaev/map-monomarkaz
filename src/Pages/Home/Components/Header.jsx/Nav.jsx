import { LogoImg } from "../../../../assets/images/Home/index.js";
import "./Nav.scss";
// import i18n from "../../../../../i18next.js";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	const { t } = useTranslation();
	const [lang, setLang] = useState("");
	const [activeTitle, setActiveTitle] = useState(0);

	const handleLanguage = (lang) => {
		i18next.changeLanguage(lang);
		localStorage.setItem("lang", lang);
		setLang(lang);
	};

	useEffect(() => {
		const getLang = localStorage.getItem("lang");
		setLang(getLang);
	}, [lang]);

	const title = [
		{ id: 1, title: t("home.header.navTitle1"), path: "/" },
		{ id: 2, title: t("home.header.navTitle2"), path: "/about" },
		{ id: 3, title: t("home.header.navTitle3"), path: "/contact" },
	];

	return (
		<nav className="nav">
			<div className="nav__logo ">
				<div className="nav__logo__inside">
					<img src={LogoImg} alt="" />
					<select onChange={(e) => handleLanguage(e.target.value)} value={lang}>
						<option value="ru">Русский</option>
						<option value="en">English</option>
						<option value="uz">Uzbek</option>
					</select>
				</div>
			</div>
			<ul className="nav__list">
				{title.map((item) => (
					<li
						key={item.id}
						onClick={() => setActiveTitle(item.id)}
						className={`nav__list__inside ${
							activeTitle === item.id ? "activeTitle" : ""
						}`}
					>
						<Link to={`${item.path}`}>{item.title}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
