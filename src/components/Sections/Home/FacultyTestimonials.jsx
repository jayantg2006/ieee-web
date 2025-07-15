import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "IEEE has been instrumental in my career, providing a platform to collaborate with peers and stay updated on analog electronics. Being recognized as an IEEE Fellow is an honor, and I’m grateful for the chance to contribute to the IEEE CAS Society. IEEE continues to inspire innovation and excellence in engineering.",
    name: "Prof. Raj Senani",
    designation: "IEEE Member",
    src: "http://www.nsut.ac.in/sites/default/files/styles/node_image_/public/2021-07/rs_0.jpg?itok=UjWYV-F7",
  },
  {
    quote:
      "My association with IEEE has been key to my growth as a computer engineer. The conferences and workshops expanded my knowledge and connected me with industry leaders. Publishing in IEEE journals gave my research global visibility, and I’m proud to be part of this prestigious organization.",
    name: "Dr. Rakesh Kumar",
    designation: "IEEE Member",
    src: "https://eds.ieee.org/images/files/Education/rakeshkumar.jpg",
  },
  {
    quote:
      "IEEE has been a fantastic platform for advancing my career and contributing to engineering. The Women in Engineering (WIE) initiatives have been especially inspiring, encouraging more women to pursue STEM careers. The wealth of resources and vibrant community make IEEE an invaluable part of my professional life.",
    name: "Dr. Neeta Pandey",
    designation: "IEEE Member",
    src: "https://ieeexplore.ieee.org/mediastore/IEEE/content/freeimages/8919/8635013/8519743/pande-2876785-small.gif",
  },
  {
    quote:
      "IEEE has been crucial to my growth in power electronics and renewable energy. Through its committees and conferences, I’ve collaborated with global experts and stayed at the forefront of technology. IEEE’s commitment to innovation is commendable.",
    name: "Dr. Sanjeev Jain",
    designation: "IEEE Member",
    src: "https://ieeexplore.ieee.org/mediastore/IEEE/content/freeimages/6287639/10820123/10840190/jain-3529754-small.gif",
  },
  {
    quote:
      "IEEE has been essential to my growth in computer science and engineering. Its support through conferences, publications, and resources is unmatched, offering countless opportunities to grow, collaborate, and contribute to the field.",
    name: "Prof. Yogesh Singh",
    designation: "IEEE Member",
    src: "https://ieeexplore.ieee.org/mediastore/IEEE/content/freeimages/8919/10944800/10874890/chauh-3533044-small.gif",
  },
];

export default function FacultyTestimonials() {
  return <AnimatedTestimonials testimonials={testimonials} />;
}
