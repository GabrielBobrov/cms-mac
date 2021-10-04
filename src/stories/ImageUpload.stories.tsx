import { Story, Meta } from "@storybook/react";
import ImageUpload, {
  ImageUploadProps,
} from "../app/Components/ImageUpload/ImageUpload";

export default {
  title: "Example/ImageUpload",
  component: ImageUpload,
} as Meta;

const Template: Story<ImageUploadProps> = (args) => <ImageUpload {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Thumbnail do post",
};
