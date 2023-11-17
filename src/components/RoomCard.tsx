import { Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";

type RoomCardProps = {
  name?: string | null;
  id?: string | null;
};

const RoomCard = ({ name, id }: RoomCardProps) => {
  return (
    <Link href={{ pathname: "/room/", query: `id=${id}` }}>
      <Card className="w-full h-56 hover:shadow-2xl bg-dark-primary-main">
        <CardContent>
          <Typography variant="h3">{name}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RoomCard;
