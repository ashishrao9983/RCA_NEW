import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';

export default function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    setLoading(true);

    try {
      const base = import.meta.env.VITE_API_BASE_URL || 'https://backend-roan-pi-63.vercel.app';
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, phoneNumber, subject, message }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Failed to submit');
      setFeedback({ type: 'success', message: data.message || 'Message sent successfully' });
      // clear form
      setFullName('');
      setEmail('');
      setPhoneNumber('');
      setSubject('');
      setMessage('');
    } catch (err: any) {
      setFeedback({ type: 'error', message: err.message || 'Submission failed' });
    } finally {
      setLoading(false);
    }
  };

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
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <div className="w-32 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-cream">
            Get in touch with the Rajasthan Cultural Association
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-saffron to-maroon bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Have questions about RCA? Want to join our events or become a member?
                We're here to help! Reach out to us through any of the channels below,
                and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="flex items-start space-x-4 p-6 bg-cream rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-saffron to-maroon rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-700">
                      Fakirtilla, Masimpur<br />
                      Silchar, Assam 788010<br />
                      National Institute of Technology, Silchar
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex items-start space-x-4 p-6 bg-cream rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-saffron to-maroon rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                    <a
                      href="mailto:abhayrsharma1000@gmail.com"
                      className="text-maroon hover:text-saffron transition-colors font-medium"
                    >
                      abhayrsharma1000@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex items-start space-x-4 p-6 bg-cream rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-saffron to-maroon rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                    <a
                      href="tel:+918824631483"
                      className="text-maroon hover:text-saffron transition-colors font-medium"
                    >
                      +91-8824631483
                    </a>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-8"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/rca.nits/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-r from-saffron to-maroon rounded-full flex items-center justify-center hover:shadow-lg transition-all transform hover:scale-110"
                  >
                    <Instagram className="text-white" size={28} />
                  </a>
                  {/* <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-r from-saffron to-maroon rounded-full flex items-center justify-center hover:shadow-lg transition-all transform hover:scale-110"
                  >
                    <Linkedin className="text-white" size={28} />
                  </a>
                  <a
                    href="/"
                    className="w-14 h-14 bg-gradient-to-r from-saffron to-maroon rounded-full flex items-center justify-center hover:shadow-lg transition-all transform hover:scale-110"
                  >
                    <Globe className="text-white" size={28} />
                  </a> */}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-cream to-white rounded-3xl shadow-2xl p-8"
            >
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-saffron to-maroon bg-clip-text text-transparent">
                Send us a Message
              </h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-saffron focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-saffron focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-saffron focus:outline-none transition-colors"
                    placeholder="+91-XXXXXXXXXX"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-saffron focus:outline-none transition-colors"
                    placeholder="What is this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-saffron focus:outline-none transition-colors resize-none"
                    placeholder="Tell us more..."
                    required
                  ></textarea>
                </div>

                {feedback && (
                  <div className={`p-4 rounded-md ${feedback.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {feedback.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-saffron to-maroon text-white font-semibold rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 disabled:opacity-60"
                >
                  <Send className="mr-2" size={20} />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
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
              Join the RCA Family
            </h2>
            <p className="text-xl text-cream mb-8 leading-relaxed">
              Whether you're from Rajasthan or simply love its culture,
              we welcome you to be part of our vibrant community.
              Experience the colors, traditions, and warmth of Rajasthan right here at NIT Silchar.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:abhayrsharma1000@gmail.com"
                className="px-8 py-4 bg-white text-maroon font-semibold rounded-full hover:bg-cream transition-colors shadow-2xl"
              >
                Become a Member
              </a>
              <a
                href="/events"
                className="px-8 py-4 bg-gold text-maroon font-semibold rounded-full hover:bg-white transition-colors shadow-2xl"
              >
                View Upcoming Events
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
