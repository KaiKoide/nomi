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

export const DrawerComponent = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <AddButton />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-xl font-bold">
            カテゴリを追加
          </DrawerTitle>
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
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
