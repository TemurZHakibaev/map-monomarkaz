import { t } from "i18next";
import "./Finance.scss";
import { CiSearch } from "react-icons/ci";
import { TiDownload } from "react-icons/ti";
import { AiOutlineArrowDown, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";

const Finance = () => {
	const [activeLi, setActiveLi] = useState(1);
	const [activeWrapper, setActiveWrapper] = useState(0);
	console.log(activeLi);

	const number = [
		{ id: 1, number: 1 },
		{ id: 2, number: 2 },
		{ id: 3, number: 3 },
		{ id: 4, number: 4 },
	];

	const wrapper = (id) => {
		if (id === activeWrapper) {
			return setActiveWrapper(null);
		}
		setActiveWrapper(id);
	};

	const vacancy = [
		{ id: 1, title: "home.ads.tender" },
		{ id: 2, title: "home.ads.social" },
		{ id: 3, title: "home.ads.vacancy" },
	];

	return (
		<section className="finance">
			<div className="container">
				<h2 className="finance__title">{t("home.finance.title")}</h2>
				<div className="finance__report">
					<div className="finance__report__top">
						<div className="finance__report__top__select">
							<h4>{t("home.finance.year")}</h4>
							<div className="finance__report__top__select__inside">
								<select name="" id="">
									<option value="">2022</option>
									<option value="">2023</option>
									<option value="">2024</option>
								</select>
							</div>
						</div>
						<div className="finance__report__top__year">
							<h4>{t("home.finance.quarter")}</h4>
							<div className="finance__report__top__year__inside">
								{number.map((item) => (
									<span
										key={item.id}
										onClick={() => setActiveLi(item.id)}
										className={` ${activeLi === item.id ? "active" : ""}`}
									>
										{item.number}
									</span>
								))}
								<button className="finance__report__top__year__inside__btn">
									<p>Поиск</p>
									<CiSearch size={18} color="#fff" />
								</button>
							</div>
						</div>
					</div>
					<div className="finance__report__line"></div>
					<div className="finance__report__bottom">
						<p>{t("home.finance.fileName")}.pdf</p>
						<div className="finance__report__bottom__btn1">
							<p>{t("home.finance.download")} PDF</p>{" "}
							<span>
								<TiDownload size={18} color="#fff" />
							</span>
						</div>
						<div className="finance__report__bottom__btn2">
							<p>{t("home.finance.look")} </p>
							<span>
								<AiOutlineEye size={18} color="#fff" />
							</span>
						</div>
					</div>
				</div>
				<div className="finance__announcement">
					<h2 className="finance__announcement__title">
						{t("home.ads.title")}
					</h2>

					{vacancy.map((item) => (
						<div
							onClick={() => wrapper(item.id)}
							key={item.id}
							className={"finance__announcement__inside"}
						>
							<div className="finance__announcement__inside__title">
								<h3>{t(`${item.title}`)}</h3>
								<AiOutlineArrowDown
									className={` finance__announcement__inside__title__inside ${
										activeWrapper === item.id ? "rotate" : ""
									}`}
									size={18}
								/>
							</div>
							<div
								className={`finance__announcement__inside--btns ${
									activeWrapper === item.id ? "active" : "nonActive"
								}`}
							>
								<div
									className={`wrapper ${
										activeWrapper === item.id ? "wrapper-bottom" : ""
									}`}
								>
									<div className="btns1">
										<p>{t("home.finance.download")} PDF</p>{" "}
										<span>
											<TiDownload size={17} color="#fff" />
										</span>
									</div>
									<div className="btns2">
										<p>{t("home.finance.look")}</p>
										<span>
											<AiOutlineEye size={17} color="#fff" />
										</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Finance;
