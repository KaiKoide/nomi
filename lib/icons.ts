import {
  Clapperboard,
  Utensils,
  BriefcaseBusiness,
  Laptop,
  BrushCleaning,
  Music,
  Dumbbell,
  Heart,
  PawPrint,
  HouseHeart,
  Tickets,
  Car,
  BadgeDollarSign,
  Bus,
  Building,
  Smile,
  type LucideIcon,
} from "lucide-react";

export type SubscriptionIconName =
  | "Clapperboard"
  | "Utensils"
  | "BriefcaseBusiness"
  | "Laptop"
  | "BrushCleaning"
  | "Music"
  | "Dumbbell"
  | "Heart"
  | "PawPrint"
  | "HouseHeart"
  | "Tickets"
  | "Car"
  | "BadgeDollarSign"
  | "Bus"
  | "Building"
  | "Smile";

export const subscriptionIcons: Record<
  SubscriptionIconName,
  { icon: LucideIcon; label: SubscriptionIconName }
> = {
  Clapperboard: { icon: Clapperboard, label: "Clapperboard" },
  Utensils: { icon: Utensils, label: "Utensils" },
  BriefcaseBusiness: { icon: BriefcaseBusiness, label: "BriefcaseBusiness" },
  Laptop: { icon: Laptop, label: "Laptop" },
  BrushCleaning: { icon: BrushCleaning, label: "BrushCleaning" },
  Music: { icon: Music, label: "Music" },
  Dumbbell: { icon: Dumbbell, label: "Dumbbell" },
  Heart: { icon: Heart, label: "Heart" },
  PawPrint: { icon: PawPrint, label: "PawPrint" },
  HouseHeart: { icon: HouseHeart, label: "HouseHeart" },
  Tickets: { icon: Tickets, label: "Tickets" },
  Car: { icon: Car, label: "Car" },
  BadgeDollarSign: { icon: BadgeDollarSign, label: "BadgeDollarSign" },
  Bus: { icon: Bus, label: "Bus" },
  Building: { icon: Building, label: "Building" },
  Smile: { icon: Smile, label: "Smile" },
};
