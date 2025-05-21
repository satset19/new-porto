import React, { useRef } from "react";
import { motion } from "motion/react";

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const fieldsRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(124, 58, 237, 0.3)",
    },
    tap: {
      scale: 0.98,
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-16 sm:py-24 px-4 sm:px-6 my-10 sm:my-16 z-10"
    >
      <div className="max-w-5xl mx-auto overflow-hidden">
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-16 text-center"
        >
          Get In <span className="text-gradient">Touch</span>
        </h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-10"
        >
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 flex flex-col justify-center space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold">
              Let's Create Something Amazing Together
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              Have a project in mind? I'm always open to discussing new projects
              and creative ideas.
            </p>

            <div className="space-y-4">
              <motion.div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-primary/20 flex items-center justify-center mr-2 sm:mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span>+62 (858) 169-75740</span>
              </motion.div>

              <motion.div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-primary/20 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <span>laksonosatriyo@gmail.com</span>
              </motion.div>

              <motion.div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-primary/20 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span>Bekasi, Indonesia</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-charcoal p-4 sm:p-6 rounded-lg shadow-xl"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4"
              >
                <motion.div variants={itemVariants} className="form-field">
                  <label className="block mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:border-purple-primary text-sm sm:text-base min-w-0"
                    placeholder="Your Name"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="form-field">
                  <label className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:border-purple-primary"
                    placeholder="Your Email"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="form-field">
                  <label className="block mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:border-purple-primary"
                    placeholder="Subject"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="form-field">
                  <label className="block mb-2 font-medium">Message</label>
                  <textarea
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:border-purple-primary h-32 sm:h-40 resize-none text-sm sm:text-base min-w-0"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </motion.div>

                <motion.div variants={itemVariants} className="form-field pt-2">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    type="submit"
                    className="submit-button bg-gradient-to-r from-purple-primary to-blue-accent text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
                  >
                    Send Message
                  </motion.button>
                </motion.div>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
