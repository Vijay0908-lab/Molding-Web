import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

function DetailedDie() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  const imageArray = Array.isArray(data?.image)
    ? data.image
    : Object.values(data?.image || {});

  return (
    <div className="min-h-screen  from-gray-50 to-white">
      {/* Main Content */}
      {data ? (
        <div className="container mx-auto px-4 py-12">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="gap-2 bg-black text-white  m-8 -ml-3"
          >
            <ArrowLeft size={20} />
            Back
          </Button>

          {/* Title Section */}
          <div className="mb-12 text-center">
            <div className="inline-block">
                
                 <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                  {data.title}
                 </h1>
              <div className="w-full h-1 bg-blue-600 rounded-full"></div>
             </div>
           
          </div>

          {/* Image Gallery Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Product Gallery
            </h2>
            {imageArray.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {imageArray.map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <img
                      src={image}
                      alt={`${data.title} - ${index + 1}`}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0  from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <p className="text-white font-semibold">
                        Image {index + 1}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-100 rounded-lg p-12 text-center">
                <p className="text-gray-600 text-lg">
                  No images available for this product
                </p>
              </div>
            )}
          </div>

          {/* Description Section */}
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              About this Die
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">
                #{data.id}
              </p>
              <p className="text-gray-600">Product ID</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
              <p className="text-2xl font-bold text-green-600 mb-2">
                {imageArray.length}
              </p>
              <p className="text-gray-600">Images</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
              <p className="text-2xl font-bold text-purple-600 mb-2">Premium</p>
              <p className="text-gray-600">Quality</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
              <p className="text-2xl font-bold text-orange-600 mb-2">
                Available
              </p>
              <p className="text-gray-600">Status</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12  from-blue-600 to-purple-600 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in this Die?
            </h3>
            <p className="text-blue-100 mb-6 text-lg bg-blue-600 rounded-2xl ">
              Contact us to place your order or get more information
            </p>
            <Button
              onClick={() => navigate("/contact")}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-bold text-lg"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <p className="text-xl text-gray-600 mb-6">No product data found</p>
            <Button
              onClick={() => navigate("/")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
            >
              Back to Home
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailedDie;
