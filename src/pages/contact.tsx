import { motion } from "framer-motion";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Home: NextPage = () => {
	const router = useRouter();
	const contacts = [
		{ text: "Github", url: "https://github.com/remove158" },
		{
			text: "Linkedin",
			url: "https://th.linkedin.com/in/piyaphat-pinyo-446a74224",
		},
		{ text: "Facebook", url: "https://www.fb.com/piyaphat.py" },
		{ text: "Instagram", url: "https://www.instagram.com/plangton.n/" },
	];
	return (
		<div className="bg-[#082424] h-full">
			<div className="container mx-auto flex flex-col min-h-screen h-full">
				<div className="flex-none flex justify-between p-4">
					<motion.div
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
					</motion.div>
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
						<Link href="/">
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
								HOME
							</motion.button>
						</Link>
					</motion.span>
				</div>
				<div className="flex-1 flex flex-col items-center justify-center text-white">
					{contacts.map((contact, idx) => (
						<motion.button
							key={idx}
							onClick={() => router.push(contact.url)}
							className="my-4 py-2  rounded-md border  w-3/4"
							initial={{ x: "-100vw" }}
							animate={{ x: 0 }}
							whileHover={{
								scale: 1.1,
								color: "#bef264",
								borderColor: "#bef264",
								transition: {
									type: "spring",
									stiffness: 300,
									duration: 0.2,
								},
							}}
							transition={{ delay: 0.2 * (idx + 1), type: "spring" }}
						>
							{contact.text}
						</motion.button>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
