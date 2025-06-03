export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  tags: string[];
  link: string;
}

const blogData: BlogPost[] = [
  {
    id: 1,
    title: "مدخل إلى أساسيات البرمجة",
    excerpt: "نظرة تمهيدية على المفاهيم الأساسية للبرمجة للمبتدئين، من المتغيرات إلى الحلقات.",
    content: "قد تبدو البرمجة معقدة للوهلة الأولى، لكنها تعتمد على مفاهيم أساسية تشمل المتغيرات، أنواع البيانات، الشروط، الحلقات، والدوال...",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "رضا جابر",
    date: "2 يونيو 2025",
    tags: ["البرمجة", "المبتدئين", "الأساسيات"],
    link: "/articles/1"
  },
  {
    id: 2,
    title: "إتقان تطوير الواجهات الأمامية: HTML، CSS، ورياكت",
    excerpt: "استكشاف تطوير الواجهات الأمامية وبناء واجهات مستخدم جذابة باستخدام أدوات حديثة.",
    content: "يتعلق تطوير الواجهات الأمامية بإنشاء الجزء المرئي من المواقع الإلكترونية. في هذا المقال، أستعرض أساسيات HTML للهيكلية، CSS للتصميم...",
    image: "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "رضا جابر",
    date: "20 مايو 2025",
    tags: ["الواجهات الأمامية", "رياكت", "HTML", "CSS"],
    link: "/articles/2"
  },
  {
    id: 3,
    title: "تبسيط تطوير الخلفيات: الخوادم، واجهات البرمجة، وقواعد البيانات",
    excerpt: "تعرف على أساسيات تطوير الخلفيات وبناء تطبيقات خادوم قوية.",
    content: "يُشكل تطوير الخلفيات العمود الفقري للتطبيقات الإلكترونية من خلال إدارة المنطق والبيانات. يغطي هذا المقال أساسيات الخوادم، واجهات البرمجة...",
    image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "رضا جابر",
    date: "12 أبريل 2025",
    tags: ["الخلفيات", "Node.js", "واجهات البرمجة", "قواعد البيانات"],
    link: "/articles/3"
  },
  {
    id: 4,
    title: "جيت هاب للمبتدئين: التحكم بالإصدارات والتعاون",
    excerpt: "دليل مبسط لاستخدام جيت هاب لإدارة الأكواد والتعاون مع الآخرين.",
    content: "يُعد جيت هاب أداة أساسية للمبرمجين. في هذا المقال، أشرح أساسيات التحكم بالإصدارات باستخدام Git، بما في ذلك الـ commits، الفروع...",
    image: "https://images.pexels.com/photos/139387/pexels-photo-139387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "رضا جابر",
    date: "25 مارس 2025",
    tags: ["جيت هاب", "التحكم بالإصدارات", "التعاون"],
    link: "/articles/4"
  },
  {
    id: 5,
    title: "بناء المشاريع الكبيرة: من الفكرة إلى النشر",
    excerpt: "كيفية التخطيط، التطوير، والنشر للمشاريع الكبيرة بأفضل الممارسات.",
    content: "تتطلب المشاريع الكبيرة تخطيطًا دقيقًا وتنفيذًا مدروسًا. في هذا المقال، أشارك نهجي لبناء تطبيقات معقدة، من الفكرة إلى النشر...",
    image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "رضا جابر",
    date: "8 فبراير 2025",
    tags: ["المشاريع", "التطوير الكامل", "النشر"],
    link: "/articles/5"
  }
];

export default blogData;