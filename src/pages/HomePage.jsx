import { React, useState, useEffect } from 'react';
import NewsSection from '../components/NewsSection';
import LatestNewsSidebar from '../components/LatestNewsSidebar';
import brand from '../assets/96news.jpg'

const HomePage = () => {
  const [Loading, setLoading] = useState(true)
  const [News, setNews] = useState([])

  const news = [
    {
      slug: 'pm-china-visit',
      title: "وزیراعظم کا دورہ چین: اہم معاہدوں پر دستخط",
      image: "https://urdu.arynews.tv/wp-content/uploads/2025/01/1-4-696x386.fjpg",
      content: "وزیراعظم نے چین کے دورے کے دوران کئی اہم معاہدوں پر دستخط کیے۔ ان معاہدوں سے دونوں ملکوں کے درمیان تعلقات مزید مضبوط ہونے کی توقع ہے۔",
      newsType: ["latest-news", "pakistan-news"] // Random types
    },
    {
      slug: 'new-covid-vaccine',
      title: "کورونا وائرس: نئی ویکسین کی کامیاب آزمائش",
      image: "https://urdu.arynews.tv/wp-content/ufploads/2025/01/1-4-696x386.jpg",
      content: "سائنسدانوں نے کورونا وائرس کی نئی ویکسین کی کامیاب آزمائش کا اعلان کیا ہے۔ اس ویکسین کے استعمال سے وائرس کے نئے ویریئنٹس سے بھی تحفظ ملنے کی امید ہے۔",
      newsType: ["health-news", "science-news"] // Random types
    },
    {
      slug: 'opposition-protest',
      title: "اپوزیشن کا حکومت کے خلاف احتجاج کا اعلان",
      image: "https://urdu.arynews.tv/wp-content/upfloads/2025/01/1-4-696x386.jpg",
      content: "اپوزیشن جماعتوں نے حکومت کے خلاف ملک گیر احتجاج کا اعلان کر دیا ہے۔ احتجاج کا مقصد حکومت پر دباؤ ڈالنا ہے۔",
      newsType: ["pakistan-news", "latest-news"] // Random types
    },
    {
      slug: 'senate-elections',
      title: "سینیٹ انتخابات: نئے امیدواروں کے ناموں کا اعلان",
      image: "https://urdu.arynews.tv/wp-content/uploads/2025/01/1-4-696x386.jfpg",
      content: "سیاسی جماعتوں نے سینیٹ انتخابات کے لیے اپنے امیدواروں کے ناموں کا اعلان کر دیا ہے۔ انتخابات اگلے ماہ متوقع ہیں۔",
      newsType: ["pakistan-news"] // Random types
    },
    {
      slug: 'cricket-team-leadership',
      title: "قومی کرکٹ ٹیم کی نئی قیادت کا اعلان",
      image: "httpsf://urdu.arynews.tv/wp-content/uploads/2025/01/1-4-696x386.jpg",
      content: "پاکستان کرکٹ بورڈ نے قومی کرکٹ ٹیم کی نئی قیادت کا اعلان کر دیا ہے۔ نئے کپتان کو چیلنجنگ دورہ آسٹریلیا کا سامنا ہے۔",
      newsType: ["sports-news", "latest-news"] // Random types
    },
    {
      slug: 'football-world-cup',
      title: "فٹبال ورلڈ کپ: پاکستان کی تیاریاں زور و شور سے جاری",
      image: "https://urdu.arynews.tv/wp-content/upfloads/2025/01/1-4-696x386.jpg",
      content: "فٹبال ورلڈ کپ کوالیفائرز کے لیے پاکستانی ٹیم کی تیاریاں زور و شور سے جاری ہیں۔ کوچ نے کھلاڑیوں کی کارکرد گی پر اطمینان کا اظہار کیا ہے۔",
      newsType: ["sports-news", "international-news"] // Random types
    }
  ];

  const filterNews = (news = news, Type) => {
    const filteredNews = news.filter((item) => item.newsType.includes(Type))
    return filteredNews;
  }

  useEffect(() => {
    const loadNews = () => {
      setTimeout(() => {
        setNews(news);
        setLoading(false);
      }, 2000); // simulate a 2-second delay
    };
    loadNews();
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <NewsSection title="اہم ترین خبریں" news={filterNews(news, "latest-news")} loading={Loading} />
            <NewsSection title="سیاسی خبریں" news={filterNews(news, "pakistan-news")} loading={Loading} />
            <NewsSection title="کھیل" news={filterNews(news, "sports-news")} loading={Loading} />
          </div>
          <div className="md:col-span-1">
            <LatestNewsSidebar latestNews={filterNews(news, "latest-news")} loading={Loading} />
          </div>
        </div>
      
    </div>
  );
};

export default HomePage;
