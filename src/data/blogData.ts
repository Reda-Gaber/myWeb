export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  tags: string[];
}

const blogData: BlogPost[] = [
  {
    id: 1,
    title: "My Journey Learning Backend Development",
    excerpt: "A quick look at how I started backend development and what technologies I’ve explored so far.",
    content: "I started my backend journey by learning the fundamentals of programming with C++. Then I moved to JavaScript and began working with Node.js, Express, and PostgreSQL. In this post, I share what helped me stay consistent and what resources I recommend for beginners...",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Reda Gaber",
    date: "June 2, 2025",
    tags: ["Backend", "Node.js", "Learning Journey"]
  },
  {
    id: 2,
    title: "How I Built 'Arabyat' – A Car Service App",
    excerpt: "A breakdown of how I developed my first full-stack project using React and Node.js.",
    content: "‘Arabyat’ is a web app that connects users with car repair services. I built it using React on the frontend, Node.js and Express on the backend, and PostgreSQL as the database. I also implemented authentication and workshop contracts. This post explains the architecture and lessons I learned...",
    image: "https://images.pexels.com/photos/4489748/pexels-photo-4489748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Reda Gaber",
    date: "May 20, 2025",
    tags: ["Full Stack", "React", "Node.js", "PostgreSQL"]
  },
  {
    id: 3,
    title: "Understanding APIs as a Beginner",
    excerpt: "APIs sounded scary at first, but here's how I understood and started working with them.",
    content: "When I first heard about REST APIs, I was overwhelmed. But once I built my first few routes in Express and tested them with Postman, things clicked. In this post, I explain what helped me understand API endpoints, requests, and JSON responses...",
    image: "https://images.pexels.com/photos/7657588/pexels-photo-7657588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Reda Gaber",
    date: "April 12, 2025",
    tags: ["APIs", "REST", "Beginner Tips"]
  },
  {
    id: 4,
    title: "Tips for Staying Consistent as a Self-Taught Developer",
    excerpt: "Sharing what helped me stay motivated while learning coding every day.",
    content: "Self-learning is not easy, but with a proper plan and tracking system, I managed to stay consistent. In this article, I share my weekly study schedule, how I mix topics like problem solving and backend, and how I avoid burnout...",
    image: "https://images.pexels.com/photos/4145196/pexels-photo-4145196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Reda Gaber",
    date: "March 25, 2025",
    tags: ["Productivity", "Self-taught", "Motivation"]
  },
  {
    id: 5,
    title: "Why I Chose Backend over Frontend",
    excerpt: "A personal reflection on why I enjoy backend development more.",
    content: "Frontend can be fun, but I found myself drawn more to logic, databases, and APIs. In this post, I talk about what made me choose backend, and how I plan to grow in that field moving forward, including system design and architecture...",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Reda Gaber",
    date: "February 8, 2025",
    tags: ["Backend", "Career Path", "Web Development"]
  }
];

export default blogData;
