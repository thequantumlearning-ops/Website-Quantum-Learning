// One place for facts that appear across the site. Change them here.
export const SITE = {
  name: "Skillsvera",
  email: "skillsvera.team@gmail.com",
  price: 125,
  classesPerCourse: 6,
  weeksPerCourse: 4,
  classLengthMinutes: 60,
  maxClassSize: 15,
  grades: "2–8",
  courseCount: 21,
  // Replace with your Stripe Payment Link when it's ready.
  enrollUrl: "/schedule",
};

export const formatPrice = (n: number) => `$${n}`;

export const tracks = [
  {
    id: "public-speaking",
    name: "Public Speaking",
    short: "Speak up with confidence",
    description:
      "Kids learn to organize their thoughts, hold a room and recover when they lose their place. Each course builds toward a talk they deliver to the class.",
    skills: ["Structuring a talk", "Storytelling", "Debate and rebuttal", "Voice, pace and eye contact"],
  },
  {
    id: "financial-literacy",
    name: "Financial Literacy",
    short: "Make smart money decisions",
    description:
      "Real numbers, real tradeoffs. Kids budget for goals, compare prices, and learn how saving and investing grow over time.",
    skills: ["Earning and budgeting", "Needs versus wants", "Saving and interest", "Investing basics"],
  },
  {
    id: "entrepreneurship",
    name: "Innovation & Entrepreneurship",
    short: "Turn ideas into plans",
    description:
      "Kids spot problems worth solving, design a product, price it and pitch it. They learn to work in a team and take feedback well.",
    skills: ["Finding a problem", "Designing a solution", "Pricing and planning", "Pitching to an audience"],
  },
];

export const testimonials = [
  {
    quote:
      "Both of my children were fully engaged and excited throughout the class. The instructor made even difficult topics clear and relatable, while keeping the session interactive and fun.",
    name: "Shefali Sarangal",
    role: "Parent",
  },
  {
    quote:
      "Both of my children loved Skillsvera. They've gained confidence, new skills, and come out of each session excited to share what they've learned.",
    name: "Mukul Pal",
    role: "Parent",
  },
];

export const faqs = [
  {
    q: "What ages do you teach?",
    a: "Students in grades 2 through 8. Our curriculum builds year over year, so younger and older students each get material that fits.",
  },
  {
    q: "How does a course work?",
    a: `Each course is ${SITE.classesPerCourse} live, one-hour classes over ${SITE.weeksPerCourse} weeks, held on weekends over Zoom. Classes are capped at ${SITE.maxClassSize} students so every child gets time to participate.`,
  },
  {
    q: "How much does it cost?",
    a: `${formatPrice(SITE.price)} per course. That covers every class, materials, instructor feedback, class recordings and a certificate. There are no add-ons or hidden fees.`,
  },
  {
    q: "What does my child need?",
    a: "A computer or tablet with a camera and microphone, a stable internet connection and a quiet spot. We'll send the Zoom link and materials before the first class.",
  },
  {
    q: "What if my child misses a class?",
    a: "Every class is recorded, so your child can catch up before the next session.",
  },
  {
    q: "Which track should we start with?",
    a: "Most families start with Public Speaking, because confidence carries into everything else. If you're unsure, book a free call and we'll help you choose.",
  },
  {
    q: "Can my child take more than one track?",
    a: `Yes. The three tracks are independent, and our ${SITE.courseCount}-course curriculum lets students keep advancing in each one through 8th grade.`,
  },
  {
    q: "Who teaches the classes?",
    a: "Our founders teach every class themselves. They wrote the curriculum, so your child learns from the people who designed it.",
  },
  {
    q: "What is your refund policy?",
    a: "See our refund policy for full details, or email us and we'll help.",
    link: { to: "/refund-policy", label: "Read the refund policy" },
  },
];
