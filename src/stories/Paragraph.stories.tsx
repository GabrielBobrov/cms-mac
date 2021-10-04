import { Story, Meta } from "@storybook/react";
import Paragraph, {
  ParagraphProps,
} from "../app/Components/Typography/Paragraph";

export default {
  title: "Typography/Paragraph",
  component: Paragraph,
} as Meta;

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "default",
  children:
    "loren isfgnifgi i job idifgfgfgbui buidfbudfbuibduifbudf ufbdbuidfibudfibbdf",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children:
    "loren isfgnifgi i job idifgfgfgbui buidfbudfbuibduifbudf ufbdbuidfibudfibbdf",
};
