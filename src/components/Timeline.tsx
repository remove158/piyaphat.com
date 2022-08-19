import { motion } from "framer-motion";
import React from "react";

//-------------------------------------------------------------------------//
// summary :  component types section
//-------------------------------------------------------------------------//
interface Props {}

const Item = ({ text, time, img }: any) => (
	<motion.li
		className="rounded-md  group p-12 text-left bg-local bg-gray-500 bg-center bg-no-repeat bg-cover transition-all my-8 hover:bg-[center_top_-10rem]"
		initial={{ x: -200 }}
		whileInView={{ x: 0 }}
		viewport={{ once: true }}
		transition={{ type: "spring" }}
		style={{ backgroundImage: `url("${img}")` }}
	>
		<time className="text-sm font-normal leading-none text-gray-100 group-hover:text-gray-800 group-hover:font-bold">
			{time}
		</time>
		<h3 className="text-lg font-semibold text-white group-hover:text-gray-600">
			{text}
		</h3>
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
					<Item time={item.time} img={item.img} idx={idx} text={item.text} />
				))}
			</motion.ol>
		</div>
	);
};

export default Timeline;
