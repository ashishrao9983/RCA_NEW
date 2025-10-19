import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';

const coordinators = [
  {
    name: "Anil Jangid",
    role: "Coordinator",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Priya Sharma",
    role: "Co-Coordinator",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com"
  }
];

const heads = [
  {
    name: "Vikram Rathore",
    role: "Design Head",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Ananya Singh",
    role: "Content Head",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Rajesh Choudhary",
    role: "Technical Head",
    image: "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Meera Joshi",
    role: "Events Head",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com"
  }
];

const designTeam = [
  {
    name: "Arjun Mehta",
    role: "Graphic Designer",
    image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Kavya Reddy",
    role: "UI/UX Designer",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Rohit Sharma",
    role: "Content Writer",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Ishita Verma",
    role: "Social Media Manager",
    image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com"
  }
];

const techTeam = [
  {
    name: "Aditya Kumar",
    role: "Web Developer",
    image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Sneha Patel",
    role: "App Developer",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Karan Singh",
    role: "Database Manager",
    image: "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Riya Gupta",
    role: "Tech Support",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com"
  }
];

const eventTeam = [
  {
    name: "Siddharth Malhotra",
    role: "Event Coordinator",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Pooja Kapoor",
    role: "PR Manager",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Nikhil Jain",
    role: "Sponsorship Lead",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Divya Agarwal",
    role: "Logistics Manager",
    image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com"
  }
];

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  instagram: string;
  linkedin: string;
}

function TeamMemberCard({ name, role, image, instagram, linkedin }: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
        <div className="relative h-80 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-maroon via-maroon/50 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-0'}`}>
            <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center space-x-4">
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
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-saffron font-medium">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative py-20 px-4 bg-gradient-to-br from-saffron via-maroon to-red-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
            Our Team
          </h1>
          <div className="w-32 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-cream">
            Meet the passionate individuals driving RCA's mission forward
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
              Coordinators
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-saffron to-maroon mx-auto mb-16"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {coordinators.map((member) => (
                <TeamMemberCard key={member.name} {...member} />
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
              Department Heads
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-saffron to-maroon mx-auto mb-16"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {heads.map((member) => (
                <TeamMemberCard key={member.name} {...member} />
              ))}
            </div>
          </motion.div>
        </div>
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
              Design & Content Team
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-saffron to-maroon mx-auto mb-16"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {designTeam.map((member) => (
                <TeamMemberCard key={member.name} {...member} />
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
              Technical Team
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-saffron to-maroon mx-auto mb-16"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {techTeam.map((member) => (
                <TeamMemberCard key={member.name} {...member} />
              ))}
            </div>
          </motion.div>
        </div>
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
              Event Management & PR Team
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-saffron to-maroon mx-auto mb-16"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {eventTeam.map((member) => (
                <TeamMemberCard key={member.name} {...member} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
