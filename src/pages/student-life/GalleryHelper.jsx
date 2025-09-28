const GalleryHelper = ({imgUri, title, content}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-w-16 aspect-h-10">
        <img 
          src={imgUri} 
          alt={title} 
          className="w-full h-64 object-cover object-top"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  )
}

export default GalleryHelper;