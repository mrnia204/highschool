const VoiceHelper = ({imageUri, studentName, grade, quote}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
      <div className="mb-6">
        <img 
          src={imageUri} 
          alt={studentName} 
          className="w-24 h-24 rounded-full mx-auto object-cover object-top"
        />
      </div>
      <blockquote className="text-gray-700 italic mb-6 text-base md:text-lg leading-relaxed">
        "{quote}"
      </blockquote>
      <div>
        <h4 className="font-semibold text-gray-800 text-lg">{studentName}</h4>
        <p className="text-blue-600 font-medium">{grade}</p>
      </div>
    </div>
  );
};

export default VoiceHelper;