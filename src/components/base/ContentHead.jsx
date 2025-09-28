function ContentHead({contentHead, content, text="text-gray-800", textbody='text-gray-600'}) {
  return (
    <div className="text-center mb-12">
      <h2 className={`${text} text-xl md:text-3xl font-bold mb-4`}>{contentHead}</h2>
      <p className={`${textbody} text-base md:text-lg max-w-3xl mx-auto`}>{content}</p>
    </div>
  )
}

export default ContentHead;