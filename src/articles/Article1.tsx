import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../data/blogData';

const Article1: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogData.find(post => post.id === parseInt(id || '1'));

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
        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
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
          البرمجة هي مفتاح العصر الرقمي، أداة تمكنك من بناء تطبيقات، حل مشكلات معقدة، وإطلاق العنان لإبداعك. إذا كنت مبتدئًا وتشعر بالحيرة حول من أين تبدأ، فهذا المقال سيأخذك في رحلة شاملة من الأساسيات إلى الاحتراف. سنغطي المهارات الأساسية، اللغات المناسبة للمبتدئين مثل Python وC++، أهمية البرمجة الكائنية وهياكل البيانات والخوارزميات، وكيفية تطوير مهارات حل المشكلات.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">الأسس التي تحتاجها لبدء البرمجة</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          قبل أن تغوص في كتابة الأكواد، تحتاج إلى بناء أساس قوي من المهارات التي ستدعمك في رحلتك:
        </p>
        {/* <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>التفكير المنطقي: القدرة على تقسيم المشكلة إلى خطوات صغيرة ومنطقية.</li>
          <li>فهم التعليمات الأساسية: مثل كيفية تخزين المعلومات أو تنفيذ المهام بشكل متكرر.</li>
          <li>تنظيم الكود: كتابة تعليمات واضحة ومنظمة لتسهيل فهمها وتعديلها لاحقًا.</li>
          <li>الصبر وحل المشكلات: مواجهة الأخطاء وإيجاد حلول لها، وهي مهارة تتحسن مع الوقت.</li>
        </ul> */}

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">هل تحتاج إلى خلفية في الحاسوب؟</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          لا تحتاج إلى أن تكون خبيرًا في الحواسيب لتبدأ البرمجة. المهارات الأساسية التالية كافية:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>استخدام الحاسوب: معرفة بسيطة بتشغيل البرامج وإدارة الملفات.</li>
          <li>اللغة الإنجليزية الأساسية: معظم لغات البرمجة تستخدم مصطلحات إنجليزية، لذا المعرفة الأساسية تساعد.</li>
          <li>المثابرة: البرمجة تتطلب تجربة وخطأ، لذا الصبر ضروري.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 italic bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
          لا تقلق إذا لم تملك هذه المهارات بعد؛ يمكنك تطويرها أثناء التعلم!
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">لغات البرمجة الموصى بها: Python وC++</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          اختيار اللغة المناسبة للبدء يعتمد على أهدافك ومستوى راحتك. نرشح لك لغتي Python وC++، وإليك مقارنة بينهما:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Python</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Python هي لغة مثالية للمبتدئين بسبب بساطتها وقرب قواعدها من اللغة الإنجليزية. تُستخدم في:
            </p>
            <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300">
              <li>تطوير الويب (مثل مواقع الإنترنت).</li>
              <li>تحليل البيانات والذكاء الاصطناعي.</li>
              <li>أتمتة المهام الروتينية.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              <strong>لماذا تختار Python؟</strong> سهلة التعلم، نتائج سريعة، ومجتمع دعم كبير.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">C++</h3>
            <p className="text-gray-700 dark:text-gray-300">
              C++ هي لغة قوية وأكثر تعقيدًا، تُستخدم في التطبيقات التي تتطلب أداءً عاليًا مثل:
            </p>
            <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300">
              <li>تطوير الألعاب (مثل Unreal Engine).</li>
              <li>برامج سطح المكتب.</li>
              <li>الأنظمة المدمجة (مثل الأجهزة الذكية).</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              <strong>لماذا تختار C++؟</strong> تساعدك على فهم كيفية عمل الحاسوب بعمق، لكنها تحتاج إلى وقت وجهد أكبر.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">الفرق بين Python وC++ كأساس للتعلم</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          اختيارك بين Python وC++ يعتمد على أهدافك:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>سهولة التعلم: Python أسهل بكثير بسبب قواعدها البسيطة وقلة التفاصيل التقنية.</li>
          <li>فهم الحاسوب: C++ تعلمك كيفية إدارة الذاكرة وتفاصيل الحاسوب، مما يعطيك أساسًا قويًا لفهم البرمجة بعمق.</li>
          <li>التطبيقات العملية: Python مثالية للمشاريع السريعة مثل تحليل البيانات، بينما C++ للتطبيقات عالية الأداء مثل الألعاب.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 italic bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
          نصيحة: ابدأ بـ Python إذا كنت تريد نتائج سريعة، أو اختر C++ إذا كنت مهتمًا بفهم الأنظمة بعمق.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">الانتقال إلى البرمجة الكائنية</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          بعد إتقان الأساسيات، الخطوة التالية هي تعلم البرمجة الكائنية (Object-Oriented Programming - OOP). هذه طريقة لتنظيم الكود بحيث يحاكي العالم الحقيقي، مما يجعل البرامج أكثر مرونة وسهولة في الصيانة. على سبيل المثال:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>تخيل أنك تبني برنامجًا لإدارة مدرسة. يمكنك إنشاء "كائنات" تمثل الطلاب والمعلمين، ولكل كائن خصائص (مثل الاسم) وسلوكيات (مثل حضور الصف).</li>
          <li>كل من Python وC++ تدعم البرمجة الكائنية، لكن Python تجعلها أسهل بسبب بساطتها.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>لماذا البرمجة الكائنية؟</strong> تساعدك على كتابة كود منظم وقابل لإعادة الاستخدام، وهي أساسية للمشاريع الكبيرة.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">هياكل البيانات والخوارزميات</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          هياكل البيانات هي طرق لتخزين المعلومات (مثل القوائم أو الأشجار)، والخوارزميات هي خطوات لحل مشكلة (مثل البحث عن عنصر في قائمة). تعلمهما ضروري للانتقال إلى مستوى متقدم:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>هياكل البيانات: مثل القوائم (لترتيب البيانات) أو القواميس (لتخزين بيانات مرتبطة).</li>
          <li>الخوارزميات: مثل ترتيب قائمة من الأرقام أو البحث عن كلمة في نص.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300">
          C++ ممتازة لتعلم هياكل البيانات لأنها تتيح لك التحكم الكامل في كيفية إدارة البيانات، بينما Python تجعل تعلم الخوارزميات أسهل بسبب بساطتها.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">حل المشكلات</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          مهارة حل المشكلات هي قلب البرمجة. إليك كيف تطورها:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>ممارسة المشكلات البسيطة: ابدأ بتحديات مثل كتابة برنامج لحساب متوسط الأرقام.</li>
          <li>منصات البرمجة التنافسية: جرب منصات مثل LeetCode أو HackerRank لتحسين مهاراتك.</li>
          <li>التعلم من الأخطاء: كل خطأ هو فرصة للتعلم، لذا لا تستسلم!</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">رحلة التعلم من البداية إلى الاحتراف</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          بدلاً من جدول زمني صارم، إليك خطة مرنة لتعلم البرمجة:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>البداية: تعلم أساسيات البرمجة باستخدام Python أو Scratch لفهم التفكير المنطقي. جرب دورات مثل Elzero Web School أو أكاديمية حسوب.</li>
          <li>إتقان لغة: ركز على Python أو C++، وتعلم كيفية كتابة برامج بسيطة. استخدم مصادر مثل TheNewBaghdad أو Codecademy.</li>
          <li>البرمجة الكائنية: افهم كيفية تنظيم الكود باستخدام الكائنات. Python تجعل هذه الخطوة أسهل.</li>
          <li>هياكل البيانات والخوارزميات: تعلم كيفية تخزين البيانات وتحسين أداء البرامج باستخدام منصات مثل LeetCode.</li>
          <li>المشاريع العملية: قم ببناء مشاريع مثل آلة حاسبة أو موقع ويب بسيط باستخدام دروس من YouTube أو GitHub.</li>
          <li>التخصص: اختر مجالًا مثل تطوير الويب (JavaScript، React)، تطوير الألعاب (C++، Unreal Engine)، أو الذكاء الاصطناعي (Python، TensorFlow).</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">💡 نصائح لرحلة برمجية ناجحة</h2>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>ابدأ بمشاريع صغيرة لتطبيق ما تعلمته، مثل آلة حاسبة أو قائمة مهام.</li>
          <li>انضم إلى مجتمعات برمجية مثل Reddit، Discord، أو Stack Overflow.</li>
          <li>خصص وقتًا يوميًا للتعلم، حتى لو كان 30 دقيقة.</li>
          <li>احتفظ بمذكرة لتسجيل التحديات والحلول التي تواجهها.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">الخطوة التالية بعد إتقان لغة</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          بعد إتقان لغة مثل Python أو C++، اختر مجالًا للتخصص:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>تطوير الويب: استخدم JavaScript وReact لبناء مواقع تفاعلية.</li>
          <li>تطوير الألعاب: تعلم C++ مع محركات مثل Unreal Engine.</li>
          <li>الذكاء الاصطناعي: استخدم Python مع مكتبات مثل TensorFlow.</li>
          <li>تطبيقات الهواتف: جرب Flutter أو Swift لتطوير تطبيقات محمولة.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 italic bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
          اختر ما يناسب شغفك، واستمر في بناء المشاريع لتطوير مهاراتك وإنشاء محفظة قوية.
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

export default Article1;