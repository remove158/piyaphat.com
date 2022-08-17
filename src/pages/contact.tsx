import { LinkPreview } from "@dhaiwat10/react-link-preview";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Home: NextPage = () => {
	const colSpan = [
		"md:col-span-3",
		"md:col-span-2",
		"md:col-span-2",
		"md:col-span-3",
	];
	const items = [
		{
			text: "GITHUB",
			url: "https://github.com/remove158",
			img: "https://repository-images.githubusercontent.com/329529820/18c8b280-5748-11eb-9cb3-dac2176b97ec",
		},
		{
			text: "LINKEDIN",
			url: "https://th.linkedin.com/in/piyaphat-pinyo-446a74224",
			img: "https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw",
		},
		{
			text: "FACEBOOK",
			url: "https://www.fb.com/piyaphat.py",
			img: "https://www.thumbsup.in.th/wp-content/uploads/2020/03/fb-hero-image-001.jpeg",
		},
		{
			text: "INSTAGRAM",
			url: "https://www.instagram.com/plangton.n/",
			img: "https://www.blognone.com/sites/default/files/externals/aa0e6da1a1e76da8965123c19184e582.png",
		},
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
				<div className="flex-1 flex flex-col items-center text-white px-4 group">
					<div className="grid grid-cols-1 md:grid-cols-5 w-full gap-4">
						{items.map((item, idx) => (
							<motion.a
								href={item.url}
								key={idx}
								initial={{ x: "-100vw" }}
								animate={{ x: 0 }}
								transition={{ delay: 0.3 * (idx + 1), type: "spring" }}
								className={`card ${colSpan[idx % 4]}`}
								style={{ backgroundImage: `url("${item.img}")` }}
							>
								<p className="mb-5 max-w-xl font-extrabold tracking-tight leading-tight text-white">
									{item.text}
								</p>

								<button
									type="button"
									className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
								>
									CONTACT ME
								</button>
							</motion.a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
