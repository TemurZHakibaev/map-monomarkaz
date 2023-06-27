import "./Info.scss";
import { BsTelephone, BsGeoAlt } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import {
	instagram,
	tg,
	tikTok,
	vk,
	facebook,
} from "../../../../../assets/images/Contact/index";
import { t } from "i18next";

const Info = () => {
	return (
		<div className="info">
			<h3 className="info__title">Контактная информация</h3>
			<ul className="info__list">
				<li>
					<div className="">
						<BsTelephone color="#fff" size={20} /> {t("home.footer.duty")}
					</div>
					<p>+998 71 233-17-37</p>
				</li>
				<li>
					<div className="">
						<BsTelephone color="#fff" size={20} />{" "}
						{t("home.footer.bookkeeping")}
					</div>
					<p>+998 71 233-43-44</p>
				</li>
				<li>
					<div className="">
						<BsTelephone color="#fff" size={20} /> {t("home.footer.tg")}
					</div>
					<p>+998 99 353-49-22</p>
				</li>
				<li>
					<AiOutlineMail color="#fff" size={20} />
					<p>mapmarkaz@umail.uz</p>
				</li>
				<li>
					<BsGeoAlt color="#fff" size={20} />
					<p>100060, г. Ташкент, Мирабадский район, ул. Яхъё Гуломова, 93.</p>
				</li>
			</ul>

			<div className="info__socialMedia">
				<div className="info__socialMedia__content">
					<img
						className={`info__socialMedia__content__img instagram`}
						src={instagram}
						alt=""
					/>
				</div>
				<div className="info__socialMedia__content facebook">
					<img
						className={`info__socialMedia__content__img`}
						src={facebook}
						alt=""
					/>
				</div>
				<div className="info__socialMedia__content tg">
					<img className={`info__socialMedia__content__img`} src={tg} alt="" />
				</div>
				<div className="info__socialMedia__content vk">
					<img className={`info__socialMedia__content__img`} src={vk} alt="" />
				</div>
				<div className="info__socialMedia__content tikTok">
					<img
						className={`info__socialMedia__content__img`}
						src={tikTok}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Info;
