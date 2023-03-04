import { Exclude } from "class-transformer";

export class EventDTO {
  @Exclude()
  id: number;
  @Exclude()
  description: string;
  @Exclude()
  userId: string;
  @Exclude()
  location: string;
  @Exclude()
  latitude: number;
  @Exclude()
  longitude: number;
}