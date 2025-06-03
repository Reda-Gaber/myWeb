import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../data/blogData';

const Article5: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id || '5', 10);
  const post = blogData.find((post) => post.id === postId);

  if (!post) {
    return (
      <div className="text-center py-12" dir="rtl">
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
          src={post.image || '/default-image.jpg'} // صورة افتراضية لو post.image غير موجود
          alt={post.title || 'مقال بدون عنوان'}
          className="w-full h-full object-cover"
        />
      </div>

      {/* العنوان والمعلومات */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {post.title || 'بناء مشاريع برمجية كاملة'}
        </h1>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <p>
            بقلم{' '}
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {post.author || 'غير معروف'}
            </span>
          </p>
          <p>{post.date || new Date().toLocaleDateString('ar-EG')}</p>
        </div>
      </div>

      {/* المحتوى */}
      <div className="prose prose-lg prose-gray dark:prose-invert mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">مقدمة عن بناء المشاريع البرمجية الكاملة</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          يُعد بناء مشروع برمجي كامل عملية تتطلب تكاملًا دقيقًا بين الواجهة الأمامية (Frontend) والواجهة الخلفية (Backend)، مع ضمان تواصل فعال بينهما. تشكل الواجهة الأمامية النافذة التي يتفاعل من خلالها المستخدم مع التطبيق، بينما تتولى الواجهة الخلفية إدارة البيانات، المنطق البرمجي، والسيرفرات. يتطلب إنجاز مشروع كامل تنظيمًا محكمًا، خاصة عند العمل ضمن فريق، مع استخدام أدوات إدارة المشاريع ومنهجيات حديثة لضمان تحقيق الأهداف بكفاءة وجودة عالية.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">كيفية عمل الواجهة الأمامية (Frontend)</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          الواجهة الأمامية هي الجزء المرئي من التطبيق الذي يتفاعل معه المستخدم مباشرة، وتُعنى بتقديم تجربة مستخدم جذابة وسلسة. تُبنى الواجهة الأمامية باستخدام تقنيات أساسية تشمل:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li><strong>HTML</strong>: لتحديد هيكلية الصفحات الإلكترونية.</li>
          <li><strong>CSS</strong>: لتنسيق العناصر المرئية، مع مكتبات مثل Tailwind CSS أو Bootstrap لتسريع التصميم.</li>
          <li><strong>JavaScript</strong>: لإضافة التفاعلية، مع أطر عمل مثل React، Vue.js، أو Angular لتطوير تطبيقات ديناميكية.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          يتولى مطورو الواجهة الأمامية مهام مثل تصميم واجهات مستخدم متجاوبة (Responsive Design) تتوافق مع مختلف الأجهزة، تحسين أداء التحميل، ودمج طلبات واجهات البرمجة (APIs) لجلب البيانات من الواجهة الخلفية وعرضها بطريقة منظمة.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">كيفية عمل الواجهة الخلفية (Backend)</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          الواجهة الخلفية هي العمود الفقري للتطبيق، حيث تتولى إدارة العمليات الداخلية التي لا يراها المستخدم. تشمل التقنيات المستخدمة في تطوير الواجهة الخلفية:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li><strong>لغات البرمجة</strong>: مثل Python (مع Django أو Flask)، JavaScript (مع Node.js)، Java (مع Spring Boot)، أو PHP.</li>
          <li><strong>قواعد البيانات</strong>: قواعد بيانات علائقية مثل MySQL أو PostgreSQL، أو غير علائقية مثل MongoDB أو Redis.</li>
          <li><strong>إدارة السيرفر</strong>: باستخدام أدوات مثل Nginx أو منصات سحابية مثل AWS، Azure، أو DigitalOcean.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          يتولى مطورو الواجهة الخلفية مهام مثل إنشاء واجهات برمجة (APIs)، إدارة قواعد البيانات، ضمان الأمان من خلال تقنيات المصادقة والتشفير، وتحسين أداء السيرفر لدعم حركة المرور العالية.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">كيفية الربط بين الواجهة الأمامية والخلفية</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          يتم الربط بين الواجهة الأمامية والخلفية من خلال واجهات البرمجة (APIs)، وغالبًا باستخدام تقنيات مثل REST أو GraphQL. تعمل العملية على النحو التالي:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>ترسل الواجهة الأمامية طلبات HTTP (مثل GET، POST، PUT، DELETE) إلى نقاط نهاية (Endpoints) محددة في الواجهة الخلفية.</li>
          <li>تستقبل الواجهة الخلفية الطلب، تتفاعل مع قاعدة البيانات أو تقوم بمعالجة المنطق البرمجي، وتُرجع استجابة (غالبًا بصيغة JSON).</li>
          <li>تعالج الواجهة الأمامية الاستجابة وتعرض البيانات للمستخدم بطريقة منظمة وجذابة.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          على سبيل المثال، في تطبيق متجر إلكتروني، عندما يضغط المستخدم على زر "عرض المنتجات"، ترسل الواجهة الأمامية طلب GET إلى نقطة نهاية مثل <code>/api/products</code>. تستجيب الواجهة الخلفية بقائمة المنتجات بصيغة JSON، ثم تعرضها الواجهة الأمامية في واجهة المستخدم.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">تنظيم فريق مكون من 10 أفراد لإنجاز مشروع كامل</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          لإنجاز مشروع برمجي كامل بفريق مكون من 10 أفراد، يجب اتباع منهجية منظمة مثل Agile أو Scrum لضمان التعاون الفعال والتقدم المستمر. إليك خطة تفصيلية لتنظيم العمل مع تقسيم الأدوار:
        </p>
        <ol className="list-decimal pr-6 text-gray-700 dark:text-gray-300 space-y-4">
          <li>
            <strong>تقسيم الأدوار</strong>: يمكن توزيع الأدوار على النحو التالي:
            <ul className="list-disc pr-6 space-y-2">
              <li>مدير المشروع (1 فرد): يشرف على الجدول الزمني، يوزع المهام، ويتابع التقدم باستخدام أدوات مثل Jira أو Trello.</li>
              <li>مطورو الواجهة الأمامية (3 أفراد): يتولون تصميم وتطوير واجهة المستخدم باستخدام React أو Vue.js.</li>
              <li>مطورو الواجهة الخلفية (3 أفراد): ينشئون واجهات برمجة (APIs)، يديرون قواعد البيانات، ويضبطون السيرفر.</li>
              <li>مختبر الجودة (QA Engineer) (1 فرد): يكتب اختبارات Unit وIntegration، ويتأكد من خلو التطبيق من الأخطاء.</li>
              <li>مختص DevOps (1 فرد): يدير النشر وإعداد CI/CD باستخدام Docker وGitHub Actions.</li>
              <li>مصمم واجهة المستخدم (UI/UX Designer) (1 فرد): يصمم الواجهات باستخدام أدوات مثل Figma أو Adobe XD.</li>
            </ul>
          </li>
          <li>
            <strong>تخطيط المشروع</strong>: قسّم المشروع إلى مراحل (Sprints) باستخدام أدوات إدارة المشاريع. حدد المتطلبات (User Stories) ورتبها حسب الأولوية.
          </li>
          <li>
            <strong>إعداد بيئة العمل</strong>: أنشئ مستودعًا على GitHub، واضبط الفروع (مثل <code>main</code> و<code>dev</code>)، واستخدم GitHub Issues لتتبع المهام.
          </li>
          <li>
            <strong>تطوير الواجهة الأمامية</strong>: يبدأ مصمم الـ UI بإنشاء التصميمات، ثم يحولها مطورو الفرونت إند إلى واجهات تفاعلية، مع دمج طلبات API باستخدام مكتبات مثل Axios أو Fetch.
          </li>
          <li>
            <strong>تطوير الواجهة الخلفية</strong>: ينشئ مطورو الباك إند قاعدة البيانات، يكتبون APIs باستخدام إطار عمل مثل Express أو Django، ويضمنون الأمان باستخدام JWT أو OAuth.
          </li>
          <li>
            <strong>الاختبار والتكامل</strong>: يجري مختبر الجودة اختبارات يدوية وآلية، بينما يدمج الفريق الكود عبر Pull Requests على GitHub، مع مراجعة الكود (Code Review).
          </li>
          <li>
            <strong>النشر</strong>: يستخدم مختص DevOps منصات مثل AWS، Netlify، أو Vercel لنشر التطبيق، مع إعداد CI/CD لتحديثات تلقائية.
          </li>
          <li>
            <strong>الصيانة والتحسين</strong>: يتابع الفريق المشروع بعد النشر لإصلاح الأخطاء، تحسين الأداء، وإضافة ميزات جديدة بناءً على ملاحظات المستخدمين.
          </li>
        </ol>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          مثال عملي: إذا كان المشروع تطبيقًا لإدارة المهام، يصمم مصمم الـ UI واجهة لإضافة/عرض المهام باستخدام Figma. يبني مطورو الفرونت إند الواجهة بـ React، ويطلبون البيانات من API مثل <code>/api/tasks</code>. ينشئ مطورو الباك إند قاعدة بيانات MongoDB، ويكتبون APIs بـ Node.js + Express. يختبر مختبر الجودة التطبيق باستخدام Jest، وينشره مختص DevOps على Heroku مع إعداد CI/CD عبر GitHub Actions.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">أنواع المشاريع البرمجية</h2>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">1. المشاريع البسيطة (سهلة ومناسبة للمبتدئين)</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          المشاريع البسيطة تتطلب مهارات أساسية، وتُعد مثالية لتعلم التكامل بين الواجهة الأمامية والخلفية. تتميز بالبساطة وقلة التعقيد. مثال:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li><strong>تطبيق قائمة مهام (To-Do List)</strong>:
            <ul className="list-circle pr-6 space-y-1">
              <li><strong>الواجهة الأمامية</strong>: واجهة بسيطة بـ HTML، CSS، وJavaScript (أو React) لإضافة، عرض، وحذف المهام.</li>
              <li><strong>الواجهة الخلفية</strong>: API بسيط بـ Node.js + Express، مع قاعدة بيانات MongoDB لتخزين المهام.</li>
              <li><strong>الربط</strong>: طلبات GET/POST إلى <code>/api/tasks</code> لجلب أو إضافة المهام.</li>
              <li><strong>الأدوات</strong>: GitHub لإدارة الكود، Netlify لنشر الواجهة الأمامية، Heroku لنشر الواجهة الخلفية.</li>
              <li><strong>المدة</strong>: أسبوع إلى أسبوعين لفريق صغير.</li>
            </ul>
          </li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          هذه المشاريع تُعلم أساسيات واجهات البرمجة، إدارة قواعد البيانات، واستخدام أدوات التحكم بالإصدارات، وهي مناسبة للمبتدئين.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">2. المشاريع الاحترافية (معقدة وتتطلب خبرة)</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          المشاريع الاحترافية تتطلب تكاملًا متقدمًا، أمانًا عاليًا، وقابلية للتوسع لدعم عدد كبير من المستخدمين. تتميز بالتعقيد والحاجة إلى تقنيات متقدمة. مثال:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li><strong>منصة تعليمية إلكترونية</strong>:
            <ul className="list-circle pr-6 space-y-1">
              <li><strong>الواجهة الأمامية</strong>: واجهة متطورة بـ React، تشمل بث فيديوهات، اختبارات تفاعلية، ولوحة تحكم للطلاب والمعلمين.</li>
              <li><strong>الواجهة الخلفية</strong>: APIs بـ Python + Django، قاعدة بيانات PostgreSQL، تكامل مع AWS S3 لتخزين الفيديوهات، وStripe للمدفوعات.</li>
              <li><strong>الربط</strong>: GraphQL لجلب بيانات ديناميكية، مع WebSockets للإشعارات الفورية (مثل تحديثات الدروس).</li>
              <li><strong>الأدوات</strong>: Docker لإنشاء بيئات متكررة، Kubernetes لإدارة التوسع، GitHub Actions لـ CI/CD، SonarQube لتحليل جودة الكود.</li>
              <li><strong>الأمان</strong>: مصادقة بـ JWT، تشفير SSL، حماية ضد هجمات XSS وSQL Injection.</li>
              <li><strong>المدة</strong>: 2-3 أشهر لفريق من 10 أفراد.</li>
            </ul>
          </li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          هذه المشاريع تتطلب فهمًا عميقًا لتصميم الأنظمة، تحسين الأداء، وإدارة حركة المرور العالية، وهي موجهة للمطورين ذوي الخبرة.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">مصادر تعليمية موصى بها</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          لتعلم بناء مشاريع برمجية كاملة، إليك مجموعة من المصادر التعليمية الموثوقة:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>
            <a href="https://www.youtube.com/c/ElzeroWebSchool" className="text-blue-600 dark:text-blue-400 hover:underline">
              Elzero Web School
            </a>: دروس بالعربية لبناء مشاريع كاملة باستخدام React وNode.js، مع شروحات عملية.
          </li>
          <li>
            <a href="https://www.freecodecamp.org/learn" className="text-blue-600 dark:text-blue-400 hover:underline">
              freeCodeCamp
            </a>: دروس مجانية ومشاريع عملية لتطوير تطبيقات Full-Stack.
          </li>
          <li>
            <a href="https://www.coursera.org/specializations/full-stack-react" className="text-blue-600 dark:text-blue-400 hover:underline">
              Coursera - Full-Stack Web Development
            </a>: دورة شاملة من جامعة هونغ كونغ تغطي الفرونت والباك إند.
          </li>
          <li>
            <a href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery" className="text-blue-600 dark:text-blue-400 hover:underline">
              Udemy - The Complete Web Developer
            </a>: دورة تغطي تطوير الويب من الصفر إلى الاحتراف.
          </li>
          <li>
            <a href="https://academy.hsoub.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              أكاديمية حسوب
            </a>: دروس بالعربية عن تطوير الويب وإدارة المشاريع.
          </li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">نصائح للنجاح في بناء المشاريع البرمجية</h2>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>ابدأ بمشاريع بسيطة لفهم التكامل بين الواجهة الأمامية والخلفية.</li>
          <li>استخدم أدوات إدارة المشاريع مثل Trello أو Jira لتنظيم المهام.</li>
          <li>وثّق الكود وواجهات البرمجة جيدًا باستخدام أدوات مثل Swagger أو Postman.</li>
          <li>أجرِ اختبارات منتظمة لضمان جودة التطبيق باستخدام أدوات مثل Jest أو Selenium.</li>
          <li>شارك المشروع على GitHub لبناء محفظة احترافية تُبرز مهاراتك.</li>
        </ul>

        <p className="text-gray-700 dark:text-gray-300 italic bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
          نصيحة نهائية: استثمر في العمل الجماعي وبناء مشاريع عملية متنوعة لتطوير مهاراتك وتعزيز فرصك المهنية في سوق العمل.
        </p>
      </div>

      {/* التاجات */}
      <div className="flex flex-wrap gap-2">
        {post.tags && post.tags.length > 0 ? (
          post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300"
            >
              {tag}
            </span>
          ))
        ) : (
          <span className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300">
            برمجة
          </span>
        )}
      </div>
    </div>
  );
};

export default Article5;