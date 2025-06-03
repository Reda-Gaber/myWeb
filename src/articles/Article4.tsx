import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../data/blogData';

const Article4: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogData.find(post => post.id === parseInt(id || '4'));

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
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">ما هو GitHub؟</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          GitHub هو منصة عالمية لإدارة الإصدارات والتعاون في تطوير البرمجيات، تعتمد على نظام التحكم بالإصدارات Git. يُتيح GitHub للمبرمجين تخزين الأكواد البرمجية، تتبع التغييرات، والعمل الجماعي على المشاريع بكفاءة. يُعتبر GitHub أداة أساسية في عالم البرمجة، حيث يستخدمه الملايين من المطورين والشركات لتطوير مشاريع مفتوحة المصدر ومشاريع خاصة، مع توفير أدوات متقدمة مثل مراجعة الأكواد، إدارة المشكلات، وأتمتة سير العمل.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">استخدامات GitHub</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          تتعدد استخدامات GitHub، وتشمل:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>تخزين الأكواد البرمجية في مستودعات (Repositories) آمنة ومنظمة.</li>
          <li>تتبع التغييرات في الكود باستخدام الـ Commits والتفرع (Branching).</li>
          <li>التعاون بين فرق العمل من خلال ميزات مثل Pull Requests وCode Reviews.</li>
          <li>إدارة المشاريع باستخدام أدوات مثل GitHub Issues وProjects لتتبع المهام والمشكلات.</li>
          <li>أتمتة سير العمل باستخدام GitHub Actions لإجراءات مثل الاختبار التلقائي والنشر.</li>
          <li>استضافة صفحات ويب بسيطة باستخدام GitHub Pages.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">المهارات الأساسية لإتقان GitHub</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          لإتقان GitHub، يجب على المطور إتقان مجموعة من المهارات والأدوات التالية:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li><strong>نظام Git</strong>: فهم الأوامر الأساسية مثل <code>git init</code>، <code>git add</code>، <code>git commit</code>، <code>git push</code>، و<code>git pull</code>.</li>
          <li><strong>التفرع (Branching)</strong>: إنشاء وإدارة الفروع باستخدام <code>git branch</code> و<code>git merge</code> لتطوير ميزات جديدة دون التأثير على الكود الرئيسي.</li>
          <li><strong>Pull Requests</strong>: تقديم التغييرات للمراجعة والدمج في المستودع الرئيسي.</li>
          <li><strong>إدارة الصراعات (Conflict Resolution)</strong>: حل التعارضات بين التغييرات في الكود عند الدمج.</li>
          <li><strong>GitHub Actions</strong>: إعداد سير عمل تلقائية للاختبار، البناء، والنشر.</li>
          <li><strong>GitHub Issues</strong>: تتبع المشكلات والمهام داخل المشروع.</li>
          <li><strong>GitHub Pages</strong>: استضافة مواقع ويب بسيطة مباشرة من المستودع.</li>
          <li><strong>إدارة المستودعات</strong>: فهم إعدادات المستودعات، التحكم في الصلاحيات، وإضافة المتعاونين.</li>
          <li><strong>أدوات إضافية</strong>: استخدام أدوات مثل Visual Studio Code أو GitHub Desktop لتسهيل التفاعل مع GitHub.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">خطوات تعلم GitHub من الصفر إلى الاحتراف</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          لإتقان GitHub من الصفر إلى الاحتراف، يمكن اتباع المسار التالي:
        </p>
        <ol className="list-decimal pr-6 text-gray-700 dark:text-gray-300 space-y-4">
          <li>
            <strong>فهم أساسيات Git</strong>: ابدأ بتعلم نظام التحكم بالإصدارات Git، وهو الأساس الذي يعتمد عليه GitHub. افهم الأوامر الأساسية مثل <code>git init</code> لإنشاء مستودع، <code>git add</code> لإضافة الملفات، و<code>git commit</code> لتسجيل التغييرات. استخدم مصادر مثل <a href="https://www.youtube.com/watch?v=OdbBAn7Km0o" className="text-blue-600 dark:text-blue-400 hover:underline">دورة Git وGitHub من Elzero Web School</a> لشرح مبسط بالعربية.
          </li>
          <li>
            <strong>إنشاء حساب على GitHub</strong>: أنشئ حسابًا على GitHub، وقم بإعداد مستودع جديد. جرب رفع كود بسيط باستخدام <code>git push</code>، وتعلم كيفية إنشاء README لتوثيق المشروع.
          </li>
          <li>
            <strong>إتقان التفرع (Branching)</strong>: اتعلم إنشاء فروع باستخدام <code>git branch</code>، ودمج التغييرات باستخدام <code>git merge</code>. جرب إنشاء فرع جديد لتطوير ميزة، ثم دمجه في الفرع الرئيسي (main).
          </li>
          <li>
            <strong>استخدام Pull Requests</strong>: تعلم كيفية إنشاء Pull Request لمراجعة التغييرات، واطلب من زملاء العمل مراجعة الكود قبل الدمج.
          </li>
          <li>
            <strong>حل الصراعات</strong>: افهم كيفية التعامل مع تعارضات الكود (Merge Conflicts) باستخدام أدوات مثل Visual Studio Code أو الأوامر اليدوية.
          </li>
          <li>
            <strong>إدارة المشاريع</strong>: استخدم GitHub Issues لتتبع المشكلات، وGitHub Projects لتنظيم المهام. جرب إنشاء لوحة Kanban لإدارة مشروعك.
          </li>
          <li>
            <strong>أتمتة سير العمل</strong>: تعلم استخدام GitHub Actions لإعداد سير عمل تلقائية، مثل تشغيل اختبارات تلقائية أو نشر التطبيقات.
          </li>
          <li>
            <strong>استخدام GitHub Pages</strong>: جرب استضافة موقع ويب بسيط باستخدام GitHub Pages لعرض مشروعك.
          </li>
          <li>
            <strong>التعاون في المشاريع المفتوحة</strong>: انضم إلى مشاريع مفتوحة المصدر على GitHub، وقدم مساهمات بسيطة مثل إصلاح الأخطاء أو تحسين التوثيق.
          </li>
          <li>
            <strong>إتقان المواضيع المتقدمة</strong>: ركز على ميزات متقدمة مثل إعداد Webhooks، دمج APIs خارجية، أو استخدام GitHub CLI لإدارة المستودعات من الطرفية.
          </li>
        </ol>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">أشهر أدوات وتكاملات GitHub</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          يتكامل GitHub مع مجموعة من الأدوات التي تعزز الكفاءة:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li><strong>Visual Studio Code</strong>: لتحرير الكود وإدارة المستودعات مباشرة.</li>
          <li><strong>GitHub Desktop</strong>: واجهة رسومية لتسهيل استخدام Git.</li>
          <li><strong>GitHub CLI</strong>: أداة طرفية لإدارة المستودعات من سطر الأوامر.</li>
          <li><strong>CI/CD Tools</strong>: مثل Jenkins أو CircleCI لأتمتة النشر.</li>
          <li><strong>Code Review Tools</strong>: مثل Codecov أو SonarQube لتحليل جودة الكود.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">مصادر تعليمية موصى بها</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          إليك مجموعة من المصادر التعليمية الموثوقة لتعلم GitHub من الصفر إلى الاحتراف، مع توصية خاصة بدورة Elzero Web School:
        </p>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>
            <a href="https://www.youtube.com/watch?v=OdbBAn7Km0o" className="text-blue-600 dark:text-blue-400 hover:underline">
              دورة Git وGitHub من Elzero Web School
            </a>: دورة شاملة باللغة العربية من أسامة الزيرو، تغطي Git وGitHub من الصفر بأسلوب مبسط وعملي، مع أمثلة تطبيقية. مثالية للمبتدئين والمحترفين.
          </li>
          <li>
            <a href="https://www.codecademy.com/learn/learn-git" className="text-blue-600 dark:text-blue-400 hover:underline">
              Codecademy - Learn Git & GitHub
            </a>: دورة تفاعلية تغطي الأوامر الأساسية والمتقدمة.
          </li>
          <li>
            <a href="https://www.coursera.org/learn/introduction-git-github" className="text-blue-600 dark:text-blue-400 hover:underline">
              Coursera - Introduction to Git and GitHub
            </a>: مقدمة شاملة من Google، تركز على الاستخدام العملي.
          </li>
          <li>
            <a href="https://www.freecodecamp.org/learn" className="text-blue-600 dark:text-blue-400 hover:underline">
              freeCodeCamp
            </a>: دروس مجانية تغطي Git وGitHub مع مشاريع عملية.
          </li>
          <li>
            <a href="https://academy.hsoub.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              أكاديمية حسوب
            </a>: دروس بالعربية عن Git وإدارة المستودعات.
          </li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">نصائح للنجاح في استخدام GitHub</h2>
        <ul className="list-disc pr-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>ابدأ بمستودع بسيط لتطبيق الأوامر الأساسية، مثل رفع كود مشروع صغير.</li>
          <li>شارك في مشاريع مفتوحة المصدر لتطوير مهارات التعاون.</li>
          <li>استخدم GitHub Actions لأتمتة المهام المتكررة مثل الاختبارات.</li>
          <li>وثّق مشاريعك جيدًا باستخدام README لجذب المتعاونين.</li>
          <li>تابع التطورات في GitHub، مثل ميزات جديدة أو تحديثات GitHub CLI.</li>
        </ul>

        <p className="text-gray-700 dark:text-gray-300 italic bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
          نصيحة نهائية: استمر في بناء مشاريع عملية وشاركها على GitHub لبناء محفظة احترافية تعزز فرصك المهنية.
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

export default Article4;