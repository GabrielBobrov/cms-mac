import { useState } from "react";
import { Tag } from "react-tag-input";
import styled from "styled-components";
import Button from "../Components/Button/Button";
import ImageUpload from "../Components/ImageUpload";
import Input from "../Components/Input/Input";
import MarkdownEditor from "../Components/MarkdownEditor";
import TagInput from "../Components/TagInput";
import WordPriceCounter from "../Components/WordPriceCounter";

export default function PostForm() {
  const [tags, setTags] = useState<Tag[]>([]);
  return (
    <PostFormWrappe>
      <Input
        label="titulo"
        placeholder="e.g.: Como fiquei rico aprendendo React"
      />
      <ImageUpload label="Thumbnail do post" />
      <MarkdownEditor />
      <TagInput
        tags={tags}
        onAdd={(tag) => setTags([...tags, tag])}
        onDelete={(index) => setTags(tags.filter((_, i) => i !== index))}
        placeholder="Insira as tags deste post"
      />
      <PostFormSubmitWrappe>
        <WordPriceCounter pricePerWord={0.25} wordsCount={40} />
        <Button variant="primary" label="Salvasr post" />
      </PostFormSubmitWrappe>
    </PostFormWrappe>
  );
}
const PostFormWrappe = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const PostFormSubmitWrappe = styled.form`
  display: flex;
  justify-content: space-between;
`;
