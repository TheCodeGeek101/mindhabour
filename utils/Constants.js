import { FaUserPlus,FaSearch ,FaCalendarPlus, FaUsers,FaChartLine,FaRoad  } from "react-icons/fa";

// services
const services = [
    {
        name:'Compassionate Counseling',
        description:'At MindHarbor, Compassionate Counseling offers a private and understanding environment for you to express your thoughts, emotions, and challenges with skilled mental health professionals.',
        link:'#',
        image:'/counselling.png'   
    },
    {
        name:'Mindful Moments',
        description:'Mindful Moments at MindHarbor invites you to embrace the power of mindfulness and meditation to enhance your mental health. This service provides guided meditation sessions, mindfulness exercises, and resources to help you cultivate a peaceful mind and resilient spirit.',
        link:'#',
        image:'/meditation.jpg'   
    },
    {
        name:'Wellness Workshops',
        description:'Explore our Wellness Workshops at MindHarbor, where learning and personal growth converge to support your mental health journey. These interactive sessions cover a wide range of topics, including stress management, emotional intelligence, healthy relationships, and coping skills.',
        link:'#',
        image:'/growth.png'   
    },
    {
        name:' Harbor Community Support',
        description:'Harbor Community Support is the heart of MindHarbor, offering a secure and nurturing online space for individuals to connect, share experiences, and find support. Our moderated forums and peer support groups are designed to foster a sense of belonging and provide mutual encouragement.',
        link:'#',
        image:'/community.png'   
    },
];

// Navigation links
const navLinks = [
    {
        label:'Home',
        href:'#'
    },
    {
        label:'About',
        href:'#'
    },
    {
        label:'Services',
        href:'#'
    },
    {
        label:'FAQ',
        href:'#'
    },
    {
        label:'Donations',
        href:'#'
    }
];

// guidelines
const guidelines = [
    {
        title:"Step 1: Sign Up",
        subtitle:"Personalize Your Journey",
        description:"Kickstart your path to mental wellness with a personalized account setup. Answer a few questions to let us tailor your MindHarbor experience, ensuring you get the support and resources that match your needs.",
        icon: <FaUserPlus />,
        iconBg: "#00FFFFFF",
    },
    {
        title:"Step 2: Explore",
        subtitle:"Discover Our Services",
        description:"Navigate through our range of services, including Compassionate Counseling, Mindful Moments, and more. Select the ones that resonate with you and discover how they can support your wellness journey.",
        icon: <FaSearch />,
        iconBg: "#00FFFFFF",
    },
    {
        title:"Step 3: Book a Session",
        subtitle:"Connect with Professionals",
        description:"Use our simple booking system to schedule your first counseling session at a convenient time. Get matched with a skilled professional to guide you through your challenges.",
        icon: <FaCalendarPlus />,    
        iconBg: "#00FFFFFF",
    },
    {
        title:"Step 4: Join the Community",
        subtitle:"Share and Support",
        description:"Dive into our Harbor Community Support forums and groups. Share your story, listen to others, and find mutual encouragement in a nurturing environment.",
        icon: <FaUsers />,
        iconBg: "#00FFFFFF",
    },
    {
        title:"Step 5: Track Progress",
        subtitle:"Reflect and Grow",
        description:"Monitor your journey with our mood tracker and mindfulness exercises. Reflect on your progress, understand your patterns, and celebrate every milestone.",
        icon: <FaChartLine  />,
        iconBg: "#00FFFFFF",
    },
    {
        title:"Step 6: Continue Exploring",
        subtitle:"Your Journey is Ongoing",
        description:"Your journey of mental wellness is ongoing. With MindHarbor, keep accessing our resources, engage with your counselor and the community, and embrace your path to wellness.",
        icon: <FaRoad  />,
        iconBg: "#00FFFFFF",
    }

];
export {navLinks, services, guidelines}