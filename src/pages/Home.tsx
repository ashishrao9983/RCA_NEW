import { motion } from 'framer-motion';
import { Users, ChevronRight, Star, Quote } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    name: "Piyush Meena",
    role: "Alumni - Batch 2025",
    image: "https://res.cloudinary.com/ddztmzvwl/image/upload/v1761044491/piyush_clfk1d.jpg",
    quote: "Together, we celebrate our roots and share the vibrant spirit of Rajasthan, inspiring unity and pride in our diverse community."
  },
  {
    name: "Dinesh Yadav",
    role: "Final Year Student",
    image: "https://res.cloudinary.com/ddztmzvwl/image/upload/v1760898982/Dinesh_bhaiya_sh3jum.jpg",
    quote: "Through culture and connection, we empower each other to shine brighter, creating lasting memories and friendships along the way."
  },
  {
    name: "Anil jangid",
    role: "Final Year Student",
    image: "https://res.cloudinary.com/ddztmzvwl/image/upload/v1760898980/anil_bhaiya_pyk69e.jpg",
    quote: "Unlock your creativity and build the future—every line of code is a step toward transforming ideas into impactful realities!"
  },
];

type HeroSectionProps = {
  onHeroVisibleChange: (visible: boolean) => void;
};

const HeroSection = ({ onHeroVisibleChange }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.intersectionRatio >= 0.5;
        onHeroVisibleChange(visible);
      },
      { threshold: [0, 0.5, 1] }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [onHeroVisibleChange]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-between px-8 md:px-20 overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0 -z-10">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source
            src="https://res.cloudinary.com/ddztmzvwl/video/upload/v1760940049/%EF%B8%8F_No_Copyright_cameleers_camel_drivers_at_sunset_thar_desert_on_sunset_jaisalmer_rajasthan_india_2_vwwcq5.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 opacity-20 -z-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Left text content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-left text-white max-w-xl"
      >
        <h2 className="text-6xl md:text-7xl font-light mb-2">RCA</h2>
        <h1 className="text-7xl md:text-8xl font-extrabold mb-6">NIT Silchar</h1>
        <p className="text-lg md:text-xl mb-8">
          Welcome to RCA! Join us to kickstart an amazing journey and be part of our vibrant community!
        </p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
          <button
            className="inline-block bg-white text-red-600 font-semibold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-red-100 transition-all"
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View More
          </button>
        </motion.div>
      </motion.div>

      {/* Right circular logo (kept empty in layout for your original mark) */}
    </section>
  );
};

const AboutUsSection = () => (
  <section id="about" className="py-20 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          About Us
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Moves Left */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-none text-gray-700 leading-relaxed space-y-6"
          >
            <p className="text-xl">
              The <span className="font-semibold text-red-600">Rajasthan Cultural Association (RCA)</span> is a vibrant community at NIT Silchar dedicated to celebrating and preserving the rich cultural heritage of Rajasthan. Our association brings together students who share a passion for Rajasthani traditions, art, music, dance, and cuisine.
            </p>
            <p className="text-lg">
              Through cultural events, festivals, and workshops, we help students stay connected with their roots. From Gangaur and Teej celebrations to folk dance and traditional music nights, RCA keeps Rajasthan's vibrant spirit alive on campus.
            </p>
            <p className="text-lg">
              We believe in fostering unity, cultural exchange, and creating lasting memories. Whether you're from Rajasthan or simply fascinated by its culture, RCA welcomes everyone to be part of our journey in keeping traditions alive and vibrant.
            </p>
          </motion.div>

          {/* Logo - Appears Right */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-80 h-80 rounded-full shadow-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border-4 border-orange-300">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-orange-300 to-red-400 flex items-center justify-center overflow-hidden">
                <img
                  src="https://res.cloudinary.com/ddztmzvwl/image/upload/v1760908109/RCA_logo1_fwsdok.jpg"
                  alt="RCA Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const AboutNITSection = () => (
  <section className="py-20 px-4 bg-orange-50">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          About NIT Silchar
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Logo - Appears Left */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-80 h-80 rounded-full shadow-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border-4 border-orange-300">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-orange-300 to-red-400 flex items-center justify-center overflow-hidden">
                <img
                  src="https://res.cloudinary.com/ddztmzvwl/image/upload/v1760940810/admin_building_gino0n.jpg"
                  alt="NIT Silchar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content - Moves Right */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-none text-gray-700 leading-relaxed space-y-6"
          >
            <p className="text-xl">
              <span className="font-semibold text-red-600">National Institute of Technology, Silchar</span> is one of India's premier technical institutions, established in 1967. Located in the beautiful state of Assam, NIT Silchar has earned a reputation for academic excellence, cutting-edge research, and holistic development of students.
            </p>
            <p className="text-lg">
              The institute offers undergraduate, postgraduate, and doctoral programs in various disciplines of engineering, science, and humanities. With state-of-the-art infrastructure, experienced faculty, and a vibrant campus life, NIT Silchar provides an ideal environment for learning and growth.
            </p>
            <p className="text-lg">
              Beyond academics, the campus hosts numerous cultural and technical clubs, including RCA, which contribute to the overall development of students. The diverse student community from across India creates a rich cultural tapestry, making NIT Silchar a true melting pot of traditions and ideas.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const TeamSection = () => (
  <section className="py-20 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Our Team
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          Meet the passionate individuals who work tirelessly to bring Rajasthani culture alive on campus. Our dedicated team organizes events, manages operations, and ensures every member feels at home.
        </p>

        <button
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-full hover:shadow-2xl transition-all transform hover:scale-105"
          onClick={() => { window.location.href = '/team'; }}
        >
          <Users className="mr-2" size={20} />
          Meet Our Team
        </button>
      </motion.div>
    </div>
  </section>
);

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-red-500 to-red-600">
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
          <div className="w-32 h-1 bg-yellow-400 mx-auto mb-16"></div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-12 relative">
              <Quote className="absolute top-8 left-8 text-orange-400 opacity-20" size={64} />

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
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-orange-500 shadow-lg"
                />
                <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <h4 className="text-2xl font-semibold text-red-600">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-orange-500 font-medium">
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
                        ? 'bg-red-600 w-8'
                        : 'bg-gray-300 hover:bg-orange-500'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-400 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section className="py-20 px-4 bg-orange-50">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-700 mb-8">
          Have questions or want to join RCA? We'd love to hear from you!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          <a
            href="tel:+91-8949519891"
            className="flex items-center text-lg text-red-600 font-semibold hover:text-orange-500 transition-colors"
          >
            <Star className="mr-2" size={20} />
            +91-8949519891
          </a>
          <span className="hidden md:block text-gray-400">|</span>
          <a
            href="mailto:abhayrsharma1000@gmail.com"
            className="flex items-center text-lg text-red-600 font-semibold hover:text-orange-500 transition-colors"
          >
            <Star className="mr-2" size={20} />
            abhayrsharma1000@gmail.com
          </a>
        </div>
        <button
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-full hover:shadow-2xl transition-all transform hover:scale-105"
          onClick={() => { window.location.href = '/contact'; }}
        >
          Contact Us
          <ChevronRight className="ml-2" size={20} />
        </button>
      </motion.div>
    </div>
  </section>
);

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false); // actual playback state
  const [wantToPlay, setWantToPlay] = useState(false); // user's intent (pressed play)
  const [heroVisible, setHeroVisible] = useState(true); // is Hero in view (>= 0.5)
  const mountedRef = useRef(false);

  // Auto-play attempt on load, but only if hero is visible and browser allows it
  useEffect(() => {
    mountedRef.current = true;
    const tryAutoPlay = async () => {
      if (!audioRef.current) return;
      if (!heroVisible) return; // only auto-play if hero/button visible
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setWantToPlay(true);
      } catch {
        // autoplay blocked -> leave it paused, user can press play
      }
    };
    const timer = setTimeout(tryAutoPlay, 500);
    return () => {
      clearTimeout(timer);
      mountedRef.current = false;
    };
  }, [heroVisible]);

  // When hero visibility changes:
  useEffect(() => {
    if (!audioRef.current) return;

    if (!heroVisible) {
      // if hero went out of view, audio must NOT play (per your requirement)
      audioRef.current.pause();
      setIsPlaying(false);
      // keep wantToPlay as-is so when hero becomes visible again we can resume if user wanted
      return;
    }

    // hero became visible
    if (wantToPlay) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [heroVisible, wantToPlay]);

  // Pause when tab hidden; resume only if user wanted to play and hero is visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!audioRef.current) return;

      if (document.hidden) {
        // pause but don't forget user's intent
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // tab became visible -> resume only if user had wanted to play AND hero is visible
        if (wantToPlay && heroVisible) {
          audioRef.current.play()
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [wantToPlay, heroVisible]);

  // Ensure audio stops on navigation/unmount
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const toggleAudio = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      // user paused playback
      audioRef.current.pause();
      setIsPlaying(false);
      setWantToPlay(false);
    } else {
      // user wants to play
      setWantToPlay(true);
      // Only actually play if hero (play button) is visible
      if (heroVisible) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      } else {
        // hero not visible: do not start playback, but remember user intent
        setIsPlaying(false);
      }
    }
  };

  // Media Session API: set action handlers once; set metadata when playback starts
  useEffect(() => {
    if (typeof navigator === 'undefined' || !(navigator as any).mediaSession) return;
    const ms = (navigator as any).mediaSession;

    try {
      ms.setActionHandler('play', async () => {
        if (audioRef.current) {
          try {
            await audioRef.current.play();
            setIsPlaying(true);
            setWantToPlay(true);
          } catch {}
        }
      });

      ms.setActionHandler('pause', () => {
        if (audioRef.current) {
          audioRef.current.pause();
          setIsPlaying(false);
          setWantToPlay(false);
        }
      });

      ms.setActionHandler('stop', () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
          setIsPlaying(false);
          setWantToPlay(false);
        }
      });
    } catch (err) {
      // ignore errors on unsupported browsers
    }

    return () => {
      try {
        ms.setActionHandler('play', null);
        ms.setActionHandler('pause', null);
        ms.setActionHandler('stop', null);
      } catch {}
    };
  }, []);

  // keep playbackState in sync with UI state
  useEffect(() => {
    if (typeof navigator === 'undefined' || !(navigator as any).mediaSession) return;
    try {
      (navigator as any).mediaSession.playbackState = isPlaying ? 'playing' : 'paused';
      // set metadata when playback starts - some browsers only fetch artwork after play
      if (isPlaying) {
        try {
          (navigator as any).mediaSession.metadata = new (window as any).MediaMetadata({
            title: 'RCA NIT Silchar',
            artist: 'RCA',
            album: 'RCA Website',
            artwork: [
              { src: 'https://res.cloudinary.com/ddztmzvwl/image/upload/v1760908109/RCA_logo1_fwsdok.jpg', sizes: '512x512', type: 'image/jpeg' }
            ]
          });
        } catch {}
      }
    } catch {}
  }, [isPlaying]);

  return (
    <div className="min-h-screen relative">
      {/* Background audio */}
      <audio
        ref={audioRef}
        src="https://res.cloudinary.com/ddztmzvwl/video/upload/v1760943911/sam_Jaisalmer_Rajasthan_padharo_mhare_Desh_re_qmtk5y.mp3"
        crossOrigin="anonymous"
        loop
        preload="auto"
      />

      {/* Floating play/pause button - VISIBLE ONLY WHEN HERO IS VISIBLE */}
      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-orange-500 text-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
        title={isPlaying ? 'Pause music' : 'Play music'}
        style={{ display: heroVisible ? 'flex' : 'none' }}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        )}
      </button>

      <HeroSection onHeroVisibleChange={setHeroVisible} />
      <AboutUsSection />
      <AboutNITSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
