import "./Draftsmen.scss";
import {
	section41,
	section42,
	section43,
	section44,
	section45,
	section46,
	section47,
	section48,
	section49,
	section411,
	section412,
	section413,
	section414,
} from "../../../../assets/images/About/index";
import { t } from "i18next";

const Draft = () => {
	return (
		<section className="draft container">
			<div className="draft__card">
				<div className="draft__card__title">
					<h2>{t("about.title5")}</h2>
					<p>{t("about.title5-sub")}</p>
				</div>
				<div className="draft__card__img">
					<div className="">
						<img src={section41} alt="" />
					</div>
					<div className="draft__card__img__inside">
						<img src="" alt="" />
					</div>
					<div className="">
						<img src={section42} alt="" />
					</div>
				</div>
			</div>
			<div className="draft__card2">
				<h2>{t("about.title5")}</h2>
				<img src={section43} alt="" />
			</div>

			<div className="draft__card3">
				<h2>{t("about.title6")}</h2>
				<div className="draft__card3__img">
					<img src={section44} alt="" />
					<img src={section45} alt="" />
				</div>
			</div>

			<div className="draft__card3">
				<h2>{t("about.title7")}</h2>
				<div className="draft__card3__img">
					<img src={section46} alt="" />
					<img src={section47} alt="" />
				</div>
			</div>

			<div className="draft__card3">
				<h2>{t("about.title8")}</h2>
				<div className="draft__card3__img">
					<img src={section48} alt="" />
					<img src={section49} alt="" />
				</div>
			</div>

			<div className="draft__card2">
				<h2>{t("about.title9")}</h2>
				<img src={section411} alt="" />
			</div>

			<div className="draft__card2">
				<h3>{t("about.title10")}</h3>
				<img src={section412} alt="" />
			</div>

			<div className="draft__card4">
				<div className="draft__card4__content">
					<div className="draft__card4__left">
						<div className="draft__card4__left__text">
							<h3>
								Лященко Николай <span className="block">Григорьевич</span>
							</h3>
							<p>
								В 1968 году первый камень и “капсулу времени” в фундамент нового
								здания фабрики заложил командующий войсками Туркменского
								военного округа генерал армии Н. Лященко
							</p>
						</div>
						<div className="draft__card4__left__img">
							<img src={section413} alt="" />
						</div>
					</div>
					<div className="draft__card4__right">
						<img src={section414} alt="" />
						<div className="draft__card4__right__text">
							<p>
								Генерал армии{" "}
								<span className="block">Лященко Николай Григовьевич</span>{" "}
								(10.05.1910 г. - 10.10.2000 г.),{" "}
								<span className="block">выпускник ТВОКУ в 1932 г. 1965-69</span>
								гг. - командующий ТуркВО
							</p>
						</div>
					</div>
				</div>
				<div className="draft__card4__text">
					<p>
						В 1972 г. фабрика переведена на новое действительно наименование –
						«456-я Военно-картографическая фабрика».
					</p>
					<p>
						В 1970-90-е годы фабрика выполняла составительские и издательские
						работы по созданию топографических карт на обширные территории
						Центральной Азии.
					</p>
					<p>В 1990 году фабрика перешла на полный хозяйственный расчет.</p>
					<p>
						До 1 июня 1992 года фабрика обеспечивала войска Туркестанского
						военного округа топографическими и специальными картами всех
						масштабов.
					</p>
					<p>
						В соответствии с Указом Президента Республики Узбекистан от 13 июля
						1992 года № УП-439 Ташкентская военно-картографическая фабрика была
						переименована в Картографический центр Министерства обороны
						Республики Узбекистан.
					</p>
					<p>
						До 2005 года технологии по созданию топографических карт оставались
						неизменными, как правило, все процессы выполнялись вручную или
						полуавтоматическим способом. С этого момента в Картографическом
						центре были внедрены новые цифровые технологии. Таким образом, в
						Узбекистане появились первые электронно-цифровые топографические
						карты, что позволило в десятки-сотни раз ускорить процесс создания,
						подготовки к изданию и издание их практически в любых масштабах.
					</p>
					<p>
						С 2018 года производственные мощности центра в плановом порядке
						модернизируются и обновляются на более современные и ёмкие, что
						позволяет выполнять поставленные руководством задачи.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Draft;
