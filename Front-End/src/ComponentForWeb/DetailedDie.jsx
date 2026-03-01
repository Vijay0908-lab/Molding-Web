import { useLocation } from "react-router-dom";


function DetailedDie() {

const location = useLocation();
const data = location.state;
console.log(data);
const imageArray = Array.isArray(data.image) ? data.image : Object.values(data.image || {});

const singleImage = typeof data.image === 'string' ? data.image : null;



  return (
    <div>
     <h1>This is my die Details page</h1>

     {
      data ?(
          <div>
             <h2>{data.title}</h2>
               <div className="imageContainer">
              {imageArray.length > 0 ? (
                 imageArray.map((image , index)=>(
                  <img
                  key={index}
                   src={image}
                   alt={`die-${index}`}
                   className="w-2 m-1"
                  />
                ))
              ):(
                <h2>No Image is found here </h2>
              )}
               
                </div>
            
             <p>{data.description}</p>
          </div>
      ):(
     <h2>No data is Found here!</h2>
      )
     }
    </div>
  );
}

export default DetailedDie;