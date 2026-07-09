import type { Meta, StoryObj } from "@storybook/react";
import { Stats } from "./index";

const meta = { title: "Widgets/Stats", component: Stats } satisfies Meta<typeof Stats>;
export default meta;

export const Default: StoryObj<typeof Stats> = {
  args: { settings: {}, setSettings: () => {}, editing: false },
};

export const Editing: StoryObj<typeof Stats> = {
  args: { settings: {}, setSettings: () => {}, editing: true },
};
