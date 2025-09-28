export const Subjects = ({subjects=[]}) => {
  return (
    <div className="flex flex-col space-y-2">
      {subjects.map((subject, index) => (
        <div className="flex items-center space-x-2">
          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
          <span 
            key={index}
            className="text-sm text-gray-700"
          >
            {subject}
          </span>
        </div>
      ))}
    </div>
  )
};
 

export const CarrierOpportunity = ({carriers=[]}) => {
  return (
    <div className="flex flex-wrap flex-row gap-2">
      {carriers.map((carrier, index) => (
        <span 
          key={index}
          className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
        >
          {carrier}
        </span>
      ))}
    </div>      
  )
};
