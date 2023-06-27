import "./Heroes.scss";
import {
	medal1,
	medal2,
	medal3,
	medal6,
	Person1Img,
} from "../../../../assets/images/About/index";

const Heroes = () => {
	const heroes = [
		{
			id: 1,
			img: [
				{ id: 1, img: medal1 },
				{ id: 2, img: medal2 },
				{ id: 3, img: medal3 },
			],
			name: "Папов",
			sureName: "Павел Николаевич",
			personImg: Person1Img,
		},
		{
			id: 2,
			img: [
				{ id: 1, img: medal1 },
				{ id: 2, img: medal3 },
			],
			name: "Папов",
			sureName: "Павел Николаевич",
			personImg: Person1Img,
		},
		{
			id: 3,
			img: [
				{ id: 1, img: medal1 },
				{ id: 2, img: medal2 },
				{ id: 3, img: medal3 },
			],
			name: "Папов",
			sureName: "Павел Николаевич",
			personImg: Person1Img,
		},
		{
			id: 4,
			img: [
				{ id: 1, img: medal1 },
				{ id: 2, img: medal2 },
			],
			name: "Папов",
			sureName: "Павел Николаевич",
			personImg: Person1Img,
		},
		{
			id: 5,
			img: [
				{ id: 1, img: medal1 },
				{ id: 2, img: medal2 },
				{ id: 3, img: medal3 },
			],
			name: "Папов",
			sureName: "Павел Николаевич",
			personImg: Person1Img,
		},
		{
			id: 6,
			img: [{ id: 1, img: medal1 }],
			name: "Папов",
			sureName: "Павел Николаевич",
			personImg: Person1Img,
		},
		{
			id: 7,
			img: [
				{ id: 1, img: medal1 },
				{ id: 2, img: medal2 },
				{ id: 3, img: medal3 },
				{ id: 4, img: medal6 },
			],
			name: "Папов",
			sureName: "Павел Николаевич",
			personImg: Person1Img,
		},
		{
			id: 8,
			img: [
				{ id: 1, img: medal1 },
				{ id: 2, img: medal2 },
				{ id: 3, img: medal6 },
				{ id: 4, img: medal3 },
			],
			name: "Папов",
			sureName: "Павел Николаевич",
			personImg: Person1Img,
		},
		{
			id: 9,
			img: [{ id: 1, img: medal1 }],
			name: "Папов",
			sureName: "Павел Николаевич",
			personImg: Person1Img,
		},
	];

	return (
		<section className="history">
			<div className="container">
				<div className="history__card">
					{heroes.map((item) => (
						<div key={item.id} className="history__card__inside">
							<div className="history__card__inside__left">
								<img src={item.personImg} alt="" />
								<p>{item.name}</p>
								<p>{item.sureName}</p>
							</div>
							<div className="history__card__inside__right">
								{item.img.map((img) => (
									<div
										key={img.id}
										className={`${
											img.id === 1 ? null : "leftImg"
										} history__card__inside__right__img`}
									>
										<img src={img.img} alt="" />
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Heroes;
