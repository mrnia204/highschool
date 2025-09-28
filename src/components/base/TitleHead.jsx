function TitleHead({imageUri, title, content, className="", gradient}) {
  return (
    <section 
      className={`${className} relative  bg-center bg-cover bg-no-repeat min-h-[60vh]`}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imageUri})`
      }}
    >
      {gradient ? (
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-80`} />
      ) : (
        <div className="absolute inset-0 bg-black/0"></div>
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl mx-auto">{content}</p>
        </div>
      </div>
    </section>
  )
}

export default TitleHead;