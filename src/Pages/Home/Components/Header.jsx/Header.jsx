import "./Header.scss";
import {
	LogoImg,
	HeaderMagazineImg,
	Globus,
	Earth,
} from "../../../../assets/images/Home/index.js";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import i18next from "i18next";
import "./Header.scss";
import { Link } from "react-browser-router";
import Useful from "./Useful/Useful";
import Weather from "./Weather/Weather";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";
import Info from "./Info/Info";
import Connect from "../../../Contact/Connect/Connect";

const Header = () => {
	const location = useLocation();
	const { t } = useTranslation();
	const [lang, setLang] = useState("");
	const [activeTitle, setActiveTitle] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	const handleLanguage = (lang) => {
		i18next.changeLanguage(lang);
		localStorage.setItem("lang", lang);
		setLang(lang);
	};

	useEffect(() => {
		const getLang = localStorage.getItem("lang");
		setLang(getLang);
	}, [lang, location, activeTitle]);

	const activeLi = (id) => {
		setActiveTitle(id);
	};

	const title = [
		{ id: 1, title: t("home.header.navTitle1"), path: "/" },
		{ id: 2, title: t("home.header.navTitle2"), path: "/about" },
		{ id: 3, title: t("home.header.navTitle3"), path: "/contact" },
	];

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header>
			<div
				className={`header ${
					location.pathname === "/about" ? "aboutHeader" : ""
				}`}
			>
				<div className="container">
					<div className="header__left">
						<div className="header__left__logo">
							<img src={LogoImg} alt="" />
							<select
								onChange={(e) => handleLanguage(e.target.value)}
								value={lang}
							>
								<option value="ru">Русский</option>
								<option value="en">English</option>
								<option value="uz">Uzbek</option>
							</select>
							<span
								className={`${isOpen ? "activeNav" : ""} navbar`}
								onClick={() => setIsOpen(!isOpen)}
							>
								{isOpen ? (
									<AiOutlineClose size={20} color="#000" />
								) : (
									<HiOutlineMenu size={20} color="#000" />
								)}
							</span>
						</div>
						{location.pathname === "/" ? (
							<>
								<div className="header__left__text">
									<h1 className="header__left__text__title">
										{t("home.header.navTitle")}
									</h1>
									<p className="header__left__text__subTitle">
										{t("home.header.navSubTitle")}
									</p>
								</div>
								<div className="header__left__services">
									<div className="header__left__services__text">
										<h4>{t("home.header.navHelp")}</h4>
										<button>{t("home.header.navBtn")}</button>
									</div>
									<div className="header__left__services__img">
										<img src={HeaderMagazineImg} alt="" />
									</div>
								</div>
							</>
						) : (
							<Connect />
						)}
					</div>
				</div>
				<div className="header__right">
					<nav>
						<ul
							className={` header__right__list ${
								isOpen ? "activeNavBar" : ""
							} `}
						>
							{title.map((item) => (
								<li className={`header__right__list__inside`}>
									<Link
										onClick={() => activeLi(item.id)}
										className={`${
											activeTitle === item.id ? "activeTitle" : ""
										}`}
										key={item.id}
										to={`${item.path}`}
									>
										{item.title}
									</Link>
								</li>
							))}
						</ul>

						<div className="header__right__img">
							<img src={Globus} className="rotation" />
						</div>
					</nav>
					{location.pathname === "/" ? <Weather /> : <Info />}
				</div>
			</div>
			{location.pathname === "/" ? <Useful /> : null}
		</header>
	);
};

export default Header;
