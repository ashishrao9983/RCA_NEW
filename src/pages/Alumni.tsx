import { motion } from 'framer-motion';
import { Instagram, Linkedin, GraduationCap } from 'lucide-react';

const alumni2023 = [
	{
		name: 'Arjun Rajput',
		batch: '2023',
		image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
		instagram: 'https://instagram.com',
		linkedin: 'https://linkedin.com',
	},
	{
		name: 'Priya Sharma',
		batch: '2023',
		image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
		instagram: 'https://instagram.com',
		linkedin: 'https://linkedin.com',
	},
	{
		name: 'Vikram Choudhary',
		batch: '2023',
		image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
		instagram: 'https://instagram.com',
		linkedin: 'https://linkedin.com',
	},
	{
		name: 'Kavya Reddy',
		batch: '2023',
		image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
		instagram: 'https://instagram.com',
		linkedin: 'https://linkedin.com',
	},
];

const alumni2024 = [
	{
		name: 'Rahul Meena',
		batch: '2024',
		image: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400',
		instagram: 'https://instagram.com',
		linkedin: 'https://linkedin.com',
	},
	{
		name: 'Ananya Singh',
		batch: '2024',
		image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
		instagram: 'https://instagram.com',
		linkedin: 'https://linkedin.com',
	},
	{
		name: 'Siddharth Joshi',
		batch: '2024',
		image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
		instagram: 'https://instagram.com',
		linkedin: 'https://linkedin.com',
	},
	{
		name: 'Ishita Verma',
		batch: '2024',
		image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
		instagram: 'https://instagram.com',
		linkedin: 'https://linkedin.com',
	},
];

interface AlumniCardProps {
	name: string;
	batch: string;
	image: string;
	instagram: string;
	linkedin: string;
}

function AlumniCard({ name, batch, image, instagram, linkedin }: AlumniCardProps) {
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
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					<div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-4">
						<a
							href={instagram}
							target="_blank"
							rel="noopener noreferrer"
							className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-saffron transition-colors transform hover:scale-110"
						>
							<Instagram className="text-maroon" size={24} />
						</a>
						<a
							href={linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-saffron transition-colors transform hover:scale-110"
						>
							<Linkedin className="text-maroon" size={24} />
						</a>
					</div>
				</div>
				<div className="absolute top-4 right-4 bg-gradient-to-r from-saffron to-maroon text-white px-4 py-2 rounded-full font-semibold flex items-center space-x-2">
					<GraduationCap size={20} />
					<span>{batch}</span>
				</div>
			</div>
			<div className="p-6 text-center">
				<h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
				<p className="text-saffron font-medium">Batch of {batch}</p>
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
							Batch of 2024
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
							Batch of 2023
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
							href="mailto:Aniljangid8991@gmail.com"
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
