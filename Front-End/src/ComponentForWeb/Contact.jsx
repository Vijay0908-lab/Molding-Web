function Contact(){
    return (
        <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-sm">
  <h1 className="text-3xl font-bold text-black mb-6">Contact Us</h1>

  <form className="grid grid-cols-1 gap-6">
    {/* Name Input */}
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
        Name
      </label>
      <input
        type="text"
        id="name"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="Your Name"
        //value={formData.name}
        required
      />
    </div>

    {/* Mobile & Email Group */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
          Mobile Number
        </label>
        <input
          type="tel"
          id="number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter Mobile Number"
         // value={formData.number}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter Email"
          //value={formData.email}
        />
      </div>
    </div>

    {/* Message Input */}
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
        Message
      </label>
      <textarea
        id="message"
        rows="4"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="Any suggestion or question..."
        //value={formData.message}
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-black text-white font-bold py-3 px-6 rounded-md hover:bg-gray-800 transition-colors"
    >
      Send Message
    </button>
  </form>
</div>
    )
}


export default Contact;