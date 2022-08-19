import { motion } from "framer-motion";
import React from "react";

//-------------------------------------------------------------------------//
// summary :  component types section
//-------------------------------------------------------------------------//
interface Props {}

const Item = ({ text, time, img, idx }: any) => (
	<motion.li
		initial={{ x: -200 }}
		whileInView={{ x: 0 }}
		viewport={{ once: true }}
		transition={{ type: "tween" }}
	>
		<div
			className="rounded-lg hover:rounded-md  ring ring-white/20 ring-offset-1 hover:ring-white/40 group p-8 py-10 hover:py-16 text-left bg-local bg-gray-500 bg-center  transition-all duration-1000 bg-no-repeat bg-blend-multiply bg-cover my-10  hover:bg-top hover:bg-blend-soft-light"
			style={{ backgroundImage: `url("${img}")` }}
		>
			<time className="text-sm font-normal leading-none text-gray-50 group-hover:text-gray-200 ">
				{time}
			</time>
			<h3 className="text-lg font-semibold text-gray-50 group-hover:text-gray-200">
				{text}
			</h3>
		</div>
	</motion.li>
);
//-------------------------------------------------------------------------//
// summary : component function section
//-------------------------------------------------------------------------//
const Timeline: React.FC<Props> = (props) => {
	const timeLines = [
		{
			time: "March 2013",
			text: "Graduated from Rabiab Pittaya School",
			img: "/images/timeline/rabiab.jpeg",
		},
		{
			time: "March 2017",
			text: "โอลิมปิควิชาการสาขาคอมพิวเตอร์ สอวน. ค่าย 2",
			img: "/images/timeline/ocamp_1.jpeg",
		},
		{
			time: "March 2018",
			text: "โอลิมปิควิชาการสาขาคณิตศาสตร์ สอวน. ค่าย 2",
			img: "/images/timeline/ocamp_2.jpeg",
		},
		{
			time: "May 2018",
			text: "โอลิมปิควิชาการสาขาคณิตศาสตร์ ผู้แทนศูนย์มหาวิทยาลัยเชียงใหม่",
			img: "/images/timeline/ocamp_3.jpeg",
		},
		{
			time: "August 2019",
			text: "Studying at Computer Engineering, Chulalongkorn University",
			img: "/images/timeline/chula.jpeg",
		},
		{
			time: "November 2020",
			text: "LINE HACKATHON 1st Runner up",
			img: "/images/timeline/linehack_01.jpeg",
		},
	];
	return (
		<div className="m-4">
			<motion.h2
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				viewport={{ once: true }}
				transition={{ type: "spring" }}
				className="text-white text-3xl font-thin "
			>
				About me
			</motion.h2>
			<motion.ol className="relative ">
				{timeLines.map((item, idx) => (
					<Item
						time={item.time}
						img={item.img}
						key={idx}
						idx={idx}
						text={item.text}
					/>
				))}
			</motion.ol>
		</div>
	);
};

export default Timeline;
