import { t } from "i18next";
import "./Connect.scss";
import ReactInputMask from "react-input-mask";
import { useLocation } from "react-router-dom";

const Connect = () => {
	const location = useLocation();
	function beforeMaskedStateChange({ nextState }) {
		let { value } = nextState;
		if (value.endsWith("/")) {
			value = value.slice(0, -1);
		}

		return {
			...nextState,
			value,
		};
	}

	return (
		<div className="connect">
			<h1 className="connect__title">
				{location.pathname === "/about"
					? t("home.header.navTitle2")
					: t("contact.title")}
			</h1>
			<p className="connect__subTitle">{t("contact.subTitle")}</p>
			<form className="connect__form">
				<div className="connect__form__top">
					<label htmlFor="name">
						Полное имя
						<input type="text" name="" id="name" />
					</label>
					<label htmlFor="number">
						Номер телефона
						<ReactInputMask
							mask="+999 (99) 999-99-99"
							maskPlaceholder={null}
							beforeMaskedStateChange={beforeMaskedStateChange}
						/>
					</label>
				</div>
				<div className="connect__form__bottom">
					<p>Сообщение</p>
					<textarea name="" id="" cols="30" rows="10"></textarea>
				</div>
			</form>

			<div className="connect__btn">
				<button className="connect__btn-1">Отправить</button>
				<button className="connect__btn-2">Позвонить нам</button>
			</div>
		</div>
	);
};

export default Connect;
