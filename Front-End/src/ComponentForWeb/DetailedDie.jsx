import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

function DetailedDie() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  function goOrder(e) {
    if (e) {
      e.stopPropagation();
    }
    navigate("/orders", { state: data });
  }
  const imageArray = Array.isArray(data?.image)
    ? data.image
    : Object.values(data?.image || {});

  return (
    <div className="min-h-screen  from-gray-50 to-white">
      {/* Main Content */}
      {data ? (
        <div className="container mx-auto px-4 py-12">
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

          {/* Title Section */}
          <div className="mb-7 text-center">
            <div className="inline-block">
              <div className="text-3xl md:text-5xl font-bold text-gray-900 mb-1">
                {data.title}
              </div>
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
              <p className="text-4xl font-bold text-black mb-2">#{data.id}</p>
              <p className="text-gray-500">Product ID</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
              <p className="text-2xl font-bold text-black mb-2">
                {imageArray.length}
              </p>
              <p className="text-gray-500">Images</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
              <p className="text-2xl font-bold text-black mb-2">Premium</p>
              <p className="text-gray-500">Quality</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
              <p className="text-2xl font-bold text-black mb-2">Available</p>
              <p className="text-gray-500">Status</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12  text-black rounded-lg p-8 text-center">
            <Button onClick={goOrder} className="primary text-2xl">
              Place your order
            </Button>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <p className="text-xl text-gray-800 mb-6">No product data found</p>
            <Button onClick={() => navigate("/")} className="primary">
              Back to Home
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailedDie;
