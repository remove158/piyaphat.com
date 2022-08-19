import Timeline from "@components/Timeline";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<div className="bg-[#082424] h-full pb-6">
			<div className="container mx-auto flex flex-col min-h-screen h-full">
				<div className=" flex justify-between p-4">
					<motion.h1
						className=" text-white text-xl font-bold"
						initial={{ y: -100 }}
						animate={{ y: 0 }}
						transition={{
							delay: 0.2,
							type: "spring",
							stiffness: 120,
						}}
					>
						PORTFOLIO
					</motion.h1>
					<motion.span
						className="text-lime-200 font-bold"
						initial={{ y: -100 }}
						animate={{ y: 0 }}
						transition={{
							delay: 0.4,
							type: "spring",
							stiffness: 120,
						}}
					>
						<Link href="/contact">
							<motion.button
								whileHover={{
									scale: 1.1,
									color: "#bef264",
									transition: {
										repeat: Infinity,
										repeatType: "reverse",
										duration: 0.3,
									},
								}}
							>
								CONTACTS
							</motion.button>
						</Link>
					</motion.span>
				</div>
				<div className="items-center flex flex-col justify-between  my-12 gap-12">
					<motion.div
						className="w-3/4 max-w-md "
						whileHover={{
							rotate: [0, -2, 2],
							transition: {
								repeat: Infinity,
								repeatType: "reverse",
								duration: 0.5,
							},
						}}
					>
						<div className="relative">
							<motion.img
								initial={{ rotateY: -180, scale: 0.4 }}
								animate={{ rotateY: 360, scale: 1 }}
								transition={{
									delay: 0.2,
									mass: 1,
									damping: 8,
									stiffness: 80,
									duration: 0.8,
									type: "spring",
								}}
								className="w-full rounded-lg shadow-lg shadow-transparent"
								src="https://scontent.fbkk22-8.fna.fbcdn.net/v/t1.6435-9/131929586_2838394693063109_7824428835215953214_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE9BKVherPYX12liT_xkmZS2qXpixYVJ0rapemLFhUnSl-F75UsgPJ2GWuaDfX1l5VcczFPGqvQpVV4GOih8REa&_nc_ohc=N1g2dS7gmlYAX9ZQ1I1&_nc_ht=scontent.fbkk22-8.fna&oh=00_AT-wGDzQXNwGe-QMu6UUUg_h7s3M2T-Yt900HwGOGr5Ksw&oe=6320C125"
							/>
							<motion.img
								initial={{ rotateY: -180, scale: 0.4 }}
								animate={{ rotateY: 0, scale: 1.1 }}
								transition={{
									delay: 0.2,
									mass: 1,
									damping: 8,
									stiffness: 80,
									duration: 0.8,
									type: "spring",
								}}
								className="w-full top-0 shadow-lg shadow-transparent absolute blur-xl opacity-20 "
								src="https://scontent.fbkk22-8.fna.fbcdn.net/v/t1.6435-9/131929586_2838394693063109_7824428835215953214_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE9BKVherPYX12liT_xkmZS2qXpixYVJ0rapemLFhUnSl-F75UsgPJ2GWuaDfX1l5VcczFPGqvQpVV4GOih8REa&_nc_ohc=N1g2dS7gmlYAX9ZQ1I1&_nc_ht=scontent.fbkk22-8.fna&oh=00_AT-wGDzQXNwGe-QMu6UUUg_h7s3M2T-Yt900HwGOGr5Ksw&oe=6320C125"
							/>
						</div>
					</motion.div>
					<Link href="/showcase">
						<motion.button
							className="py-3  w-3/4 max-w-md flex-none border border-lime-200 text-lime-200 rounded-lg"
							initial={{ scale: 0, y: 50, rotate: 180 }}
							animate={{ rotate: 360, scale: 1, y: 0 }}
							whileHover={{
								scale: 1.1,
								color: "#bef264",
								borderColor: "#bef264",
								transition: {
									repeat: Infinity,
									repeatType: "reverse",
									duration: 0.3,
								},
							}}
							transition={{
								duration: 0.3,
								delay: 0.6,
							}}
						>
							SHOW CASE
						</motion.button>
					</Link>
					<motion.div
						whileHover={{
							y: -15,
							transition: {
								repeat: Infinity,
								repeatType: "reverse",
								duration: 1,
							},
						}}
						className="text-white flex-none flex flex-col items-center h-1/4"
					>
						<motion.div
							className="font-thin"
							initial={{ y: "100vh" }}
							animate={{ y: 0 }}
							transition={{ delay: 0.3, stiffness: 120, type: "spring" }}
						>
							Hello, My name is{" "}
							<span className="font-normal">Piyaphat Pinyo.</span>
						</motion.div>
						<motion.div
							className="font-thin"
							initial={{ y: "100vh" }}
							animate={{ y: 0 }}
							transition={{ delay: 0.3, stiffness: 120, type: "spring" }}
						>
							I{"'"}m a pro<span className="font-normal">gamer.</span>
						</motion.div>
					</motion.div>
				</div>
				<Timeline />
			</div>
		</div>
	);
};

export default Home;
