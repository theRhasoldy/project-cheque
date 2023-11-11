import { Card, CardContent, Typography } from "@mui/material";

type RoomCardProps = {
  name?: string | null;
};

const RoomCard = ({ name }: RoomCardProps) => {
  return (
    <Card className="w-full h-56">
      <CardContent>
        <Typography variant="h3">{name}</Typography>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
