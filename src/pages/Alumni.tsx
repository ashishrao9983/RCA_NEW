import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const alumni2023 = [
	{
		name: 'ACP.Kamal Sharma',
		image: 'https://res.cloudinary.com/dy8vdilqu/image/upload/v1761137213/WhatsApp_Image_2025-10-22_at_18.14.25_7e7c4c7d_t1krmb.jpg',
		batch: '2023'
	},
	{
		name: 'Dr.Gaurav Yadav',
		image: 'https://res.cloudinary.com/dy8vdilqu/image/upload/v1761137214/WhatsApp_Image_2025-10-22_at_18.14.26_03c17c44_pyoxa2.jpg',
		batch: '2023'
	},
	{
		name: 'Ankit Goyal',
		image: 'https://res.cloudinary.com/dy8vdilqu/image/upload/v1761137213/WhatsApp_Image_2025-10-22_at_18.14.29_859f00c7_gudkwk.jpg',
		batch: '2023'
	},
	{
		name: 'Dr.Nidahi Yadav',
		image: 'https://res.cloudinary.com/dy8vdilqu/image/upload/v1761137213/WhatsApp_Image_2025-10-22_at_18.14.25_44a2d3a5_xpbcqy.jpg',
		batch: '2023'
	},
	{
		name: 'IES.Amit Suthar',
		image: 'https://res.cloudinary.com/dy8vdilqu/image/upload/v1761137212/WhatsApp_Image_2025-10-22_at_18.14.27_21aa3868_pmhk3y.jpg',
		batch: '2023'
	},
	{
		name: 'Bhavani Sharma',
		image: 'https://res.cloudinary.com/dy8vdilqu/image/upload/v1761137209/WhatsApp_Image_2025-10-22_at_18.15.22_1507dd19_pxfci9.jpg',
		batch: '2023'
	},
];

const alumni2024 = [
	{
		name: 'Sagar Verma',
		image: 'https://res.cloudinary.com/dy8vdilqu/image/upload/v1761137671/WhatsApp_Image_2025-10-22_at_18.17.22_69d0f55e_owpzdy.jpg',
		batch: '2024'
	},
	{
		name: 'Ajay Meena',
		image: 'https://res.cloudinary.com/dy8vdilqu/image/upload/v1761137789/WhatsApp_Image_2025-10-22_at_18.26.06_591d97ea_fbhr3r.jpg',
		batch: '2024'
	},
	{
		name: 'Kavya Bhardwaj',
		image: 'https://res.cloudinary.com/dy8vdilqu/image/upload/v1761138719/WhatsApp_Image_2025-10-22_at_18.25.35_e2e6ab3c_jso4y4.jpg',
		batch: '2024'
	},
	{
		name: 'Pankaj Meena',
		image: 'https://res.cloudinary.com/dy8vdilqu/image/upload/v1761137936/WhatsApp_Image_2025-10-22_at_18.28.31_2a8fd965_d1nzdq.jpg',
		batch: '2024'
	}
];

interface AlumniCardProps {
	name: string;
	image: string;
	batch: string;
}

function AlumniCard({ name, image, batch }: AlumniCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true }}
			whileHover={{ y: -10 }}
			transition={{ duration: 0.3 }}
			className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
		>
			<div className="relative h-80 overflow-hidden">
				<img
					src={image}
					alt={name}
					className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
				/>
				{/* batch badge removed as requested */}
			</div>
			<div className="p-6 text-center">
				<h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
				{/* batch line removed as requested */}
			</div>
		</motion.div>
	);
}

export default function Alumni() {
	return (
		<div className="min-h-screen bg-gray-50">
			<section className="relative py-20 px-4 bg-gradient-to-br from-saffron via-maroon to-red-900 overflow-hidden">
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
					<div className="absolute bottom-10 left-20 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse"></div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="relative z-10 text-center max-w-4xl mx-auto"
				>
					<div className="inline-flex items-center justify-center mb-6">
						<GraduationCap size={80} className="text-gold" />
					</div>
					<h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
						Our Alumni
					</h1>
					<div className="w-32 h-1 bg-gold mx-auto mb-6"></div>
					<p className="text-xl text-cream">
						Celebrating the legacy of RCA members who have made their mark
					</p>
				</motion.div>
			</section>

			<section className="py-20 px-4 bg-white">
				<div className="max-w-7xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-saffron to-maroon bg-clip-text text-transparent">
						</h2>
						<div className="w-32 h-1 bg-gradient-to-r from-saffron to-maroon mx-auto mb-16"></div>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
							{alumni2024.map((alumni) => (
								<AlumniCard key={alumni.name} {...alumni} />
							))}
						</div>
					</motion.div>
				</div>
			</section>

			<section className="py-20 px-4 bg-cream">
				<div className="max-w-7xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-saffron to-maroon bg-clip-text text-transparent">
						</h2>
						<div className="w-32 h-1 bg-gradient-to-r from-saffron to-maroon mx-auto mb-16"></div>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
							{alumni2023.map((alumni) => (
								<AlumniCard key={alumni.name} {...alumni} />
							))}
						</div>
					</motion.div>
				</div>
			</section>

			<section className="py-20 px-4 bg-gradient-to-br from-maroon to-red-900">
				<div className="max-w-4xl mx-auto text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="text-4xl font-bold text-white mb-6">
							Are you an RCA Alumni?
						</h2>
						<p className="text-xl text-cream mb-8">
							We'd love to feature you here! Share your journey and stay
							connected with the RCA family.
						</p>
						<a
							href="https://forms.gle/GpRmYMoc8DPog2uT6"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center px-8 py-4 bg-white text-maroon font-semibold rounded-full hover:bg-cream transition-colors shadow-2xl transform hover:scale-105"
						>
							Get in Touch
						</a>
					</motion.div>
				</div>
			</section>
		</div>
	);
}