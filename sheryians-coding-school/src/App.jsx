import React from 'react'

import Card from './components/card'

const App = () => {

  const cards = [
  {
    image: "https://ik.imagekit.io/sheryians/courses_gif/undefined-ai-web-thumb-v7_Ois5c2bkq.jpeg",
    title: "Web Development Bootcamp",
    description: "हिंदी: वेब डेवलपमेंट सीखें | English: Learn Web Development | Hinglish: Web dev seekh ke pro bano",
    originalPrice: 9999,
    discountedPrice: 5399,
    discountPercentage: 46,
  },
  {
    image: "https://ik.imagekit.io/sheryians/courses_gif/undefined-ai-web-thumb-v7_Ois5c2bkq.jpeg",
    title: "Python Programming",
    description: "हिंदी: पायथन सीखें | English: Learn Python | Hinglish: Python seekh ke coding master karo",
    originalPrice: 7999,
    discountedPrice: 4299,
    discountPercentage: 46,
  },
  {
    image: "https://ik.imagekit.io/sheryians/courses_gif/undefined-javaas_Large_jY0Wighav__6PygWBZQ.jpeg",
    title: "Data Science Basics",
    description: "हिंदी: डेटा साइंस शुरू करें | English: Start Data Science | Hinglish: Data science shuru kar master bano",
    originalPrice: 10999,
    discountedPrice: 5919,
    discountPercentage: 46,
  },
  {
    image: "https://ik.imagekit.io/sheryians/courses_gif/undefined-maxresdefault_5-AHh9_1Y.jpg",
    title: "Mobile App Development",
    description: "हिंदी: ऐप डेवलपमेंट सीखें | English: Learn App Development | Hinglish: App dev seekh ke app banao",
    originalPrice: 8999,
    discountedPrice: 4843,
    discountPercentage: 46,
  },
  {
    image: "https://ik.imagekit.io/sheryians/courses_gif/undefined-maxresdefault_5-AHh9_1Y.jpg",
    title: "UI/UX Design",
    description: "हिंदी: UI/UX डिज़ाइन सीखें | English: Learn UI/UX Design | Hinglish: UI/UX design seekh ke creative bano",
    originalPrice: 7499,
    discountedPrice: 4039,
    discountPercentage: 46,
  },
  {
    image: "https://ik.imagekit.io/sheryians/courses_gif/undefined-web-dsa-thumb-10_ZKtPNgmW_.webp_Zhu2w1to5h.jpeg",
    title: "Cybersecurity Fundamentals",
    description: "हिंदी: साइबर सुरक्षा सीखें | English: Learn Cybersecurity | Hinglish: Cybersecurity seekh ke secure karo",
    originalPrice: 12999,
    discountedPrice: 6999,
    discountPercentage: 46,
  },
  {
    image: "https://ik.imagekit.io/sheryians/Cohort%202.0/cohort-3_ekZjBiRzc-2_76HU4-Mz5z.jpeg?updatedAt=1757741949621",
    title: "Cloud Computing",
    description: "हिंदी: क्लाउड कम्प्यूटिंग सीखें | English: Learn Cloud Computing | Hinglish: Cloud computing seekh ke expert bano",
    originalPrice: 11999,
    discountedPrice: 6459,
    discountPercentage: 46,
  },
  {
    image: "https://ik.imagekit.io/sheryians/courses_gif/undefined-ai-web-thumb-v7_Ois5c2bkq.jpeg",
    title: "Machine Learning",
    description: "हिंदी: मशीन लर्निंग सीखें | English: Learn Machine Learning | Hinglish: Machine learning seekh ke AI master karo",
    originalPrice: 13999,
    discountedPrice: 7539,
    discountPercentage: 46,
  },
  {
    image: "https://ik.imagekit.io/sheryians/courses_gif/undefined-maxresdefault_5-AHh9_1Y.jpg",
    title: "DevOps Essentials",
    description: "हिंदी: डेवॉप्स सीखें | English: Learn DevOps | Hinglish: DevOps seekh ke deployment expert bano",
    originalPrice: 9499,
    discountedPrice: 5113,
    discountPercentage: 46,
  },
  {
    image: "https://ik.imagekit.io/sheryians/courses_gif/undefined-maxresdefault_5-AHh9_1Y.jpg",
    title: "Graphic Design Mastery",
    description: "हिंदी: ग्राफिक डिज़ाइन सीखें | English: Learn Graphic Design | Hinglish: Graphic design seekh ke creative bano",
    originalPrice: 6999,
    discountedPrice: 3767,
    discountPercentage: 46,
  },
];





  return (
    <>
<Card jass ={cards} />
    </>
  )
}

export default App