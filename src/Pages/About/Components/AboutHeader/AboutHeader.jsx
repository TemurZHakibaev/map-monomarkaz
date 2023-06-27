// import "./AboutHeader.scss";
import { LogoImg, Globus } from "../../../../assets/images/Home/index";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import i18next from "i18next";
import { Link } from "react-router-dom";

const AboutHeader = () => {
	const { t } = useTranslation();
	const [lang, setLang] = useState("");
	const [activeTitle, setActiveTitle] = useState(2);

	useEffect(() => {
		const getLang = localStorage.getItem("lang");
		setLang(getLang);
	}, [lang]);

	const handleLanguage = (lang) => {
		i18next.changeLanguage(lang);
		localStorage.setItem("lang", lang);
		setLang(lang);
	};

	const title = [
		{ id: 1, title: t("home.header.navTitle1"), path: "/" },
		{ id: 2, title: t("home.header.navTitle2"), path: "/about" },
		{ id: 3, title: t("home.header.navTitle3"), path: "/contact" },
	];

	return (
		<header className="aboutHeader">
			<div className="container">
				<div className="aboutHeader__left">
					<div className="aboutHeader__left__logo">
						<img src={LogoImg} alt="" />
						<select
							onChange={(e) => handleLanguage(e.target.value)}
							value={lang}
						>
							<option value="ru">Русский</option>
							<option value="en">English</option>
							<option value="uz">Uzbek</option>
						</select>
					</div>
					<h2 className="aboutHeader__left__title">{t("about.title")}</h2>
				</div>
				<nav className="aboutHeader__right">
					<ul className="aboutHeader__right__list">
						{title.map((item) => (
							<li onClick={() => setActiveTitle(item.id)} key={item.id}>
								<Link to={`${item.path}`}>
									<p
										className={`${
											activeTitle === item.id ? "activeTitle" : ""
										}`}
									>
										{item.title}
									</p>
								</Link>
							</li>
						))}
					</ul>
					<div className="aboutHeader__right__img">
						<img src={Globus} alt="" />
					</div>
				</nav>
			</div>
		</header>
	);
};

export default AboutHeader;
