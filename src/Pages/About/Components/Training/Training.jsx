import "./Training.scss";
import {
	section31,
	section32,
	section33,
	section34,
	section35,
	section36,
} from "../../../../assets/images/About/index";
import { t } from "i18next";

const Training = () => {
	return (
		<section className="training container">
			<div className="training__card">
				<h3 className="training__title">{t("about.title4")}</h3>
				<div className="training__right">
					<img src={section31} alt="" />
					<img src={section32} alt="" />
				</div>
			</div>
			<div className="training__card">
				<h3 className="training__title">{t("about.title5")}</h3>
				<div className="training__right">
					<img src={section33} alt="" />
					<img src={section34} alt="" />
				</div>
			</div>
			<div className="training__card">
				<h3 className="training__title">{t("about.title6")}</h3>
				<div className="training__right">
					<img src={section35} alt="" />
					<img src={section36} alt="" />
				</div>
			</div>

			<div className="training__text">
				<p>{t("about.subTitle-4-1")}</p>
				<p>{t("about.subTitle-4-2")}</p>
				<p>{t("about.subTitle-4-3")}</p>
				<p>{t("about.subTitle-4-4")}</p>
			</div>
		</section>
	);
};

export default Training;
