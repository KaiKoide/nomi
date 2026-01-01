import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";

import { AddButton } from "@/components/ui/addButton";
import "@/app/globals.css";

const meta = {
  title: "Components/AddButton",
  component: AddButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      control: false,
      description: "ボタンをクリックしたときの動作を指定できます",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof AddButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// デフォルトのストーリー
export const Default: Story = {};

// アクションを指定したストーリー
export const WithAction: Story = {
  args: {
    onClick: fn(() => {
      console.log("Add button clicked");
    }),
  },
};
