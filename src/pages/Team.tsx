import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';
const Faculty = {
  name: "Dr. Anup Kumar Sharma",
  role: "Faculty",
  image: "https://res.cloudinary.com/dy8vdilqu/image/upload/v1761135194/anup_svc2yg.jpg",
  linkedin: "https://www.linkedin.com/in/dr-anup-kumar-sharma-9828a5232/"
};
const coordinators = [
  {
    name: "Dinesh Yadav",
    role: "Founder",
    image: "https://res.cloudinary.com/dy8vdilqu/image/upload/v1761139576/WhatsApp_Image_2025-10-22_at_18.55.39_90b19416_tjc3zz.jpg",
    instagram: "https://www.instagram.com/raodineshyadav1/?hl=en",
    linkedin: "https://www.linkedin.com/in/dinesh-b5a830262/",
    bio: "The motive behind creating RCA was just like a garland that has two main components — countless precious beads and the thread that holds them together. I chose to become that thread which connects all those countless beads together as one."
  },
];

const heads = [
  {
    name: "Tanisha Garg",
    role: "Coordinator",
    image: "https://res.cloudinary.com/ddztmzvwl/image/upload/v1760898982/tanisha_didi_a07cnv.jpg",
    instagram: "https://www.instagram.com/azad__vichar/?hl=en",
    linkedin: "https://www.linkedin.com/in/tanisha-garg-b52b24272/"
  },
  {
    name: "Anil Jangid",
    role: "Coordinator",
    image: "https://res.cloudinary.com/ddztmzvwl/image/upload/v1760898980/anil_bhaiya1_yudihd.jpg",
    instagram: "https://www.instagram.com/aniljangir894/?hl=en",
    linkedin: "https://www.linkedin.com/in/anil-kumar-364b7b280/"
  },
   {
    name: "Navneet Khileri",
    role: "Coordinators",
    image: "https://res.cloudinary.com/ddztmzvwl/image/upload/v1760898981/Navneet_bhaiya_azmm90.jpg",
  instagram: "https://www.instagram.com/navneet_khileri_rj31/?hl=en",
    linkedin: "https://www.linkedin.com/in/navneet-khileri-b4b19625a/"
   },
  {
    name: "Suresh Gurjar",
    role: "Coordinator",
    image: "https://res.cloudinary.com/dy8vdilqu/image/upload/v1761136144/WhatsApp_Image_2025-10-22_at_17.49.01_c1e85e99_p7ldse.jpg",
    instagram: "https://www.instagram.com/pankajmehta9216/?hl=enom",
    linkedin: "https://www.linkedin.com/in/pankaj-mehta-3a9913292/"
  },
];

const techTeam = [
  {
    name: "Abhay Sharma",
    role: "Web Developer",
    image: "https://res.cloudinary.com/ddztmzvwl/image/upload/v1761045765/abhay_nju7y9.jpg",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Ashish Kumar",
    role: "web Developer",
    image: "https://res.cloudinary.com/ddztmzvwl/image/upload/v1761035281/mera_photo_bbcm9p.jpg",
    instagram: "https://www.instagram.com/ashish_rao9983/?hl=en",
    linkedin: "https://www.linkedin.com/in/ashish-kumar-0a469a2a3/"
  },
  {
    name: "Udit Namdev",
    role: "Technical Support",
    image: "https://res.cloudinary.com/ddztmzvwl/image/upload/v1761035264/udit_uem0n9.jpg",
    instagram: "https://www.instagram.com/udit_n09/?hl=en",
    linkedin: "https://www.linkedin.com/in/udit-namdev-205a4a2a4/"
  },
  {
    name: "Aditya Sharma",
    role: "Tech Support",
    image: "https://res.cloudinary.com/ddztmzvwl/image/upload/v1761046060/aditya_jnxauz.jpg",
    instagram: "https://www.instagram.com/itsadi_2006/?hl=en",
    linkedin: "https://www.linkedin.com/in/aditya-sharma-1a96912a6/"
  }
];

const eventTeam = [
  {
    name: "Himanshu Moond",
    role: "Event Coordinator",
    image: "https://res.cloudinary.com/ddztmzvwl/image/upload/v1761035322/himanshu_tlllxo.jpg",
    instagram: "https://www.instagram.com/himanshujat125/?hl=en",
    linkedin: "https://www.linkedin.com/in/himanshu-moond-6663912b4/"
  },
  {
    name: "Manish Kumar",
    role: "PR Manager",
    image: "https://res.cloudinary.com/ddztmzvwl/image/upload/v1761036186/manish2_ea9sjl.jpg",
    instagram: "https://www.instagram.com/_manish__sain/?hl=en",
    linkedin: "https://www.linkedin.com/in/manish-kumar-996ab4381/"
  },
  {
    name: "Ankit Jhuria",
    role: "Sponsorship Lead",
    image: "https://res.cloudinary.com/ddztmzvwl/image/upload/v1761035303/jhuria_csh1th.jpg",
    instagram: "https://www.instagram.com/ankit.__.3/?hl=en",
    linkedin: "https://www.linkedin.com/in/ankit-jhuria-2aa293291/"
  },
  {
    name: "Sachin Chauahan",
    role: "Logistics Manager",
    image: "https://res.cloudinary.com/dy8vdilqu/image/upload/v1761140279/WhatsApp_Image_2025-10-22_at_19.07.03_5df45b48_td7vok.jpg",
    instagram: "https://www.instagram.com/_sachin.__.7000_/?hl=en",
    linkedin: "https://www.linkedin.com/in/sachin-kumar-chouhan-652168313/"
  }
];
const CulturalContentTeam = [
  {
    name: "Aashish kumawat",
    role: "Cultural Head",
    image: "https://res.cloudinary.com/ddztmzvwl/image/upload/v1761051388/aashiah_sfpti4.jpg",
    instagram: "https://www.instagram.com/aashishkumawatbajta/",
    linkedin: "https://www.linkedin.com/in/aashish-kumar-kumawat-2999332a4/"
  },
  {
    name: "Muskan Jangid",
    role: "Cultural Head",
    image: "https://res.cloudinary.com/ddztmzvwl/image/upload/v1761050473/muskan_dgedou.jpg",
    instagram: "https://www.instagram.com/muskanjangid663/",
    linkedin: "https://www.linkedin.com/in/muskan-jangid-742322206/"
  },
  {
    name: "Sapna Saini",
    role: "Content Head",
    image: "https://res.cloudinary.com/ddztmzvwl/image/upload/v1761050474/sapna_dxnpyb.jpg",
    instagram: "https://www.instagram.com/sapnasaini9433/",
    linkedin: "https://www.linkedin.com/in/sapna-saini-0ba8072ba/"
  },
  {
    name: "Kiran Meena",
    role: "Content Head",
    image: "https://res.cloudinary.com/ddztmzvwl/image/upload/v1761050472/kiran_idbruo.jpg",
    // instagram: "https://www.instagram.com/_sachin.__.7000_/?hl=en",
    linkedin: "https://www.linkedin.com/in/kiran-meena-bb3528328/"
  }
];




interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  instagram?: string;
  linkedin: string;
  bio?: string;
}

function TeamMemberCard({ name, role, image, instagram, linkedin, bio }: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group h-full"
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow flex flex-col h-full">
        {/* Image area with fixed aspect ratio so all cards match height */}
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-4 bg-white"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-red-900 via-red-900/50 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-0'}`}>
            <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center space-x-4">
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors transform hover:scale-110"
              >
                <Instagram className="text-red-600" size={24} />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors transform hover:scale-110"
              >
                <Linkedin className="text-red-600" size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-orange-500 font-medium">{role}</p>
          {/** render bio if present */}
          {bio && (
            <p className="mt-3 text-sm text-gray-600">{bio}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/ddztmzvwl/image/upload/v1760898979/event4_raxetd.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/80 via-red-600/75 to-orange-500/80"></div>

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
          <div className="w-32 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-white">
            Meet the passionate individuals driving RCA's mission forward
          </p>
        </motion.div>
      </section>

      {/* Faculty Advisor Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-2">Faculty</h2>
            <p className="text-gray-600">Our guiding mentor</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-start-2">
              <TeamMemberCard key={Faculty.name} {...Faculty} />
            </div>
          </div>
        </div>
      </section>

      <section 
        className="py-20 px-4 relative"
        style={{
          // backgroundImage: 'url(https://images.unsplash.com/photo-1511379938547-c1f69b13d835?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Founder
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-16"></div>

            <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
              {coordinators.map((member) => (
                <div key={member.name} className="w-full md:w-1/2 lg:w-1/3">
                  <TeamMemberCard {...member} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section 
        className="py-20 px-4 relative"
        style={{
          // backgroundImage: 'url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-amber-50/80"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Coordinators
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-16"></div>

            <div className="flex flex-wrap justify-center gap-8">
              {heads.map((member) => (
                <div key={member.name} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] flex justify-center">
                  <TeamMemberCard {...member} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section 
        className="py-20 px-4 relative"
        style={{
          // backgroundImage: 'url(https://images.unsplash.com/photo-1511379938547-c1f69b13d835?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Technical Team
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-16"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {techTeam.map((member) => (
                <TeamMemberCard key={member.name} {...member} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section 
        className="py-20 px-4 relative"
        style={{
          // backgroundImage: 'url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-amber-50/80"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Event Management & PR Team
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-16"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {eventTeam.map((member) => (
                <TeamMemberCard key={member.name} {...member} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cultural & Content Team section (added) */}
      <section 
        className="py-20 px-4 relative"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/80"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Cultural & Content Team
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-16"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {CulturalContentTeam.map((member) => (
                <TeamMemberCard key={member.name} {...member} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
