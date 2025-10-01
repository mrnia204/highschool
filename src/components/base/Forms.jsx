import Button from "./Button";

export const GeneralInq = () => {
  return (
    <form action="" id="contact-form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" required placeholder="Enter your full name" name="name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
          <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" required placeholder="Enter your email address"  name="email" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" required placeholder="Enter your phone number"  name="phone" />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
          <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" required placeholder="Enter message subject"  name="subject" />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea 
          name="message" 
          id="message"
          required
          rows={6}
          maxLength={500}
          placeholder="Enter your message (max 500 characters)"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
        ></textarea>
      </div>
      <Button className="bg-blue-600 text-white active:bg-amber-500 focus:bg-amber-500 hover:bg-amber-500">Send Message</Button>
    </form>
  );
};

export const AdmissionsInq  = () => {
  return (
    <form action="" id="contact-form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Student Name *</label>
          <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" required placeholder="Enter student's full name" name="name" />
        </div>
        <div>
          <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">Parent/Guardian Name*</label>
          <input type="text" id="ParentName" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" required placeholder="Enter parent/guardian name" name="parentName" />
        </div>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
          <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" required placeholder="Enter your email address" name="email" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number*</label>
          <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" required placeholder="Enter your phone number"  name="phone" />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Grade Level *</label>
        <div className="relative">
          <select name="grade" id="grade" required className="w-full px-4 py-3 border border-y-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 border-transparent text-sm appearance-none pr-8 cursor-pointer">
            <option value>Select grade level</option>     
            <option value='Grade 9'>Grade 9</option>
            <option value='Grade 10'>Grade 10</option>
            <option value='Grade 11'>Grade 11</option>    
            <option value='Grade 12'>Grade 12</option>    
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <i className="ri-arrow-down-s-line text-gray-400"></i>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
        <textarea 
          name="message" 
          id="message"
          required
          rows={4}
          maxLength={500}
          placeholder="Any additional information or questions (max 500 characters)"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
        ></textarea>
      </div>
      <Button className="bg-blue-600 text-white active:bg-amber-500 focus:bg-amber-500 hover:bg-amber-500">Send Inquiry</Button>
    </form>
  );
};

export const BookAppointment = () => {
  return (
    <form action="" id="contact-form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" required placeholder="Enter your full name" name="name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
          <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" required placeholder="Enter your email address"  name="email" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" required placeholder="Enter your phone number"  name="phone" />
        </div>
        <div>
          <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">Department *</label>
          <input type="department" id="department" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" required placeholder="Enter the Department to visit"  name="department" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
          <input type="date" id="preferredDate" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" required placeholder="Enter your phone number"  name="preferredDate" />
        </div>
        <div>
          <label htmlFor="tiem" className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
          <div className="relative">
          <select name="time" id="time" required className="w-full px-4 py-3 border border-y-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 border-transparent text-sm appearance-none pr-8 cursor-pointer">
            <option value>Select time</option>     
            <option value='9-10'>9:00 AM - 10:00 AM</option>
            <option value='10-11'>9:00 AM - 11:00 AM</option>
            <option value='11-12'>11:00 AM - 12:00 PM</option>
            <option value='01-20'>1:00 PM - 2:00 PM</option>
            <option value='01-20'>2:00 PM - 3:00 PM</option>
            <option value='01-20'>3:00 PM - 4:00 PM</option>     
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <i className="ri-arrow-down-s-line text-gray-400"></i>
          </div>
        </div>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Purpose of Visit *</label>
        <textarea 
          name="message" 
          id="message"
          required
          rows={6}
          maxLength={500}
          placeholder="Please describe the purpose of your visit (max 500 characters)"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
        ></textarea>
      </div>
      <Button className="bg-blue-600 text-white active:bg-amber-500 focus:bg-amber-500 hover:bg-amber-500">Book Appointment</Button>
    </form>
  );
};