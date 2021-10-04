import { Story, Meta } from "@storybook/react";
import WordPriceCounter, {
  WordPriceCounterProps,
} from "../app/Components/WordPriceCounter";

export default {
  title: "Example/WordPriceCounter",
  component: WordPriceCounter,
} as Meta;

const Template: Story<WordPriceCounterProps> = (args) => (
  <div>
    <WordPriceCounter {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  wordsCount: 15,
  pricePerWord: 0.25,
};
