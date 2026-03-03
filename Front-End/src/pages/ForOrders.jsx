import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";

function ForOrders() {
  const location = useLocation();
  const navigate = useNavigate();
  const productData = location.state;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    quantity: 1,
    notes: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "ZIP code is required";
    } else if (!/^\d{5,6}$/.test(formData.zipCode)) {
      newErrors.zipCode = "Please enter a valid ZIP code";
    }
    if (formData.quantity < 30)
      newErrors.quantity = "Quantity must be at least 30";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      console.log("Order submitted:", {
        ...formData,
        product: productData?.title || "Product",
        productId: productData?.id || "N/A",
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4 py-12">
        <div className="bg-white rounded-lg shadow-2xl p-12 max-w-md w-full text-center">
          <CheckCircle size={64} className="mx-auto text-green-600 mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Order Placed Successfully!
          </h2>
          <p className="text-gray-600 mb-4">
            Thank you for your order. We'll contact you soon to confirm the
            details.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            A confirmation email has been sent to{" "}
            <strong>{formData.email}</strong>
          </p>
          <Button onClick={() => navigate("/")} className="w-full text-lg">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-3 pb-15">
      <div className="container mx-auto pl-8 pr-3">
        {/* Back Button */}
        <div className="sticky top-20 z-40 mb-6 w-fit">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="gap-2 bg-black text-white -ml-3"
          >
            <ArrowLeft size={20} />
            Back
          </Button>
        </div>

        {/* Page Title */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-1.5">
            Place Your Order
          </h1>
          <p className="text-gray-600 text-lg">
            Fill in your details to complete your purchase
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-lg p-8 border border-gray-200"
            >
              {/* Personal Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Personal Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="+91 9876543210"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Delivery Address
                </h2>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                      errors.address ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="123 Main Street"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.address}
                    </p>
                  )}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                        errors.city ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="New York"
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm mt-2">{errors.city}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                        errors.state ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="NY"
                    />
                    {errors.state && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.state}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                        errors.zipCode ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="10001"
                    />
                    {errors.zipCode && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.zipCode}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">
                  Order Details
                </h2>

                <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Product */}
                  <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Product *
                    </label>
                    <p className="text-gray-900 font-semibold text-lg">
                      {productData ? productData.title : "No product selected"}
                    </p>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Quantity (in gross) *
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      min= "30"
                      className={`w-full md:w-40 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition font-medium ${
                        errors.quantity ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                      Minimum order: 30 gross
                    </p>
                    {errors.quantity && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.quantity}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Special Notes or Requests
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                    placeholder="Any special requests or additional information..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full text-lg py-3 font-semibold"
              >
                Complete Order
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 sticky top-36 z-40">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              {productData ? (
                <>
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <p className="text-gray-600 text-sm mb-2">Product</p>
                    <p className="text-xl font-semibold text-gray-900">
                      {productData.title}
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Product ID: #{productData.id}
                    </p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <p className="text-gray-600 text-sm mb-2">Quantity</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {formData.quantity}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Unit Price:</span>
                      <span className="font-semibold">Contact for Quote</span>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold text-gray-900 mt-4 pt-4 border-t border-gray-200">
                      <span>Total:</span>
                      <span className="text-blue-600">Contact for Quote</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 text-sm text-gray-700">
                    <p>
                      <strong>Note:</strong> Pricing will be confirmed after we
                      review your order details.
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-6">
                    No product selected. Please navigate from the product page.
                  </p>
                  <Button onClick={() => navigate("/")} className="w-full">
                    Browse Products
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForOrders;
