import { t } from "i18next";
import "./Footer.scss";
import { FooterLogoImg } from "../../../../assets/images/Home/index";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__left">
					<img src={FooterLogoImg} alt="" />
					<p>{t("home.footer.subTitle")}</p>
				</div>
				<div className="footer__middle">
					<h3>{t("home.footer.title1")}</h3>
					<ul>
						<li>
							<div>
								<BsTelephone size={16} />
								<h4>{t("home.footer.duty")}</h4>
							</div>
							<p>+998 71 233-17-37</p>
						</li>
						<li>
							<div className="">
								<BsTelephone size={16} />
								<h4>{t("home.footer.bookkeeping")}</h4>
							</div>
							<p>+998 71 233-43-44</p>
						</li>
						<li>
							<div className="">
								<BsTelephone size={16} />
								<h4>{t("home.footer.tg")}</h4>
							</div>
							<p>+998 99 353-49-22</p>
						</li>
						<li>
							<span>
								<CiMail size={16} />
							</span>
							<p>mapmarkaz@gmail.uz</p>
						</li>
						<li>
							<span>
								<MdOutlineLocationOn size={16} />
							</span>
							<p>
								100060, г. Ташкент, Мирабадский район, ул. Яхъё Гуломова, 93.
							</p>
						</li>
					</ul>
				</div>
				<div className="footer__right">
					<h3>{t("home.footer.title2")}</h3>
					<div className="footer__right__content">
						<div className="footer__right__content__inside">
							<h4>Банк:</h4>
							<p>Ташкентский филиал отделения Ипотека-банк АТИБ</p>
						</div>
						<div className="footer__right__content__inside">
							<h4>Р/С:</h4>
							<p>20203000000447954002</p>
						</div>
						<div className="footer__right__content__inside">
							<h4>ИНН:</h4>
							<p>201052239</p>
						</div>
						<div className="footer__right__content__inside">
							<h4>ОКОНХ :</h4>
							<p>19400</p>
						</div>
						<div className="footer__right__content__inside">
							<h4>ОКЕД :</h4>
							<p>18120</p>
						</div>
						<div className="footer__right__content__inside">
							<span>Скопировать</span>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__bottom">
				<div className="footer__bottom__inside">
					<p>Copyright © 2022 mapmarkaz</p>
					<a href="#">
						<IoIosArrowUp size={18} />
					</a>
					<p>
						Developer by <span>Napa</span>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
