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
						initial={{ scale: 0, y: -50 }}
						animate={{ scale: 1, y: 0 }}
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
						initial={{ scale: 0, y: -50 }}
						animate={{ scale: 1, y: 0 }}
						transition={{
							delay: 0.3,
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
								src="/images/profile.jpeg"
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
								src="/images/profile.jpeg"
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
						className="text-white flex-none flex flex-col items-center h-1/4"
					>
						<motion.div
							className="font-thin"
							initial={{ y: "100vh" }}
							animate={{ y: 0 }}
							transition={{ delay: 0.3, stiffness: 120, type: "spring" }}
						>
							Hello, My name is{" "}
							<span className="font-bold">Piyaphat Pinyo.</span>
						</motion.div>
						<motion.div
							className="font-thin"
							initial={{ y: "100vh" }}
							animate={{ y: 0 }}
							transition={{ delay: 0.3, stiffness: 120, type: "spring" }}
						>
							I{"'"}m a pro<span className="font-bold">gamer.</span>
						</motion.div>
					</motion.div>
				</div>
				<Timeline />
			</div>
		</div>
	);
};

export default Home;
