import { Star } from "lucide-react";

interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  return [1, 2, 3, 4, 5].map((i) => (
    <Star
      key={i}
      color={i <= rating ? "#FFC107" : "#E4E5E9"}
      className="size-4"
    />
  ));
};

export default Rating;
