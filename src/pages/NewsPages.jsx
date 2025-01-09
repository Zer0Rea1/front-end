import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import NewsSection from "../components/NewsSection";


const NewsPage = () => {
  const [News, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  const news = [
    {
      slug: "cricket-team-leadership",
      newsType: "sports-news",
      title: "قومی کرکٹ ٹیم کی نئی قیادت کا اعلان",
      image:
        "https://urdu.arynews.tv/wp-content/uploads/2025/01/1-4-696x386.jpg",
      content:
        "پاکستان کرکٹ بورڈ نے قومی کرکٹ ٹیم کی نئی قیادت کا اعلان کر دیا ہے۔ نئے کپتان کو چیلنجنگ دورہ آسٹریلیا کا سامنا ہے۔",
    },
    {
      slug: "football-world-cup",
      newsType: "international-news",
      title: "فٹبال ورلڈ کپ: پاکستان کی تیاریاں زور و شور سے جاری",
      image:
        "https://urdu.arynews.tv/wp-content/uploads/2025/01/1-4-696x386.jpg",
      content:
        "فٹبال ورلڈ کپ کوالیفائرز کے لیے پاکستانی ٹیم کی تیاریاں زور و شور سے جاری ہیں۔ کوچ نے کھلاڑیوں کی کارکردگی پر اطمینان کا اظہار کیا ہے۔",
    },
    {
      slug: "hockey-tournament",
      newsType: "paksitan-news",
      title: "ایشین ہاکی چیمپئن شپ: پاکستان کی شاندار کارکردگی",
      image:
        "https://urdu.arynews.tv/wp-content/uploads/2025/01/1-4-696x386.jpg",
      content:
        "ایشین ہاکی چیمپئن شپ میں پاکستانی ٹیم نے شاندار کارکردگی کا مظاہرہ کیا۔ ٹیم نے فائنل میں جگہ بنا لی ہے اور اب گولڈ میڈل کے لیے کھیلے گی۔",
    },
    {
      slug: "tennis-star",
      newsType: ['latest-news','sports-news'],
      title: "پاکستانی ٹینس سٹار کی عالمی رینکنگ میں بہتری",
      image:
        "https://urdu.arynews.tv/wp-content/uploads/2025/01/1-4-696x386.jpg",
      content:
        "پاکستان کے نوجوان ٹینس کھلاڑی نے حالیہ ٹورنامنٹ میں شاندار کارکردگی دکھاتے ہوئے اپنی عالمی رینکنگ میں نمایاں بہتری لائی ہے۔",
    },
    {
      slug: "athletics-record",
      newsType: "business-news",
      title: "قومی ایتھلیٹ نے نیا ریکارڈ قائم کر دیا",
      image:
        "https://urdu.arynews.tv/wp-content/uploads/2025/01/1-4-696x386.jpg",
      content:
        "پاکستان کے نوجوان ایتھلیٹ نے 100 میٹر دوڑ میں نیا قومی ریکارڈ قائم کر دیا ہے۔ اس کامیابی سے اولمپکس کے لیے کوالیفائی کرنے کی امید بڑھ گئی ہے۔",
    },
  ];

  useEffect(() => {
    // Reset loading and News states when slug changes
    setLoading(true);
    setNews([]);
  
    const fetchData = async () => {
      setTimeout(() => {
        // Use filter to get an array of matching news items
        const filteredNews = news.filter((item) => item.newsType.includes(slug));
        setNews(filteredNews); // Set News to the filtered array
        setLoading(false);
      }, 3000); // Simulate a 3-second delay for loading
    };
  
    fetchData();
  }, [slug]); // Add slug as a dependency

  const routesTranslation = {
    "latest-news": "تازہ ترین",
    "pakistan-news": "پاکستان",
    "international-news": "دنیا",
    "sports-news": "کھیل",
    "business-news": "کاروبار",
    "health-news": "صحت",
    "science-news": "سائنس",
  };

  return (
    <div className="container mx-auto py-8 px-4 ">
      <div className="font-jameel-noori text-[25px] mb-4 border-r-4 border-red-600 h-12 pr-4">
        {routesTranslation[slug] || "خبر نہیں ملی"}
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-2">
        {loading ? (
          <CardSkeleton />
        ) : News.length > 0 ? (
          News.map((item, index) => (
            <Link
              to="/post"
              key={index}
              className="news-card shadow-2xl p-2 rounded"
            >
              <img
                className="rounded w-full h-auto object-cover"
                src={item.image}
                alt=""
              />
              <div className="title font-jameel-noori m-4">{item.title}</div>
            </Link>
          ))
        ) : (
          <div className="ltr">No news found for this category.</div>
        )}
      </div>
    </div>
  );
};


const CardSkeleton = () => {
  return (
    <>
      <div className="bg-white p-2 rounded">
        <div className="animate-pulse">
          <div className="rounded w-full h-48 bg-gray-300"></div>
          <div className="title font-jameel-noori m-4">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      </div>
      <div className="bg-white p-2 rounded">
        <div className="animate-pulse">
          <div className="rounded w-full h-48 bg-gray-300"></div>
          <div className="title font-jameel-noori m-4">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      </div>
      <div className="bg-white p-2 rounded">
        <div className="animate-pulse">
          <div className="rounded w-full h-48 bg-gray-300"></div>
          <div className="title font-jameel-noori m-4">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      </div>
      <div className="bg-white p-2 rounded">
        <div className="animate-pulse">
          <div className="rounded w-full h-48 bg-gray-300"></div>
          <div className="title font-jameel-noori m-4">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default NewsPage;
