import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../data/blogData';

const Article3: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogData.find(post => post.id === parseInt(id || '3'));

  if (!post) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2">المقال غير موجود</h3>
        <p className="text-gray-600 dark:text-gray-400">
          يبدو أن المقال الذي تبحث عنه غير موجود. حاول العودة إلى صفحة المدونة.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8" dir="rtl">
      {/* الصورة الرئيسية */}
      <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* العنوان والمعلومات */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {post.title}
        </h1>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <p>
            بقلم{' '}
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {post.author}
            </span>
          </p>
          <p>{post.date}</p>
        </div>
      </div>

      {/* المحتوى */}
      <div className="prose prose-lg prose-gray dark:prose-invert mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">مقدمة عن تطوير الباك إند</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          يُعد تطوير الباك إند (Backend Development) الركيزة الأساسية لأي تطبيق إلكتروني، سواء كان موقعًا إلكترونيًا أو تطبيقًا للهواتف الذكية. يركز هذا المجال على بناء وإدارة الأنظمة الخلفية التي تدعم التطبيقات، وتشمل قواعد البيانات، المنطق البرمجي، واجهات البرمجة (APIs)، إدارة السيرفرات، والأمان. يُشبه الباك إند المحرك الذي يعمل خلف الكواليس لضمان تقديم تجربة مستخدم سلسة وآمنة عبر الواجهة الأمامية (Frontend).
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">مهام مطور الباك إند</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          يتحمل مطور الباك إند مسؤوليات حيوية تشمل:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>إنشاء وإدارة قواعد البيانات لتخزين واسترجاع البيانات بكفاءة.</li>
          <li>تطوير واجهات البرمجة (APIs) لتسهيل التواصل بين الواجهة الأمامية والسيرفر.</li>
          <li>تصميم المنطق البرمجي لإدارة العمليات الداخلية مثل المصادقة ومعالجة البيانات.</li>
          <li>ضمان الأمان من خلال تطبيق تقنيات التشفير وحماية البيانات.</li>
          <li>إعداد وصيانة السيرفرات لتحقيق الأداء الأمثل وقابلية التوسع.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">المهارات اللازمة لتطوير الباك إند</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          ليصبح الفرد مطور باك إند محترفًا، يجب إتقان مجموعة واسعة من المهارات والأدوات التالية:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li><strong>لغات البرمجة</strong>: تشمل Python (مع أطر عمل مثل Django وFlask)، JavaScript (مع Node.js)، PHP (لأنظمة إدارة المحتوى)، Java (لتطبيقات المؤسسات الكبرى)، Ruby (مع Ruby on Rails)، وGo (للتطبيقات عالية الأداء).</li>
          <li><strong>قواعد البيانات</strong>: إتقان قواعد البيانات العلائقية (مثل MySQL وPostgreSQL) باستخدام SQL، وقواعد البيانات غير العلائقية (مثل MongoDB وRedis) لإدارة البيانات غير المنظمة.</li>
          <li><strong>واجهات البرمجة (APIs)</strong>: تصميم وتطوير واجهات برمجية باستخدام REST أو GraphQL، مع فهم مفاهيم HTTP وJSON.</li>
          <li><strong>إدارة السيرفر</strong>: استخدام أدوات مثل Nginx وApache، وإدارة منصات سحابية مثل AWS، Azure، أو DigitalOcean.</li>
          <li><strong>التحكم بالإصدارات</strong>: إتقان Git ومنصات مثل GitHub، GitLab، أو Bitbucket لإدارة الكود والتعاون.</li>
          <li><strong>الأمان</strong>: تطبيق تقنيات المصادقة (مثل JWT) والتفويض (مثل OAuth)، وحماية التطبيقات من هجمات مثل SQL Injection وCross-Site Scripting (XSS).</li>
          <li><strong>هياكل البيانات والخوارزميات</strong>: فهم هياكل البيانات مثل القوائم، الأشجار، والجداول المنتشرة، وخوارزميات البحث والفرز لتحسين الأداء.</li>
          <li><strong>معمارية الحاسوب</strong>: فهم أساسيات عمل الأجهزة، بما في ذلك وحدات المعالجة (CPU)، الذاكرة (RAM)، التخزين (HDD/SSD)، وأنظمة الشبكات، لتحسين تخصيص الموارد وأداء التطبيقات.</li>
          <li><strong>اختبار الكود</strong>: كتابة اختبارات Unit Tests، Integration Tests، وEnd-to-End Tests باستخدام أدوات مثل Jest (لـ JavaScript)، PyTest (لـ Python)، أو JUnit (لـ Java) لضمان جودة الكود.</li>
          <li><strong>DevOps ونشر التطبيقات</strong>: استخدام أدوات مثل Docker وKubernetes لإنشاء بيئات متكررة، وCI/CD pipelines (مثل GitHub Actions أو Jenkins) لأتمتة النشر.</li>
          <li><strong>إدارة الأداء</strong>: تحسين أداء التطبيقات من خلال تقنيات مثل Caching (باستخدام Redis) وLoad Balancing.</li>
          <li><strong>تصميم الأنظمة</strong>: فهم أنماط التصميم مثل Microservices وMonolithic Architecture لتصميم أنظمة قابلة للتوسع.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">خطوات تعلم تطوير الباك إند من الصفر إلى الاحتراف</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          لتحقيق الاحتراف في تطوير الباك إند، يجب اتباع مسار تعليمي منظم يبدأ من الأساسيات ويصل إلى المواضيع المتقدمة:
        </p>
        <ol className="list-decimal pr-6 text-gray-700 dark:text-gray-300 space-y-4">
          <li>
            <strong>إتقان لغة برمجة</strong>: اختر لغة برمجة مناسبة للمبتدئين مثل Python أو JavaScript (Node.js) نظرًا لسهولتها وانتشارها. ركز على فهم المفاهيم الأساسية مثل المتغيرات، الحلقات، الدوال، والبرمجة الكائنية (OOP). استخدم مصادر مثل <a href="https://www.codecademy.com" className="text-blue-600 dark:text-blue-400 hover:underline">Codecademy</a> أو <a href="https://www.freecodecamp.org" className="text-blue-600 dark:text-blue-400 hover:underline">freeCodeCamp</a>.
          </li>
          <li>
            <strong>تعلم قواعد البيانات</strong>: ابدأ بقواعد البيانات العلائقية (مثل MySQL أو PostgreSQL) باستخدام SQL لإنشاء وإدارة المخططات (Schemas) وكتابة استعلامات CRUD. انتقل بعد ذلك إلى قواعد البيانات غير العلائقية مثل MongoDB للتعامل مع البيانات غير المنظمة.
          </li>
          <li>
            <strong>بناء واجهات برمجية (APIs)</strong>: اتعلم تصميم REST APIs باستخدام أطر عمل مثل Express (لـ Node.js) أو Flask (لـ Python). افهم مفاهيم HTTP methods (GET, POST, PUT, DELETE)، وجرب إنشاء API بسيطة تتفاعل مع قاعدة بيانات.
          </li>
          <li>
            <strong>فهم معمارية الحاسوب</strong>: ادرس أساسيات عمل الأجهزة، مثل وحدات المعالجة، الذاكرة، التخزين، وشبكات الحوسبة. هذا الفهم يساعد في تحسين أداء التطبيقات وإدارة الموارد بكفاءة. مصادر مثل <a href="https://www.coursera.org/learn/computer-architecture" className="text-blue-600 dark:text-blue-400 hover:underline">كورس Coursera عن معمارية الحاسوب</a> مفيدة جدًا.
          </li>
          <li>
            <strong>إدارة السيرفر</strong>: اتعلم كيفية إعداد السيرفرات باستخدام Nginx أو Apache، واستخدم منصات سحابية مثل AWS أو DigitalOcean لنشر التطبيقات. جرب أدوات مثل Docker لإنشاء بيئات متكررة.
          </li>
          <li>
            <strong>اختبار الكود</strong>: اكتسب مهارة كتابة اختبارات Unit Tests، Integration Tests، وEnd-to-End Tests باستخدام أدوات مثل Jest، PyTest، أو JUnit. ابدأ باختبارات بسيطة للدوال، ثم انتقل إلى اختبارات التكامل لضمان جودة التطبيق.
          </li>
          {/* <li>
            <strong>إتقان DevOps</strong>: اتعلم استخدام أدوات CI/CD مثل GitHub Actions أو Jenkins لأتمتة النشر، وKubernetes لإدارة التطبيقات الموزعة. هذه المهارات ضرورية لتطوير أنظمة قابلة للتوسع.
          </li> */}
          <li>
            <strong>تحسين الأداء والأمان</strong>: ركز على تقنيات مثل Caching (باستخدام Redis)، Load Balancing، وحماية التطبيقات من الهجمات مثل SQL Injection وXSS.
          </li>
          <li>
            <strong>تصميم الأنظمة</strong>: ادرس أنماط التصميم مثل Microservices وMonolithic Architecture، وافهم كيفية تصميم أنظمة موزعة للتعامل مع حركة مرور عالية.
          </li>
          <li>
            <strong>بناء مشاريع عملية</strong>: ابنِ تطبيقات مثل متجر إلكتروني، نظام إدارة محتوى، أو تطبيق لإدارة المهام. ابدأ بمشاريع صغيرة، ثم أضف ميزات متقدمة مثل المصادقة أو دمج APIs خارجية.
          </li>
          <li>
            <strong>التخصص في المواضيع المتقدمة</strong>: بعد إتقان الأساسيات، ركز على مواضيع مثل تحسين الأداء، الأنظمة الموزعة، أو الذكاء الاصطناعي في الباك إند (مثل دمج نماذج ML).
          </li>
        </ol>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">أشهر مسارات تطوير الباك إند</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          يوجد أربعة مسارات رئيسية شائعة في تطوير الباك إند:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li><strong>Node.js + Express + MongoDB (MERN Stack)</strong>: يعتمد على JavaScript، ويُستخدم لبناء تطبيقات سريعة وقابلة للتوسع.</li>
          <li><strong>Python + Django/Flask + PostgreSQL</strong>: مثالي للمبتدئين، ويُستخدم في تطبيقات الويب وتحليل البيانات.</li>
          <li><strong>Java + Spring + MySQL</strong>: مناسب لتطبيقات المؤسسات الكبيرة، ويتطلب خبرة متقدمة.</li>
          <li><strong>Ruby + Ruby on Rails + PostgreSQL</strong>: معروف بسهولة الاستخدام وسرعة تطوير التطبيقات.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">مصادر تعليمية موصى بها</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          لتعلم تطوير الباك إند من الصفر إلى الاحتراف، إليك مجموعة من المصادر الموثوقة:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>
            <a href="https://www.codecademy.com/learn/paths/back-end-engineer-career-path" className="text-blue-600 dark:text-blue-400 hover:underline">
              Codecademy - Back-End Engineer Path
            </a>: دورة شاملة تغطي Node.js، Express، PostgreSQL، واختبار الكود.
          </li>
          <li>
            <a href="https://www.coursera.org/professional-certificates/meta-back-end-developer" className="text-blue-600 dark:text-blue-400 hover:underline">
              Coursera - Meta Back-End Developer Professional Certificate
            </a>: تركز على Python، Django، MySQL، وDevOps.
          </li>
          <li>
            <a href="https://boot.dev/learn/backend" className="text-blue-600 dark:text-blue-400 hover:underline">
              Boot.dev - Back-End Developer Path
            </a>: تغطي Python، Go، SQL، ومشاريع عملية.
          </li>
          <li>
            <a href="https://www.youtube.com/c/TheNewBaghdad" className="text-blue-600 dark:text-blue-400 hover:underline">
              TheNewBaghdad
            </a>: شروحات بالعربية عن JavaScript، Node.js، وAPIs.
          </li>
          <li>
            <a href="https://academy.hsoub.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              أكاديمية حسوب
            </a>: دروس بالعربية عن Python، PHP، وقواعد البيانات.
          </li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">نصائح للنجاح في تطوير الباك إند</h2>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>ابدأ بمشاريع صغيرة لتطبيق المهارات، مثل تطبيق لإدارة المهام أو متجر إلكتروني.</li>
          <li>استخدم أدوات التحكم بالإصدارات مثل GitHub لبناء محفظة احترافية.</li>
          <li>ركز على جودة الكود من خلال كتابة اختبارات منتظمة.</li>
          <li>انضم إلى مجتمعات المبرمجين مثل Stack Overflow لتبادل الخبرات.</li>
          <li>تابع التطورات التقنية لتظل على اطلاع بأحدث الأدوات والتقنيات.</li>
        </ul>

        <p className="text-gray-700 dark:text-gray-300 italic bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
          نصيحة نهائية: استمر في بناء مشاريع عملية وشاركها على منصات مثل GitHub لتكوين محفظة قوية تعزز فرصك المهنية.
        </p>
      </div>

      {/* التاجات */}
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Article3;