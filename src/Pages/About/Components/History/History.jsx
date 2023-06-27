import "./History.scss";
import {
	section11,
	section12,
	section21,
	section22,
	Person1Img,
	Person2Img,
	Person3Img,
	Person4Img,
	Person5Img,
} from "../../../../assets/images/About/index";
import { t } from "i18next";

const History = () => {
	const soldat1 = [
		{ id: 1, img: Person1Img, rank: "Генерал-майор", name: "И.А.Бубнов" },
		{ id: 2, img: Person2Img, rank: "Полковник", name: "А.А.Понырко" },
		{ id: 3, img: Person3Img, rank: "Полковник", name: "В.А.Словцев" },
	];
	const soldat2 = [
		{ id: 1, img: Person4Img, rank: "Полковник", name: "Д.С.Граменицкий" },
		{ id: 2, img: Person5Img, rank: "Полковник", name: "Н.Н.Аксенов" },
	];

	return (
		<section className="heroes">
			<div className="container">
				<div className="heroes__top">
					<div className="heroes__top__left">
						<img src={section11} alt="" />
						<img src={section12} alt="" />
					</div>
					<div className="heroes__top__right">
						<h1 className="heroes__top__right__title">{t("about.title2")}</h1>
						<p className="heroes__top__right__subTitle">
							{t("about.subTitle1-1")}
						</p>
						<p className="heroes__top__right__subTitle mt-4">
							{t("about.subTitle1-2")}
						</p>
					</div>
				</div>
				<div className="heroes__middle">
					<div className="heroes__middle__top">
						<div className="heroes__middle__top__img">
							{soldat1.map((item) => (
								<div key={item.id} className="heroes__middle__top__img__inside">
									<img src={item.img} alt="" />
									<p>{item.rank}</p>
									<p>{item.name}</p>
								</div>
							))}
						</div>
						<div className="heroes__middle__top__text">
							<p>{t("about.subTitle-2-1")}</p>
							<p className="mt-4">{t("about.subTitle-2-2")}</p>
						</div>
					</div>
					<div className="heroes__middle__bottom">
						<div className="heroes__middle__top gap">
							<div className="heroes__middle__top__img">
								{soldat2.map((item) => (
									<div
										key={item.id}
										className="heroes__middle__top__img__inside"
									>
										<img src={item.img} alt="" />
										<p>{item.rank}</p>
										<p>{item.name}</p>
									</div>
								))}
							</div>
							<div className="heroes__middle__top__text">
								<p>{t("about.subTitle-3-1")}</p>
								<p className="mt-4">{t("about.subTitle-3-2")}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="heroes__bottom">
					<div className="heroes__bottom__img">
						<img src={section21} alt="" />
						<img src={section22} alt="" />
					</div>
					<div className="heroes__bottom__text">
						<p>{t("about.subTitle-4-1")}</p>
						<p className="mt-4">{t("about.subTitle-4-2")}</p>
						<p className="mt-4">{t("about.subTitle-4-3")}</p>
						<p className="mt-4">{t("about.subTitle-4-4")}</p>
						<p className="mt-4">{t("about.subTitle-4-5")}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default History;
