import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, ChevronRight, Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Alumni - Batch 2023",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote: "RCA gave me a home away from home. The cultural events and festivals celebrated here kept me connected to my roots while I was far from Rajasthan."
  },
  {
    name: "Aditya Rathore",
    role: "Final Year Student",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote: "Being part of RCA has been transformative. From organizing events to performing traditional dances, every moment has been enriching and memorable."
  },
  {
    name: "Ananya Singh",
    role: "Team Member",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote: "RCA is not just a club, it's a family. The bond we share and the cultural heritage we preserve together makes this association truly special."
  },
  {
    name: "Vikram Choudhary",
    role: "Alumni - Batch 2022",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote: "The experiences and friendships I gained through RCA are invaluable. It shaped my college life and gave me memories to cherish forever."
  }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-saffron via-maroon to-red-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            Rajasthan Cultural Association
          </h1>
          <p className="text-2xl md:text-3xl text-cream mb-8">
            NIT Silchar
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Link
              to="/events"
              className="inline-flex items-center px-8 py-4 bg-white text-maroon font-semibold rounded-full hover:bg-cream transition-colors shadow-2xl"
            >
              Explore Our Events
              <ChevronRight className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-saffron to-maroon bg-clip-text text-transparent">
              About Us
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-saffron to-maroon mx-auto mb-12"></div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                The <span className="font-semibold text-maroon">Rajasthan Cultural Association (RCA)</span> is a vibrant community at NIT Silchar dedicated to celebrating and preserving the rich cultural heritage of Rajasthan. Our association brings together students who share a passion for Rajasthani traditions, art, music, dance, and cuisine.
              </p>
              <p className="text-lg mb-6">
                Through various cultural events, festivals, and workshops, we create a platform for students to stay connected with their roots while studying far from home. From organizing grand celebrations during Gangaur and Teej to hosting folk dance performances and traditional music nights, RCA ensures that the colorful spirit of Rajasthan thrives on our campus.
              </p>
              <p className="text-lg">
                We believe in fostering unity, cultural exchange, and creating lasting memories. Whether you're from Rajasthan or simply fascinated by its culture, RCA welcomes everyone to be part of our journey in keeping traditions alive and vibrant.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-saffron to-maroon bg-clip-text text-transparent">
              About NIT Silchar
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-saffron to-maroon mx-auto mb-12"></div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                <span className="font-semibold text-maroon">National Institute of Technology, Silchar</span> is one of India's premier technical institutions, established in 1967. Located in the beautiful state of Assam, NIT Silchar has earned a reputation for academic excellence, cutting-edge research, and holistic development of students.
              </p>
              <p className="text-lg mb-6">
                The institute offers undergraduate, postgraduate, and doctoral programs in various disciplines of engineering, science, and humanities. With state-of-the-art infrastructure, experienced faculty, and a vibrant campus life, NIT Silchar provides an ideal environment for learning and growth.
              </p>
              <p className="text-lg">
                Beyond academics, the campus hosts numerous cultural and technical clubs, including RCA, which contribute to the overall development of students. The diverse student community from across India creates a rich cultural tapestry, making NIT Silchar a true melting pot of traditions and ideas.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-saffron to-maroon bg-clip-text text-transparent">
              Our Team
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-saffron to-maroon mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Meet the passionate individuals who work tirelessly to bring Rajasthani culture alive on campus. Our dedicated team organizes events, manages operations, and ensures every member feels at home.
            </p>

            <Link
              to="/team"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-saffron to-maroon text-white font-semibold rounded-full hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <Users className="mr-2" />
              Meet Our Team
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-maroon to-red-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-center mb-4 text-white">
              What People Say About RCA
            </h2>
            <div className="w-32 h-1 bg-gold mx-auto mb-16"></div>

            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-12 relative">
                <Quote className="absolute top-8 left-8 text-saffron opacity-20" size={64} />

                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center relative z-10"
                >
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-saffron shadow-lg"
                  />
                  <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <h4 className="text-2xl font-semibold text-maroon">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-saffron font-medium">
                    {testimonials[currentTestimonial].role}
                  </p>
                </motion.div>

                <div className="flex justify-center space-x-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentTestimonial
                          ? 'bg-maroon w-8'
                          : 'bg-gray-300 hover:bg-saffron'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-saffron rounded-full opacity-20 blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-saffron to-maroon bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-saffron to-maroon mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 mb-8">
              Have questions or want to join RCA? We'd love to hear from you!
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
              <a
                href="tel:+918949519891"
                className="flex items-center text-lg text-maroon font-semibold hover:text-saffron transition-colors"
              >
                <Star className="mr-2" />
                +91-8949519891
              </a>
              <span className="hidden md:block text-gray-400">|</span>
              <a
                href="mailto:Aniljangid8991@gmail.com"
                className="flex items-center text-lg text-maroon font-semibold hover:text-saffron transition-colors"
              >
                <Star className="mr-2" />
                Aniljangid8991@gmail.com
              </a>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-saffron to-maroon text-white font-semibold rounded-full hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Contact Us
              <ChevronRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
