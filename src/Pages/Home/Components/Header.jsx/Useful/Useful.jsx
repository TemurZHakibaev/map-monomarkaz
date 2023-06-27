import { t } from "i18next";
import "./Useful.scss";
import { Link } from "react-browser-router";
import { Flag } from "../../../../../assets/images/Home/index";

const Useful = () => {
	const flag = [
		{ id: 1, img: Flag, number: Math.floor(Math.random() * 10) },
		{ id: 2, img: Flag, number: Math.floor(Math.random() * 10) },
		{ id: 3, img: Flag, number: Math.floor(Math.random() * 10) },
		{ id: 4, img: Flag, number: Math.floor(Math.random() * 10) },
		{ id: 5, img: Flag, number: Math.floor(Math.random() * 10) },
		{ id: 6, img: Flag, number: Math.floor(Math.random() * 10) },
		{ id: 7, img: Flag, number: Math.floor(Math.random() * 10) },
		{ id: 8, img: Flag, number: Math.floor(Math.random() * 10) },
		{ id: 9, img: Flag, number: Math.floor(Math.random() * 10) },
		{ id: 10, img: Flag, number: Math.floor(Math.random() * 10) },
		{ id: 11, img: Flag, number: Math.floor(Math.random() * 10) },
		{ id: 12, img: Flag, number: Math.floor(Math.random() * 10) },
		{ id: 13, img: Flag, number: Math.floor(Math.random() * 10) },
		{ id: 14, img: Flag, number: Math.floor(Math.random() * 10) },
		{ id: 15, img: Flag, number: Math.floor(Math.random() * 10) },
		{ id: 16, img: Flag, number: Math.floor(Math.random() * 10) },
		{ id: 17, img: Flag, number: Math.floor(Math.random() * 10) },
		{ id: 18, img: Flag, number: Math.floor(Math.random() * 10) },
		{ id: 19, img: Flag, number: Math.floor(Math.random() * 10) },
		{ id: 20, img: Flag, number: Math.floor(Math.random() * 10) },
		{ id: 21, img: Flag, number: Math.floor(Math.random() * 10) },
		{ id: 22, img: Flag, number: Math.floor(Math.random() * 10) },
		{ id: 23, img: Flag, number: Math.floor(Math.random() * 10) },
		{ id: 24, img: Flag, number: Math.floor(Math.random() * 10) },
	];

	return (
		<div className="useful">
			<div className="container">
				<div className="useful__content">
					<div className="useful__content__left">
						<h3>{t("home.header.navLink")}</h3>
						<div className="">
							<Link to={"https://mudofaa.uz/"}>mudofaa.uz</Link>
							<Link to={"https://uzspace.uz/ru"}>uzspace.uz</Link>
							<Link to={"https://kadastr.uz/ru"}>kadastr.uz</Link>
							<Link to={"https://gisinfo.ru/"}>gisinfo.ru</Link>
						</div>
					</div>
					<div className="useful__content__right">
						<div className="useful__content__right__text">
							<h3>{t("home.header.navVisitSite")} 25</h3>
							<h3>{t("home.header.navVisitSiteAll")} 2500</h3>
						</div>
						<div className="useful__content__right__flag">
							{flag.map((item) => (
								<div
									key={item.id}
									className="useful__content__right__flag__inside"
								>
									<img src={item.img} alt="" />
									<p>{item.number}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Useful;
