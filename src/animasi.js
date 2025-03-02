gsap.registerPlugin(ScrollTrigger);

// Animasi Hero Section
gsap.from(".judul", {
  opacity: 0,
  x: -100,
  duration: 1.5,
  ease: "power2.out",
});
gsap.from(".gambar-judul", {
  opacity: 0,
  y: 100,
  duration: 1.5,
  ease: "power2.out",
});

gsap.from(".sub-judul1", {
  opacity: 0,
  x: -100,
  duration: 1.6,
});
gsap.from(".tombol-judul", {
  opacity: 0,
  x: -100,
  duration: 1.6,
});
// Animasi About Section

gsap.from(".gambar-about", {
  scrollTrigger: {
    trigger: ".gambar-about",
    start: "top 100%", // Memulai animasi saat elemen 80% terlihat di viewport
    end: "top 50%", // Animasi berakhir saat elemen mencapai 50% viewport
    scrub: false, // Jika true, animasi akan mengikuti scroll
  },
  opacity: 0,
  y: 100,
  duration: 1.5,
  ease: "power2.out",
});
gsap.from(".judul-about", {
  scrollTrigger: {
    trigger: ".judul-about",
    start: "top 100%", // Memulai animasi saat elemen 80% terlihat di viewport
    end: "top 50%", // Animasi berakhir saat elemen mencapai 50% viewport
    scrub: false, // Jika true, animasi akan mengikuti scroll
  },
  opacity: 0,
  y: 50,
  duration: 1.7,
  ease: "power2.out",
});
gsap.from(".sub-about1", {
  scrollTrigger: {
    trigger: ".sub-about1",
    start: "top 100%", // Memulai animasi saat elemen 80% terlihat di viewport
    end: "top 50%", // Animasi berakhir saat elemen mencapai 50% viewport
    scrub: false, // Jika true, animasi akan mengikuti scroll
  },
  opacity: 0,
  x: 100,
  duration: 1.7,
  ease: "power2.out",
});
gsap.from(".p-about", {
  scrollTrigger: {
    trigger: ".p-about",
    start: "top 100%", // Memulai animasi saat elemen 80% terlihat di viewport
    end: "top 50%", // Animasi berakhir saat elemen mencapai 50% viewport
    scrub: false, // Jika true, animasi akan mengikuti scroll
  },
  opacity: 0,
  x: 100,
  duration: 1.7,
  ease: "power2.out",
});

gsap.from(".isi-about", {
  scrollTrigger: {
    trigger: ".tombol-about",
    start: "top 100%", // Memulai animasi saat elemen 80% terlihat di viewport
    end: "top 50%", // Animasi berakhir saat elemen mencapai 50% viewport
    scrub: false, // Jika true, animasi akan mengikuti scroll
  },
  opacity: 0,
  y: 100,
  duration: 1.7,
  ease: "power2.out",
});

// Animasi Service Section

gsap.from(".judul-service", {
  scrollTrigger: {
    trigger: ".judul-service",
    start: "top 100%", // Memulai animasi saat elemen 80% terlihat di viewport
    end: "top 50%", // Animasi berakhir saat elemen mencapai 50% viewport
    scrub: false, // Jika true, animasi akan mengikuti scroll
  },
  opacity: 0,
  y: 100,
  duration: 1.5,
  ease: "power2.out",
});
gsap.from(".sub-service", {
  scrollTrigger: {
    trigger: ".sub-service",
    start: "top 100%", // Memulai animasi saat elemen 80% terlihat di viewport
    end: "top 50%", // Animasi berakhir saat elemen mencapai 50% viewport
    scrub: false, // Jika true, animasi akan mengikuti scroll
  },
  opacity: 0,
  y: 100,
  duration: 1.6,
  ease: "power2.out",
});
gsap.from(".service-1", {
  scrollTrigger: {
    trigger: ".service-1",
    start: "top 100%", // Memulai animasi saat elemen 80% terlihat di viewport
    end: "top 50%", // Animasi berakhir saat elemen mencapai 50% viewport
    scrub: false, // Jika true, animasi akan mengikuti scroll
  },
  opacity: 0,
  y: 100,
  duration: 1.5,
  ease: "power2.out",
});
gsap.from(".service-2", {
  scrollTrigger: {
    trigger: ".service-2",
    start: "top 100%", // Memulai animasi saat elemen 80% terlihat di viewport
    end: "top 50%", // Animasi berakhir saat elemen mencapai 50% viewport
    scrub: false, // Jika true, animasi akan mengikuti scroll
  },
  opacity: 0,
  y: 100,
  duration: 1.6,
  ease: "power2.out",
});
gsap.from(".service-3", {
  scrollTrigger: {
    trigger: ".service-3",
    start: "top 100%", // Memulai animasi saat elemen 80% terlihat di viewport
    end: "top 50%", // Animasi berakhir saat elemen mencapai 50% viewport
    scrub: false, // Jika true, animasi akan mengikuti scroll
  },
  opacity: 0,
  y: 100,
  duration: 1.7,
  ease: "power2.out",
});

// Animasi menu section

gsap.from(".judul-menu", {
  scrollTrigger: {
    trigger: ".judul-menu",
    start: "top 100%", // Memulai animasi saat elemen 80% terlihat di viewport
    end: "top 50%", // Animasi berakhir saat elemen mencapai 50% viewport
    scrub: false, // Jika true, animasi akan mengikuti scroll
  },
  opacity: 0,
  y: 90,
  duration: 1.5,
  ease: "power2.out",
});

gsap.from(".sub-menu", {
  scrollTrigger: {
    trigger: ".sub-menu",
    start: "top 100%", // Memulai animasi saat elemen 80% terlihat di viewport
    end: "top 50%", // Animasi berakhir saat elemen mencapai 50% viewport
    scrub: false, // Jika true, animasi akan mengikuti scroll
  },
  opacity: 0,
  y: 60,
  duration: 1.5,
  ease: "power2.out",
});

gsap.from(".card-1", {
  scrollTrigger: {
    trigger: ".card-1",
    start: "top 100%", // Memulai animasi saat elemen 80% terlihat di viewport
    end: "top 50%", // Animasi berakhir saat elemen mencapai 50% viewport
    scrub: false, // Jika true, animasi akan mengikuti scroll
  },
  opacity: 0,
  y: 80,
  duration: 1.5,
  ease: "power2.out",
});
gsap.from(".card-2", {
  scrollTrigger: {
    trigger: ".card-2",
    start: "top 100%", // Memulai animasi saat elemen 80% terlihat di viewport
    end: "top 50%", // Animasi berakhir saat elemen mencapai 50% viewport
    scrub: false, // Jika true, animasi akan mengikuti scroll
  },
  opacity: 0,
  y: 80,
  duration: 1.6,
  ease: "power2.out",
});
gsap.from(".card-3", {
  scrollTrigger: {
    trigger: ".card-3",
    start: "top 100%", // Memulai animasi saat elemen 80% terlihat di viewport
    end: "top 50%", // Animasi berakhir saat elemen mencapai 50% viewport
    scrub: false, // Jika true, animasi akan mengikuti scroll
  },
  opacity: 0,
  y: 80,
  duration: 1.7,
  ease: "power2.out",
});
gsap.from(".card-4", {
  scrollTrigger: {
    trigger: ".card-4",
    start: "top 100%", // Memulai animasi saat elemen 80% terlihat di viewport
    end: "top 50%", // Animasi berakhir saat elemen mencapai 50% viewport
    scrub: false, // Jika true, animasi akan mengikuti scroll
  },
  opacity: 0,
  y: 80,
  duration: 1.8,
  ease: "power2.out",
});

// Animasi Contact Section
gsap.from(".judul-contact", {
  scrollTrigger: {
    trigger: ".judul-contact",
    start: "top 100%", // Memulai animasi saat elemen 80% terlihat di viewport
    end: "top 50%", // Animasi berakhir saat elemen mencapai 50% viewport
    scrub: false, // Jika true, animasi akan mengikuti scroll
  },
  opacity: 0,
  y: 80,
  duration: 1.5,
  ease: "power2.out",
});
gsap.from(".isi-contact", {
  scrollTrigger: {
    trigger: ".isi-contact",
    start: "top 100%", // Memulai animasi saat elemen 80% terlihat di viewport
    end: "top 50%", // Animasi berakhir saat elemen mencapai 50% viewport
    scrub: false, // Jika true, animasi akan mengikuti scroll
  },
  opacity: 0,
  y: 70,
  duration: 1.6,
  ease: "power2.out",
});
gsap.from(".tombol-contact", {
  scrollTrigger: {
    trigger: ".tombol-contact",
    start: "top 100%", // Memulai animasi saat elemen 80% terlihat di viewport
    end: "top 50%", // Animasi berakhir saat elemen mencapai 50% viewport
    scrub: false, // Jika true, animasi akan mengikuti scroll
  },
  opacity: 0,
  y: 90,
  duration: 1.6,
  ease: "power2.out",
});
