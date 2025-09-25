const OurHistoryHelper = ({year, details }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
      <span className="text-gray-700">
        <strong>{year}:</strong> {details}
      </span>
    </div>
  )
}

export default OurHistoryHelper;