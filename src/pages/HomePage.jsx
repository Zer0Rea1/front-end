import React from 'react';
import NewsSection from '../components/NewsSection';
import LatestNewsSidebar from '../components/LatestNewsSidebar';
import brand from '../assets/96news.jpg'
const HomePage = () => {
  const topNews = [
    {
      slug: 'pm-china-visit',
      title: "وزیراعظم کا دورہ چین: اہم معاہدوں پر دستخط",
      image: "https://urdu.arynews.tv/wp-content/uploads/2025/01/1-4-696x386.jpg",
      content: "وزیراعظم نے چین کے دورے کے دوران کئی اہم معاہدوں پر دستخط کیے۔ ان معاہدوں سے دونوں ملکوں کے درمیان تعلقات مزید مضبوط ہونے کی توقع ہے۔"
    },
    {
      slug: 'new-covid-vaccine',
      title: "کورونا وائرس: نئی ویکسین کی کامیاب آزمائش",
      image: "https://urdu.arynews.tv/wp-content/uploads/2025/01/1-4-696x386.jpg",
      content: "سائنسدانوں نے کورونا وائرس کی نئی ویکسین کی کامیاب آزمائش کا اعلان کیا ہے۔ اس ویکسین کے استعمال سے وائرس کے نئے ویریئنٹس سے بھی تحفظ ملنے کی امید ہے۔"
    }
  ];

  const latestNews = [
    { slug: 'karachi-rain', title: "کراچی میں بارش کا نیا سسٹم داخل" },
    { slug: 'rupee-value-increase', title: "روپے کی قدر میں اضافہ، ڈالر مزید سستا" },
    { slug: 'new-education-policy', title: "نئی تعلیمی پالیسی کا اعلان" },
    { slug: 'saudi-ambassador', title: "سعودی عرب میں پاکستانی سفیر کی تقرری" },
    { slug: 'punjab-dams', title: "پنجاب میں نئے ڈیموں کی تعمیر کا آغاز" }
  ];

  const politicalNews = [
    {
      slug: 'opposition-protest',
      title: "اپوزیشن کا حکومت کے خلاف احتجاج کا اعلان",
      image: "https://urdu.arynews.tv/wp-content/uploads/2025/01/1-4-696x386.jpg",
      content: "اپوزیشن جماعتوں نے حکومت کے خلاف ملک گیر احتجاج کا اعلان کر دیا ہے۔ احتجاج کا مقصد حکومت پر دباؤ ڈالنا ہے۔"
    },
    {
      slug: 'senate-elections',
      title: "سینیٹ انتخابات: نئے امیدواروں کے ناموں کا اعلان",
      image: "https://urdu.arynews.tv/wp-content/uploads/2025/01/1-4-696x386.jpg",
      content: "سیاسی جماعتوں نے سینیٹ انتخابات کے لیے اپنے امیدواروں کے ناموں کا اعلان کر دیا ہے۔ انتخابات اگلے ماہ متوقع ہیں۔"
    }
  ];

  const sportsNews = [
    {
      slug: 'cricket-team-leadership',
      title: "قومی کرکٹ ٹیم کی نئی قیادت کا اعلان",
      image: "https://urdu.arynews.tv/wp-content/uploads/2025/01/1-4-696x386.jpg",
      content: "پاکستان کرکٹ بورڈ نے قومی کرکٹ ٹیم کی نئی قیادت کا اعلان کر دیا ہے۔ نئے کپتان کو چیلنجنگ دورہ آسٹریلیا کا سامنا ہے۔"
    },
    {
      slug: 'football-world-cup',
      title: "فٹبال ورلڈ کپ: پاکستان کی تیاریاں زور و شور سے جاری",
      image: "https://urdu.arynews.tv/wp-content/uploads/2025/01/1-4-696x386.jpg",
      content: "فٹبال ورلڈ کپ کوالیفائرز کے لیے پاکستانی ٹیم کی تیاریاں زور و شور سے جاری ہیں۔ کوچ نے کھلاڑیوں کی کارکردگی پر اطمینان کا اظہار کیا ہے۔"
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <NewsSection title="اہم ترین خبریں" news={topNews} />
          <NewsSection title="سیاسی خبریں" news={politicalNews} />
          <NewsSection title="کھیل" news={sportsNews} />
        </div>
        <div className="md:col-span-1">
          <LatestNewsSidebar latestNews={latestNews} brand={brand} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

