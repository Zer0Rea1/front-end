import React from 'react';
import NewsSection from '../components/NewsSection';

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
  },
  {
    slug: 'hockey-tournament',
    title: "ایشین ہاکی چیمپئن شپ: پاکستان کی شاندار کارکردگی",
    image: "https://urdu.arynews.tv/wp-content/uploads/2025/01/1-4-696x386.jpg",
    content: "ایشین ہاکی چیمپئن شپ میں پاکستانی ٹیم نے شاندار کارکردگی کا مظاہرہ کیا۔ ٹیم نے فائنل میں جگہ بنا لی ہے اور اب گولڈ میڈل کے لیے کھیلے گی۔"
  },
  {
    slug: 'tennis-star',
    title: "پاکستانی ٹینس سٹار کی عالمی رینکنگ میں بہتری",
    image: "https://urdu.arynews.tv/wp-content/uploads/2025/01/1-4-696x386.jpg",
    content: "پاکستان کے نوجوان ٹینس کھلاڑی نے حالیہ ٹورنامنٹ میں شاندار کارکردگی دکھاتے ہوئے اپنی عالمی رینکنگ میں نمایاں بہتری لائی ہے۔"
  },
  {
    slug: 'athletics-record',
    title: "قومی ایتھلیٹ نے نیا ریکارڈ قائم کر دیا",
    image: "https://urdu.arynews.tv/wp-content/uploads/2025/01/1-4-696x386.jpg",
    content: "پاکستان کے نوجوان ایتھلیٹ نے 100 میٹر دوڑ میں نیا قومی ریکارڈ قائم کر دیا ہے۔ اس کامیابی سے اولمپکس کے لیے کوالیفائی کرنے کی امید بڑھ گئی ہے۔"
  }
];

const SportsNewsPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 font-jameel-noori">کھیل</h1>
      <NewsSection news={sportsNews} />
    </div>
  );
};

export default SportsNewsPage;

