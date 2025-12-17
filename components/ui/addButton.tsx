import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

export const AddButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Button
      size="icon-xl"
      className="bg-theme-pink text-white rounded-full hover:bg-theme-pink/80 fixed bottom-5 right-3"
      onClick={onClick}
    >
      <Plus className="size-10" />
    </Button>
  );
};
