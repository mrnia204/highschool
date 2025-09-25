
const AcheivementHelper = ({remixIcon, acheivement, description }) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <i className={`${remixIcon} text-white text-2xl`}></i>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{acheivement}</h3>
      <p className="text-gray text-base leading-relaxed">{description}</p>
    </div>
  )
}

export default AcheivementHelper;