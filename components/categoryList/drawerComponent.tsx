"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { AddButton } from "@/components/ui/addButton";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { FieldSet } from "../ui/field";
import { Input } from "../ui/input";

type DrawerComponentProps = {
  mode: "add" | "edit";
};

export const DrawerComponent = ({ mode }: DrawerComponentProps) => {
  const title = mode === "edit" ? "カテゴリを編集" : "カテゴリを追加";

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <AddButton />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-xl font-bold">{title}</DrawerTitle>
        </DrawerHeader>
        <FieldSet className="w-full p-3">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">カテゴリ名</FieldLabel>
              <Input
                id="name"
                autoComplete="off"
                placeholder="例：健康・美容"
              />
            </Field>
          </FieldGroup>
        </FieldSet>
        <DrawerFooter>
          <Button>Save</Button>
          <DrawerClose asChild>
            {mode === "edit" ? (
              <div className="flex gap-2 w-full">
                <Button
                  variant="outline"
                  className="flex-1 border-theme-pink text-theme-pink bg-theme-pink/20"
                >
                  Delete
                </Button>
                <Button variant="outline" className="flex-1">
                  Cancel
                </Button>
              </div>
            ) : (
              <Button variant="outline">Cancel</Button>
            )}
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
