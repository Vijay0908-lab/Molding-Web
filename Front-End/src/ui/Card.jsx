import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useNavigate} from "react-router-dom"

export function CardImage({id , title, description, image }) {
  console.log(id);
 const navigate = useNavigate()
  const gotoDetails = (e) => {
    if(e){
      e.stopPropagation();
    }
    navigate(`/details/${id}`);
  }
  return (
    <Card className="relative w-full pt-0" onClick ={gotoDetails}>
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={image}
        alt={title}
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" onClick = {gotoDetails}>Details</Button>
      </CardFooter>
    </Card>
  )
}

export default CardImage;