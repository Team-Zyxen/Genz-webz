"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import SmoothTransitionsProvider from '@/components/animations/smooth-transitions';
import { Rocket, Paintbrush, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } }
};

export default function AboutPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-triggered');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-trigger-item');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <SmoothTransitionsProvider>
      <div className="min-h-screen bg-black text-white antialiased overflow-x-hidden">
        <Header />
        <main>
          <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black" />
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.span
                  variants={fadeInUp}
                  className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-purple-400 border border-purple-500/30 px-4 py-2 rounded-full"
                >
                  About ZYXEN
                </motion.span>
                
                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent"
                >
                  We Build Digital Experiences That Define Brands.
                </motion.h1>
                
                <motion.p
                  variants={fadeInUp}
                  className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                >
                  At ZYXEN, innovation meets design. We create solutions that inspire growth.
                </motion.p>
              </motion.div>
            </div>
          </section>

          <section className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950/50 to-black" />
            <div className="relative z-10 max-w-4xl mx-auto px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl font-bold text-center"
                >
                  OUR STORY
                </motion.h2>
                
                <motion.div
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-violet-600 rounded-full" />
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed pl-8 text-justify">
                    ZYXEN was founded with a simple belief — technology should create real impact. We saw a gap between digital products that look good and digital products that truly perform. ZYXEN was built to bridge that gap.
                  </p>
                </motion.div>
                
                <motion.div
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-violet-600 rounded-full" />
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed pl-8 text-justify">
                    Our journey began with a deep passion for design, engineering, and meaningful innovation. We wanted to build solutions that are fast, purposeful, and crafted with precision. Every project we take on reflects our commitment to quality, clarity, and long-term value.
                  </p>
                </motion.div>
                
                <motion.div
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-violet-600 rounded-full" />
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed pl-8 text-justify">
                    ZYXEN exists because we believe in building digital experiences that elevate brands, empower businesses, and inspire people. Our story is shaped by continuous learning, dedication, and a vision to push the boundaries of what technology can achieve.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <section className="py-24 bg-gradient-to-b from-black to-slate-950/30">
            <div className="max-w-6xl mx-auto px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="text-center space-y-4 mb-16"
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl font-bold"
                >
                  WHAT DRIVES US
                </motion.h2>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                <motion.div
                  variants={scaleIn}
                  className="group relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(147,51,234,0.15)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-2xl font-bold text-white">Innovation with Intent</h3>
                    <p className="text-gray-400 leading-relaxed">
                      We build digital solutions that solve real problems with clarity and purpose.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={scaleIn}
                  className="group relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(147,51,234,0.15)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-2xl font-bold text-white">Technical Excellence</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Scalable architecture, clean code, and performance-focused engineering.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={scaleIn}
                  className="group relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(147,51,234,0.15)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-2xl font-bold text-white">Design Precision</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Thoughtful design that blends usability, speed, and brand identity.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={scaleIn}
                  className="group relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(147,51,234,0.15)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-2xl font-bold text-white">Relentless Improvement</h3>
                    <p className="text-gray-400 leading-relaxed">
                      A mindset of learning, adapting, and delivering future-ready results.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <section className="py-24 bg-gradient-to-b from-slate-950/30 to-black">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="text-center space-y-4 mb-16"
              >
                <motion.span
                  variants={fadeInUp}
                  className="inline-block text-sm font-semibold uppercase tracking-[0.15em] text-purple-400"
                >
                  Who We Are
                </motion.span>
                <motion.h2
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl font-bold"
                >
                  Our Core Strengths
                </motion.h2>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-8"
              >
                {[
                  { title: "Innovation-Driven", desc: "We build forward-thinking digital solutions powered by creativity and modern engineering principles." },
                  { title: "Expert Engineering", desc: "Our skilled engineers craft scalable, reliable, and high-performance software systems." },
                  { title: "User-Focused", desc: "We design intuitive, user-centered products that deliver seamless digital experiences." },
                  { title: "Scalable Systems", desc: "We develop future-proof systems engineered for long-term business growth and evolution." },
                  { title: "End-to-End Solutions", desc: "We handle the full product lifecycle, delivering complete and dependable solutions." },
                  { title: "Seamless Delivery", desc: "We ensure smooth collaboration with clear communication and predictable delivery timelines." }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="group p-6 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 mt-3 bg-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          <section className="py-24">
            <div className="max-w-4xl mx-auto px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={scaleIn}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-950/50 via-slate-900 to-slate-900 border border-purple-500/20 p-12 md:p-16 text-center"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.1),transparent_50%)]" />
                
                <div className="relative z-10 space-y-6">
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    Let's Build Something Amazing Together.
                  </h2>
                  <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Ready to transform your vision into reality? Let's create digital experiences that define your brand.
                  </p>
                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-purple-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] hover:scale-105"
                    >
                      Work With Us
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SmoothTransitionsProvider>
  );
}