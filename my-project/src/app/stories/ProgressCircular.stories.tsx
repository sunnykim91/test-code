import type { Meta, StoryObj } from "@storybook/react";
import { ProgressCircular } from "../components/ProgressCircular";

const meta: Meta<typeof ProgressCircular> = {
  title: "UI/ProgressCircular",
  component: ProgressCircular,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["lg", "md", "sm"],
    },
    color: {
      control: "select",
      options: ["primary", "gray"],
    },
    value: {
      control: "select",
      options: [100, 80, 60, 40, 20, 0],
    }
  },
  args: {
    size: "lg",
    color: "primary",
    value: 100
  },
};

export default meta;
type Story = StoryObj<typeof ProgressCircular>;

export const Default: Story = {};

export const Lg: Story = {
  args: { size: "lg" },
};

export const Md: Story = {
  args: { size: "md" },
};

export const Sm: Story = {
  args: { size: "sm" },
};

export const Primary: Story = {
  args: { color: "primary" },
};

export const Gray: Story = {
  args: { color: "gray" },
};

export const Value100: Story = {
  args: { value: 100 },
};

export const Value80: Story = {
  args: { value: 80 },
};

export const Value60: Story = {
  args: { value: 60 },
};

export const Value40: Story = {
  args: { value: 40 },
};

export const Value20: Story = {
  args: { value: 20 },
};

export const Value00: Story = {
  args: { value: 0 },
};
