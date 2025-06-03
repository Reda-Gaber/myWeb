import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../data/blogData';

const Article2: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogData.find(post => post.id === parseInt(id || '2'));

  if (!post) {
    return (
      <div className="text-center py-16 bg-gray-50 dark:bg-gray-900 rounded-lg" dir="rtl">
        <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">المقال غير موجود</h3>
        <p className="text-gray-600 dark:text-gray-400">
          يبدو أن المقال الذي تبحث عنه غير موجود. حاول العودة إلى{' '}
          <a href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">صفحة المدونة</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 rounded-xl shadow-md" dir="rtl">
      {/* الصورة الرئيسية */}
      <div className="relative w-full h-[400px] mb-12 rounded-2xl overflow-hidden shadow-xl">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <h1 className="absolute bottom-6 right-6 text-3xl font-bold text-white drop-shadow-lg">
          {post.title}
        </h1>
      </div>

      {/* معلومات المقال */}
      <div className="mb-10 border-b pb-6 border-gray-200 dark:border-gray-700">
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
      <div className="prose prose-gray dark:prose-invert max-w-none text-[18px] font-bold">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          تطوير الواجهات الأمامية (Front-End Development) هو فن وعلم إنشاء الجزء المرئي من المواقع والتطبيقات الإلكترونية التي يتفاعل معها المستخدمون مباشرة. إذا كنت مبتدئًا وترغب في بناء مواقع ويب جذابة وتفاعلية، فهذا المقال سيأخذك في رحلة شاملة لتعلم الأساسيات باستخدام HTML، CSS، وReact. سنستعرض كيف تبدأ، الأدوات التي تحتاجها، خطوات التعلم، وكيف تصبح محترفًا في هذا المجال.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">ما هو تطوير الواجهات الأمامية؟</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          تطوير الواجهات الأمامية يركز على تصميم وبرمجة واجهات المستخدم (UI) التي يراها المستخدمون عند زيارة موقع ويب أو تطبيق. يتضمن ذلك كل شيء من الأزرار والصور إلى القوائم والتفاعلات الديناميكية. الأدوات الأساسية لهذا المجال هي:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>HTML: لغة الهيكلية التي تحدد بنية الصفحة، مثل العناوين والفقرات.</li>
          <li>CSS: لغة التصميم التي تضيف الألوان، الخطوط، والتخطيطات لجعل الصفحة جذابة.</li>
          <li>React: مكتبة JavaScript لإنشاء واجهات مستخدم تفاعلية وديناميكية.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">لماذا HTML وCSS وReact؟</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          هذه الأدوات تشكل العمود الفقري لتطوير الواجهات الأمامية الحديثة:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">HTML</h3>
            <p className="text-gray-700 dark:text-gray-300">
              HTML (HyperText Markup Language) هي الأساس لبناء أي صفحة ويب. إنها تحدد الهيكلية، مثل العناوين، الفقرات، والروابط. سهلة التعلم وتُعتبر نقطة البداية لأي مطور واجهات.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">CSS</h3>
            <p className="text-gray-700 dark:text-gray-300">
              CSS (Cascading Style Sheets) تتحكم في المظهر البصري، مثل الألوان، الحجم، والتخطيطات. تتيح لك إنشاء تصاميم متجاوبة (Responsive) تناسب الهواتف والأجهزة اللوحية.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">React</h3>
            <p className="text-gray-700 dark:text-gray-300">
              React هي مكتبة JavaScript تُستخدم لإنشاء واجهات مستخدم ديناميكية. تتيح لك بناء مكونات قابلة لإعادة الاستخدام، مما يجعل تطوير التطبيقات الكبيرة أسهل وأسرع.
            </p>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300 italic bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
          نصيحة: ابدأ بـ HTML وCSS لفهم الأساسيات، ثم انتقل إلى React لإضافة التفاعلية.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">هل تحتاج إلى خلفية مسبقة؟</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          لا تحتاج إلى خلفية برمجية عميقة لتبدأ في تطوير الواجهات الأمامية. المهارات التالية كافية:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>استخدام الحاسوب: معرفة أساسية بتشغيل المتصفح وإدارة الملفات.</li>
          <li>اللغة الإنجليزية: معرفة بسيطة بالمصطلحات الإنجليزية، حيث إن HTML وCSS وReact تستخدم مصطلحات إنجليزية.</li>
          <li>الصبر والمثابرة: التجربة والخطأ جزء من التعلم، خاصة عند تصميم واجهات.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300">
          إذا لم تكن تملك هذه المهارات، يمكنك تطويرها أثناء التعلم من خلال الممارسة.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">لماذا React بالذات؟</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          هناك العديد من مكتبات وأطر عمل لتطوير الواجهات الأمامية مثل Vue.js وAngular، لكن React تتميز بما يلي:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>سهولة التعلم: مقارنة بـ Angular، React أبسط وتعتمد على JavaScript بشكل أساسي.</li>
          <li>المكونات القابلة لإعادة الاستخدام: يمكنك بناء مكونات (مثل زر أو قائمة) واستخدامها في أماكن متعددة.</li>
          <li>مجتمع دعم كبير: React لديها مجتمع واسع ومصادر تعليمية كثيرة، مما يسهل حل المشكلات.</li>
          <li>طلب في سوق العمل: العديد من الشركات تبحث عن مطوري React لتطوير تطبيقات حديثة.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">رحلة تعلم تطوير الواجهات الأمامية</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          إليك خطة مرنة لتعلم تطوير الواجهات الأمامية من البداية إلى الاحتراف:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>تعلم HTML: افهم كيفية إنشاء هيكلية الصفحات باستخدام العناصر مثل الفقرات، العناوين، والجداول. جرب دورات مثل Elzero Web School أو أكاديمية حسوب.</li>
          <li>إتقان CSS: تعلم كيفية تصميم الصفحات باستخدام الألوان، التخطيطات (مثل Flexbox وGrid)، والتصميم المتجاوب. مصادر مثل FreeCodeCamp مفيدة هنا.</li>
          <li>أساسيات JavaScript: تعلم JavaScript لإضافة التفاعلية مثل النماذج التفاعلية أو الأزرار. دورات TheNewBaghdad على YouTube خيار رائع.</li>
          <li>تعلم React: ابدأ بإنشاء مكونات بسيطة باستخدام React. جرب دورات من Codecademy أو الوثائق الرسمية لـ React.</li>
          <li>بناء مشاريع عملية: قم بإنشاء مشاريع مثل صفحة هبوط (Landing Page)، مدونة، أو متجر إلكتروني بسيط. ابحث عن أفكار مشاريع على GitHub.</li>
          <li>التخصص: ركز على مجالات متقدمة مثل تحسين الأداء، إمكانية الوصول (Accessibility)، أو دمج APIs مع React.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">مصادر تعليمية موصى بها</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          إليك بعض المصادر العربية والعالمية لتبدأ:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li><a href="https://www.youtube.com/c/ElzeroWebSchool" className="text-blue-600 dark:text-blue-400 hover:underline">Elzero Web School</a>: دورات شاملة لتعليم HTML، CSS، وJavaScript بالعربية.</li>
          <li><a href="https://academy.hsoub.com/" className="text-blue-600 dark:text-blue-400 hover:underline">أكاديمية حسوب</a>: دروس تفصيلية للمبتدئين في تطوير الويب.</li>
          <li><a href="https://www.youtube.com/c/TheNewBaghdad" className="text-blue-600 dark:text-blue-400 hover:underline">TheNewBaghdad</a>: شروحات مبسطة لـ JavaScript وReact.</li>
          <li><a href="https://www.freecodecamp.org/" className="text-blue-600 dark:text-blue-400 hover:underline">FreeCodeCamp</a>: دورات مجانية باللغة الإنجليزية مع مشاريع عملية.</li>
          <li><a href="https://reactjs.org/" className="text-blue-600 dark:text-blue-400 hover:underline">وثائق React الرسمية</a>: دليل شامل لتعلم React.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">💡 نصائح لتطوير واجهات أمامية ناجحة</h2>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>ابدأ بمشاريع صغيرة مثل صفحة شخصية أو قائمة مهام لتطبيق ما تعلمته.</li>
          <li>استخدم أدوات مثل Tailwind CSS أو Bootstrap لتسريع عملية التصميم.</li>
          <li>جرب أدوات المتصفح (DevTools) لتصحيح الأخطاء وتحسين التصميم.</li>
          <li>انضم إلى مجتمعات مثل Stack Overflow أو Reddit للحصول على دعم.</li>
          <li>ركز على التصميم المتجاوب لضمان عمل الموقع على جميع الأجهزة.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">الخطوة التالية بعد إتقان الأساسيات</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          بعد إتقان HTML، CSS، وReact، يمكنك التخصص في مجالات متقدمة:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>تحسين الأداء: تعلم كيفية تقليل وقت تحميل الصفحات باستخدام تقنيات مثل Lazy Loading.</li>
          <li>إمكانية الوصول (Accessibility): تأكد أن مواقعك تدعم ذوي الاحتياجات الخاصة.</li>
          <li>دمج APIs: استخدم React لربط الموقع بخدمات خارجية مثل قواعد البيانات أو خدمات الطقس.</li>
          <li>أطر عمل أخرى: جرب Vue.js أو Next.js لتوسيع مهاراتك.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 italic bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
          استمر في بناء مشاريع واقعية وشاركها على GitHub لإنشاء محفظة قوية تجذب أصحاب العمل.
        </p>
      </div>

      {/* التاجات */}
      <div className="flex flex-wrap gap-3 mt-8 justify-end">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="px-4 py-2 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Article2;