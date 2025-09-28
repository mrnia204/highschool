function RemixImgCard({bgColor, remixIcon, title, content}) {
  return (
    <div className="text-center">
      <div className={`${bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
        <i className={`${remixIcon} text-2xl`}></i>
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  )
};

export default RemixImgCard;