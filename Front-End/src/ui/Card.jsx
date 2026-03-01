import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";

export function CardImage({ item}) {
  // console.log(item.id);

  const navigate = useNavigate();
  
  // Convert image object to array
  const imageArray = Array.isArray(item.image) ? item.image : Object.values(item.image || {});
  const singleImage = typeof item.image === 'string' ? item.image : null;

  const gotoDetails = (e) => {
    if (e) {
      e.stopPropagation();
    }
    navigate(`/details/${item.id}` , {state : item});
  };

  return (
    <Card
      className="relative w-full pt-0 bg-transparent border border-grey-800"
     
    >
      {singleImage ? (
        <img
          src={singleImage}
          alt={item.title}
          className="relative z-20 aspect-video w-full object-cover"
        />
      ) : (
        <Carousel className="w-full">
          <CarouselContent>
            {imageArray.map((img, index) => (
              <CarouselItem key={index}>
                <img
                  src={img}
                  alt={`${item.title} - ${index + 1}`}
                  className="aspect-video w-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {imageArray.length > 1 && (
            <>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </>
          )}
        </Carousel>
      )}
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" onClick={gotoDetails}>
          Details
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardImage;
