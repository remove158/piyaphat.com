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
			text: "WE SHARE",
			url: "https://bill.piyaphat.com",
			img: "/weshare.png",
			description:
				"เว็บไซต์สำหรับหารบิลกับเพื่อนแบบ realtime เราช่วยให้คุณสามารถจัดแจงค่าใช้จ่ายได้อย่างง่ายดาย",
		},
		{
			text: "OSM CRAFT",
			url: "https://minecraft.piyaphat.com",
			img: "/osmcraft.png",
			description: "จำลอง minecraft สร้างโดยใช้ Three.js พร้อมระบบฟิสิกส์",
		},
		{
			text: "DISCORD BOT",
			url: "https://discord.com/api/oauth2/authorize?client_id=805856620026265610&permissions=8&scope=applications.commands%20bot",
			img: "/discord.png",
			description: "discord  bot ฟังเพลงกับเพื่อน",
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
								<p className="max-w-xl font-extrabold text-lg tracking-tight leading-tight text-white">
									{item.text}
								</p>
								<p className="mb-5 max-w-xl  tracking-tight leading-tight text-white">
									{item.description}
								</p>
								<button
									type="button"
									className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
								>
									View Site
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
