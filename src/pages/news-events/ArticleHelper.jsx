import React from "react";
import Button from "../../components/base/Button";

const ArticleHelper = ({imageUri, title, date, category, content}) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={imageUri} alt={title} className="w-full h-48 object-cover object-top" />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">{category}</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{title}</h3>
        <div className="text-gray-600 text-sm mb-4 line-clamp-3">{content}</div>
        <Button className="text-blue-600 hover:text-blue-800">Read More</Button>
      </div>
    </article>
  )
}

export default ArticleHelper;