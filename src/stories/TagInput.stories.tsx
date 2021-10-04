import { Story, Meta } from "@storybook/react";
import { useState } from "react";
import TagInput, { TagInputProps } from "../app/Components/TagInput";
import { Tag } from "react-tag-input";

export default {
  title: "Example/TagInput",
  component: TagInput,
} as Meta;

const Template: Story<TagInputProps> = (args) => (
  <div>
    <TagInput {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Insira as tags deste post",
  tags: [{ id: "1", text: "JavaScript" }],
};

export const ManyTags = Template.bind({});
ManyTags.args = {
  placeholder: "Insira as tags deste post",
  tags: [
    { id: "1", text: "JavaScript" },
    { id: "2", text: "React" },
    { id: "3", text: "Spring Boot" },
  ],
};

export function WorkingLiveExample() {
  const [tags, setTags] = useState<Tag[]>([]);
  return (
    <TagInput
      placeholder="Insira as tags deste post"
      tags={tags}
      onAdd={(tag) => setTags([...tags, tag])}
      onDelete={(index) => setTags(tags.filter((tag, i) => i !== index))}
    />
  );
}
