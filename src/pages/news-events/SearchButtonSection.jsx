import { useState } from "react"
import Card from "../../components/base/Card"
import Button from "../../components/base/Button"
import ArticleHelper from "./ArticleHelper";


const SearchButtonSection = () => {
  const [active, setActive] = useState('All News');

  const categories =  [
    "All News",
    "Academic",
    "Cultural",
    "Sports",
    "Facilities",
    "Community",
  ];

  const newsItems = [
    {
      id: 1, 
      imageUri: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      title: "Lumusa High School Achieves 78% Pass Rate in 2024 grade 10..",
      category: "Academic",
      content: "Outstanding academic performance with 45 students gaining admission to National High Schools across Papua New Guinea.",
      date: "January 15, 2024"
    },
    {
      id: 2, 
      imageUri: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      title: "Lumusa High School Achieves 78% Pass Rate in 2024 grade 10..",
      category: "Community",
      content: "Outstanding academic performance with 45 students gaining admission to National High Schools across Papua New Guinea.",
      date: "January 15, 2024"
    },
     {
      id: 3, 
      imageUri: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      title: "Lumusa High School Achieves 78% Pass Rate in 2024 grade 10..",
      category: "Academic",
      content: "Outstanding academic performance with 45 students gaining admission to National High Schools across Papua New Guinea.",
      date: "January 15, 2024"
    },
     {
      id: 4, 
      imageUri: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      title: "Lumusa High School Achieves 78% Pass Rate in 2024 grade 10..",
      category: "Facilities",
      content: "Outstanding academic performance with 45 students gaining admission to National High Schools across Papua New Guinea.",
      date: "January 15, 2024"
    },
     {
      id: 5, 
      imageUri: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      title: "Lumusa High School Achieves 78% Pass Rate in 2024 grade 10..",
      category: "Cultural",
      content: "Outstanding academic performance with 45 students gaining admission to National High Schools across Papua New Guinea.",
      date: "January 15, 2024"
    },
     {
      id: 6, 
      imageUri: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      title: "Lumusa High School Achieves 78% Pass Rate in 2024 grade 10..",
      category: "Sports",
      content: "Outstanding academic performance with 45 students gaining admission to National High Schools across Papua New Guinea.",
      date: "January 15, 2024"
    }
  ]; 

  //logic
  const filteredNews = active === 'All News' 
    ? newsItems 
    : newsItems.filter(
      (item) => item.category === active
  );

  return (
    <Card>
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setActive(category)}
            className={`${
              active === category 
              ? "bg-blue-600 text-white" 
              : "bg-white text-gray-700 border border-gray-200 hover:bg-blue-100"
            }`}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredNews.length > 0 ? (
          filteredNews.map((news) => (
            <ArticleHelper 
              key={news.id}
              imageUri={news.imageUri}
              title={news.title}
              category={news.category}
              content={news.content}
              date={news.date}
            />
          ))
        ): (
          <p className="text-gray-500 italic text-center">
            No News available in this category
          </p>
        )}
      </div>
    </Card>
  )
}

export default SearchButtonSection;