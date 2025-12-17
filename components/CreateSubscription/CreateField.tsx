"use client";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/datePicker";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SubscriptionIconPicker } from "@/components/ui/subscriptionIconPicker";
import { useState } from "react";
import { SubscriptionIconName } from "@/lib/icons";

export const CreateField = () => {
  const [selectedIcon, setSelectedIcon] = useState<
    SubscriptionIconName | undefined
  >(undefined);

  const handleIconSelect = (iconName: SubscriptionIconName) => {
    setSelectedIcon(iconName);
  };

  return (
    <FieldSet className="w-full p-3">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">サービス名</FieldLabel>
          <Input id="name" autoComplete="off" placeholder="Netflix" />
        </Field>
        <Field>
          <FieldLabel htmlFor="username">金額</FieldLabel>
          <Input id="username" autoComplete="off" placeholder="1,000" />
        </Field>
        <Field>
          <FieldLabel>支払サイクル</FieldLabel>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="月額" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">月額</SelectItem>
              <SelectItem value="yearly">年額</SelectItem>
              <SelectItem value="biweekly">隔週額</SelectItem>
              <SelectItem value="weekly">週額</SelectItem>
              <SelectItem value="other">その他</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <FieldLabel htmlFor="username">次の支払日</FieldLabel>
          <DatePicker />
        </Field>
        <Field>
          <FieldLabel>カテゴリ</FieldLabel>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="エンタメ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="entertainment">エンタメ</SelectItem>
              <SelectItem value="business">仕事</SelectItem>
              <SelectItem value="life">生活</SelectItem>
              <SelectItem value="other">その他</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <FieldLabel htmlFor="name">アイコン</FieldLabel>
          <SubscriptionIconPicker
            selectedIcon={selectedIcon}
            onIconSelect={handleIconSelect}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="memo">メモ</FieldLabel>
          <Textarea id="memo" placeholder="メモを入力してください" rows={4} />
        </Field>
        <Field>
          <Button type="submit" className="bg-theme-pink font-bold text-xl">
            登録
          </Button>
        </Field>
      </FieldGroup>
    </FieldSet>
  );
};
