import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: "Rajasthani Folk Dance Workshop",
    description: "Learn traditional Ghoomar and Kalbeliya dance forms from expert instructors. Experience the grace and elegance of Rajasthani dance culture.",
    date: "March 15, 2025",
    location: "Cultural Hall, NIT Silchar",
    image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800",
    registrationLink: "https://forms.google.com",
    participants: "50+"
  },
  {
    id: 2,
    title: "Traditional Rajasthani Cuisine Festival",
    description: "Savor authentic Rajasthani delicacies including Dal Baati Churma, Gatte ki Sabzi, and more. A gastronomic journey through Rajasthan's royal kitchens.",
    date: "April 8, 2025",
    location: "Campus Grounds",
    image: "https://images.pexels.com/photos/1625219/pexels-photo-1625219.jpeg?auto=compress&cs=tinysrgb&w=800",
    registrationLink: "https://forms.google.com",
    participants: "100+"
  },
  {
    id: 3,
    title: "Cultural Night 2025",
    description: "A grand evening showcasing Rajasthani music, dance, drama, and fashion. Witness the vibrant colors and rich traditions of the land of kings.",
    date: "May 20, 2025",
    location: "Main Auditorium",
    image: "https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=800",
    registrationLink: "https://forms.google.com",
    participants: "200+"
  },
  {
    id: 4,
    title: "Heritage Art Exhibition",
    description: "Explore traditional Rajasthani art forms including miniature paintings, block printing, and handicrafts created by local artisans.",
    date: "June 12, 2025",
    location: "Art Gallery, NIT Silchar",
    image: "https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800",
    registrationLink: "https://forms.google.com",
    participants: "75+"
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
    title: "Teej Celebration",
    image: "https://images.pexels.com/photos/1679618/pexels-photo-1679618.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    title: "Rajasthani Music Night",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    title: "Traditional Dress Day",
    image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 5,
    title: "Holi Dhamaal 2024",
    image: "https://images.pexels.com/photos/2814610/pexels-photo-2814610.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 6,
    title: "Rajasthani Handicraft Workshop",
    image: "https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

export default function Events() {
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
          <div className="inline-block">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 relative">
              RCA EVENTS
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gold"></div>
            </h1>
          </div>
          <p className="text-xl text-cream mt-8">
            Experience the vibrant culture of Rajasthan through our diverse events and celebrations
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
              Upcoming Events
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-saffron to-maroon mx-auto mb-16"></div>

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
                        <Calendar className="mr-2 text-saffron" size={20} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="mr-2 text-saffron" size={20} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="mr-2 text-saffron" size={20} />
                        <span>{event.participants} Expected</span>
                      </div>
                    </div>

                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-saffron to-maroon text-white font-semibold rounded-full hover:shadow-lg transition-all transform hover:scale-105"
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

      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-saffron to-maroon bg-clip-text text-transparent">
              Past Events Gallery
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-saffron to-maroon mx-auto mb-16"></div>

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
    </div>
  );
}
