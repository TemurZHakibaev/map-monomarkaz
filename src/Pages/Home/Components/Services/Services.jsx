import { t } from "i18next";
import "./Services.scss";
import {
	ServicesSectionImg1,
	ServicesSectionImg2,
	ServicesSectionImg3,
	ServicesSectionImg4,
	ServicesSectionImg5,
} from "../../../../assets/images/Home/index";

const Services = () => {
	const service = [
		{
			id: 1,
			img: ServicesSectionImg1,
			title: "Картографические материалы различного назначения",
		},
		{
			id: 2,
			img: ServicesSectionImg2,
			title: "Картографические материалы различного назначения",
		},
		{
			id: 3,
			img: ServicesSectionImg3,
			title: "Картографические материалы различного назначения",
		},
		{
			id: 4,
			img: ServicesSectionImg4,
			title: "Картографические материалы различного назначения",
		},
		{
			id: 5,
			img: ServicesSectionImg5,
			title: "Картографические материалы различного назначения",
		},
	];

	return (
		<section className="services">
			<div className="container">
				<h2 className="services__title">{t("home.services.title")}</h2>
				<div className="services__card">
					{service.map((item) => (
						<div key={item.id} className="services__card__content">
							<div className="services__card__content__img">
								<img src={item.img} alt="" />
							</div>
							<div className="services__card__content__text">
								<h4>{item.title}</h4>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
