import "./About.scss";
import {
	AboutSectionImg1,
	AboutSectionImg2,
	AboutSectionImg3,
} from "../../../../assets/images/Home/index";
import { t } from "i18next";
import { useEffect, useState } from "react";

const About = () => {
	const windowScreen = window.innerWidth;

	// useEffect(() => {
	// 	addEventListener("resize", function () {
	// 		if (windowScreen <= 700) {
	// 			window.location.reload();
	// 		}
	// 	});
	// }, []);

	return (
		<section className="about">
			<div className="about__cards container">
				<h2>{windowScreen >= 678 ? "" : t("home.about.title")}</h2>
				<div className="about__cards__card card1">
					<div className="about__cards__card__img">
						<img src={AboutSectionImg1} alt="" />
					</div>
					<div className="about__cards__card__text">
						<h2>{windowScreen <= 678 ? "" : t("home.about.title")}</h2>
						<p>{t("home.about.subTitle-1-1")}</p>
						<p>{t("home.about.subTitle-1-2")}</p>
					</div>
				</div>
				<div className="about__cards__card card2">
					<div className="about__cards__card__img">
						<img src={AboutSectionImg2} alt="" />
					</div>
					<div className="about__cards__card__text">
						<p>{t("home.about.subTitle-2-1")}</p>
						<p>{t("home.about.subTitle-2-2")}</p>
					</div>
				</div>
				<div className="about__cards__card card3">
					<div className="about__cards__card__img">
						<img src={AboutSectionImg3} alt="" />
					</div>
					<div className="about__cards__card__text">
						<p>{t("home.about.subTitle-3")}</p>
						<div className="about__cards__card__text__inside">
							<p>{t("home.about.more")}</p>
							<span>&#x203A;</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
