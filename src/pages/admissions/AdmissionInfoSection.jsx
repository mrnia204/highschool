import { useState } from "react";
import Button from "../../components/base/Button";
import Card from "../../components/base/Card";
import ContentHead from "../../components/base/ContentHead";

const AdmissionInfoSection = () => {
  const[active, setActive] = useState("Requirements")
  const admission = [
    "Requirements",
    "Important Dates",
    "Fees & Costs",
  ];

  const gradeRequirements = [
    {
      grade: "Grade 9",
      requirement: [
        "Completed Grade 8 with satisfactory results",
        "School report from previous school",
        "Parent/guardian consent form"
      ],
    },
    {
      grade: "Grade 10",
      requirement: [
        "Completed Grade 9 with good academic standing",
        "Transfer Certificate from previous school",
        "Academic Transcript showing Grade 9 results",
        "Parent/guardian consent form",
      ]
    }
  ]

  const importantDate = [
    {
      title: "Application Period Opens",
      content: "Online and paper applications accepted",
      date: "October 1, 2024"
    },
    {
      title: "Application Deadline",
      content: "All documents must be submitted",
      date: "December 15, 2024"
    },
    {
      title: "Entrance Examinations",
      content: "For Grades 9 and 11 applicants",
      date: "January 10-12, 2025",
    },
  ]; 

  const schoolFees = [
    {
      title: "Tution Fees",
      feeInfo: [
        { fee: "Grade 9 Tuition Annual Fee", amount: "K2,500"},
        { fee: "Grade 10 Tuition Annual Fee", amount: "K2,800", }
      ]
    },
    {
      title: "Additional Fees",
      feeInfo: [
        { fee: "Registration Fee (one-time)", amount: "K200" },
        { fee: "Library & Laboratory Fee", amount: "K300", },
        { fee: "Sports & Activities Fee", amount: "K150", },
        { fee: "Examination Fee", amount: "K250", },
      ],
    },
    {
      title: "Optional Fees",
      feeInfo: [
        { fee: "School Uniform Package", amount: "K400" },
        { fee: "Textbook Package", amount: "K320", },
        { fee: "Sports & Activities Fee", amount: "K150", },
        { fee: "Boarding (if available)", amount: "K1, 250", },
      ]
    }
  ]

  return (
    <Card bgColor="bg-gray-50">
      <ContentHead 
        contentHead="Admission Information"
        content="Everything you need to know about joining our school community"
      />
      <div className="flex flex-wrap justify-center mb-8 bg-white rounded-lg p-2 shadow-sm">
        {admission.map((item) => (
          <Button 
            key={item}
            onClick={() => setActive(item)}
            className={`${active === item ? 'text-white bg-blue-600' : 'hover:text-blue-600 text-gray-600 border border-gray-200'}`}
          >
            {item}
          </Button>
        ))}
      </div>

      {/**tab contents */}
      <div className="bg-white rounded-lg shadow-sm p-8">

        {/**Requirement tab */}
        {active === 'Requirements' && (
          <div>
            <h3 className="text-xl md:text-2xl text-gray-800 mb-6">Admission Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gradeRequirements.map((requirement, index) => (
                <div className="border border-gray-200 rounded-lg p-6" key={index}>
                  <h4 className="text-lg md:text-xl font-semibold text-blue-600">{requirement.grade}</h4>
                  <ul className="space-y-2">
                    {requirement.requirement.map((item )=> (
                    <li className="flex items-start space-x-2" key={item}>
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/**Important date tab */}
        {active === 'Important Dates' && (
          <div>
            <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-6">Important Dates 2025</h3>
            <div className="space-y-4">
              {importantDate.map((item, index) => (
                <div className="flex items-start space-x-4 border border-gray-200 rounded-lg p-4" key={index}>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-calendar-line text-blue-600"></i>
                  </div>
                  <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                    <span className="text-blue-600 font-medium">{item.date}</span>
                  </div>
                  <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/**school fee tab */}
        {active === 'Fees & Costs' && (
          <div>
            <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-6">School Fees & Costs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {schoolFees.map((item, index)=> (
                <div className="border border-gray-200 rounded-lg p-4" key={index}>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h4>
                  <div className="space-y-3">
                    {item.feeInfo.map((f, index) => (
                      <div className="flex justify-between items-start" key={index}>
                        <span className="text-gray-700 flex-1 pr-2">{f.fee}</span>
                        <span className="font-semibold text-blue-600">{f.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start space-x-2">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className="ri-information-line text-yellow-600"></i>
                  </div>
                  <div>
                    <p className="text-yellow-800 font-medium">Payment Information</p>
                    <p className="text-yellow-700">
                      Fees can be paid in installments. Contact our finance office for flexible payment arrangements. 
                    </p>
                  </div>
                </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}

export default AdmissionInfoSection;