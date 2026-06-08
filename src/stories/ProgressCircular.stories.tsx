import type { Meta, StoryObj } from "@storybook/react";
import { ProgressCircular } from "../componentsProgressCircular";

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
      options: ["100", "80", "60", "40", "20", "00"],
    },
  },
  args: {
    size: "lg",
    color: "primary",
    value: "00",
  },
};

export default meta;
type Story = StoryObj<typeof ProgressCircular>;

export const Default: Story = {
  args: {
    size: "lg",
    color: "primary",
    value: "00",
  },
};

export const LargeSize: Story = {
  args: {
    size: "lg",
    value: "60",
  },
};

export const MediumSize: Story = {
  args: {
    size: "md",
    value: "60",
  },
};

export const SmallSize: Story = {
  args: {
    size: "sm",
    value: "60",
  },
};

export const PrimaryColor: Story = {
  args: {
    color: "primary",
    value: "60",
  },
};

export const GrayColor: Story = {
  args: {
    color: "gray",
    value: "60",
  },
};

export const Value100: Story = {
  args: {
    value: "100",
  },
};

export const Value80: Story = {
  args: {
    value: "80",
  },
};

export const Value60: Story = {
  args: {
    value: "60",
  },
};

export const Value40: Story = {
  args: {
    value: "40",
  },
};

export const Value20: Story = {
  args: {
    value: "20",
  },
};

export const Value00: Story = {
  args: {
    value: "00",
  },
};

export const SmallGray80: Story = {
  args: {
    size: "sm",
    color: "gray",
    value: "80",
  },
};

export const MediumPrimary40: Story = {
  args: {
    size: "md",
    color: "primary",
    value: "40",
  },
};