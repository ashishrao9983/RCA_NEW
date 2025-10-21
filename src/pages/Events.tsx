import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: "Rajwada 2.0 (Cultural fest)",
    description: "Rajwada 2.0 — a vibrant celebration of Rajasthan's culture with music, dance, and royal traditions at NIT Silchar.",
    date: "Nov 8, 2025",
    location: "SAC building, NIT Silchar",
    image: "https://res.cloudinary.com/ddztmzvwl/image/upload/v1760906830/culture_fkwa1d.jpg",
    registrationLink: "https://forms.google.com",
    participants: "200+"
  },
  {
    id: 2,
    title: "Kite Festival",
    description: "Kite Festival — celebrating Rajasthan's vibrant tradition of Makar Sankranti, where colorful kites paint the sky and joy soars high at NIT Silchar!",
    date: "Jan 14, 2026",
    location: "Football Grounds",
    image: "https://res.cloudinary.com/ddztmzvwl/image/upload/v1760906541/kite_image_enr1gc.jpg",
    // registrationLink: "https://forms.google.com",
    participants: "100+"
  },
  {
    id: 3,
    title: "Rajasthan Diwas 2026",
    description: "Rajasthan Diwas — honoring the royal heritage and vibrant culture of Rajasthan with music, dance, and tradition at NIT Silchar.",
    date: "March 30, 2025",
    location: "food court,NIT Silchar",
    image: "https://res.cloudinary.com/ddztmzvwl/image/upload/v1760906541/rajasthan_diwas_ckuzm9.avif",
    // registrationLink: "https://forms.google.com",
    participants: "200+"
  }
];

const pastEvents = [
  {
    id: 1,
    title: "Gangaur Festival 2024",
    image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    title: "Rajasthani Music Night",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

export default function Events() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/ddztmzvwl/image/upload/v1760941393/download_1_zeymsc.jpg)',
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
          <div className="inline-block">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 relative">
              RCA EVENTS
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-400"></div>
            </h1>
          </div>
          <p className="text-xl text-white mt-8">
            Experience the vibrant culture of Rajasthan through our diverse events and celebrations
          </p>
        </motion.div>
      </section>

      {/* Upcoming Events Section */}
      <section 
        className="py-20 px-4 relative"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/ddztmzvwl/image/upload/v1760941819/download_2_qwzjcq.jpg)',
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
              Upcoming Events
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-16"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-700 mb-4 leading-relaxed">{event.description}</p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="mr-2 text-orange-500" size={20} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="mr-2 text-orange-500" size={20} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="mr-2 text-orange-500" size={20} />
                        <span>{event.participants} Expected</span>
                      </div>
                    </div>

                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-full hover:shadow-lg transition-all transform hover:scale-105"
                    >
                      Register Now
                      <ExternalLink className="ml-2" size={18} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Past Events Section */}
      <section 
        className="py-20 px-4 relative"
        style={{
          // backgroundImage: 'url(https://res.cloudinary.com/ddztmzvwl/image/upload/v1760941820/download_3_kxe2ad.jpg)',
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
              Past Events Gallery
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-8"></div>

            {/* Custom Photo Gallery */}
            <div className="gallery mb-12">
              <h5 className="text-xl font-semibold mb-4 text-center">Photo Gallery</h5>
              <div className="wrapper">
                <div><img src="https://res.cloudinary.com/ddztmzvwl/image/upload/v1760898978/event8_qi2anx.jpg" alt="" /></div>
                <div><img src="https://res.cloudinary.com/ddztmzvwl/image/upload/v1760898978/event7_lbsngm.jpg" alt="" /></div>
                <div><img src="https://res.cloudinary.com/ddztmzvwl/image/upload/v1760898978/event9_kl4ns2.jpg" alt="" /></div>
                <div><img src="https://res.cloudinary.com/ddztmzvwl/image/upload/v1760898979/event5_lxrlux.jpg" alt="" /></div>
                <div><img src="https://res.cloudinary.com/ddztmzvwl/image/upload/v1760898979/event4_raxetd.jpg" alt="" /></div>
                <div><img src="https://res.cloudinary.com/ddztmzvwl/image/upload/v1760898979/event3_vld5wj.jpg" alt="" /></div>
                <div><img src="https://res.cloudinary.com/ddztmzvwl/image/upload/v1760898980/event2_x6ipoq.jpg" alt="" /></div>
                <div><img src="https://res.cloudinary.com/ddztmzvwl/image/upload/v1760898978/event10_vq0laf.jpg" alt="" /></div>
                <div><img src="https://res.cloudinary.com/ddztmzvwl/image/upload/v1760898978/event11_rifa5d.jpg" alt="" /></div>
              </div>
            </div>

            {/* Past Events Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg h-80"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CSS for Custom Gallery */}
      <style>{`
        .wrapper{
          --_gap: .5rem;
          --_offset: 10%;
          --_offset-1: calc(var(--_offset) * 1);
          --_offset-2: calc(var(--_offset) * 2);
          --_offset-3: calc(var(--_offset) * 3);
          --_offset-7: calc(var(--_offset) * 7);
          --_offset-8: calc(var(--_offset) * 8);
          --_offset-9: calc(var(--_offset) * 9);

          width: calc(100% - 4rem);
          max-width: 800px;
          margin: 2rem auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0 var(--_gap);
          pointer-events: none;
          transform-style: preserve-3d;
        }
        .wrapper > div{
          position: relative;
          pointer-events: auto;
          aspect-ratio: 1;
          transition: scale 300ms ease-in-out, filter 300ms ease-in-out, clip-path 300ms ease-in-out 300ms;
          clip-path: polygon(var(--_clip-path));
          transform: translate3d(0,0,0);
        }
        .wrapper img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .wrapper > div:nth-child(n+4){
          margin-top: calc(var(--_offset-3) * -1 + var(--_gap));
        }
        .wrapper > div:nth-child(1){ --_clip-path: 0 0, 100% 0, 100% var(--_offset-9), 0 100%;}
        .wrapper > div:nth-child(2){ --_clip-path: 0 0, 100% 0, 100% var(--_offset-8), 0 var(--_offset-9);}
        .wrapper > div:nth-child(3){ --_clip-path: 0 0, 100% 0, 100% var(--_offset-7), 0 var(--_offset-8);}
        .wrapper > div:nth-child(4){ --_clip-path: 0 var(--_offset-3), 100% var(--_offset-2), 100% var(--_offset-8), 0 var(--_offset-7);}
        .wrapper > div:nth-child(5){ --_clip-path: 0 var(--_offset-2), 100% var(--_offset-1), 100% var(--_offset-9), 0 var(--_offset-8);}
        .wrapper > div:nth-child(6){ --_clip-path: 0 var(--_offset-1), 100% 0%, 100% 100%, 0 var(--_offset-9);}
        .wrapper > div:nth-child(7){ --_clip-path: 0 0%, 100% var(--_offset-1), 100% 100%, 0 100%;}
        .wrapper > div:nth-child(8){ --_clip-path: 0 var(--_offset-1), 100% var(--_offset-2), 100% 100%, 0 100%;}
        .wrapper > div:nth-child(9){ --_clip-path: 0 var(--_offset-2), 100% var(--_offset-3), 100% 100%, 0 100%;}

        .wrapper > div:hover{
          scale: 1.3;
          --_clip-path: 0 0, 100% 0, 100% 100%, 0 100%;
          z-index: 100;
          opacity: 1;
        }

        .wrapper:has(:hover) > div:not(:hover){
          filter: grayscale(1) blur(3px);
          opacity: .5;
          scale: 0.9;
        }
      `}</style>
    </div>
  );
}