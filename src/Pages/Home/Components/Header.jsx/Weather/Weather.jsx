import "./Weather.scss";
import { Moon } from "../../../../../assets/images/Home/index";

const Weather = () => {
	const date = new Date();
	const dates = [
		{ id: 1, time: "20:00", img: Moon, degree: 20 },
		{ id: 2, time: "21:00", img: Moon, degree: 19 },
		{ id: 3, time: "22:00", img: Moon, degree: 17 },
		{ id: 4, time: "23:00", img: Moon, degree: 15 },
		{ id: 5, time: "24:00", img: Moon, degree: 12 },
	];

	return (
		<div className="weather">
			<div className="weather__option">
				<div className="weather__option__select">
					<select name="" id="">
						<option value="">Ташкент</option>
						<option value="">Самарканд</option>
						<option value="">Фергана</option>
					</select>
				</div>
				<div className="weather__option__date">
					{date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
				</div>
			</div>

			<div className="weather__dates">
				<div className="weather__dates__left">
					<h3>21&deg;</h3>
					<div className="">
						<p>Partly Cloudy</p>
						<span>H:29° L:15°</span>
					</div>
				</div>
				<div className="weather__dates__right">
					{dates.map((item) => (
						<div key={item.id} className="weather__dates__right__card">
							<p>{item.time}</p>
							<img src={item.img} alt="" />
							<span>{item.degree}&deg; C</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Weather;
