import { useState } from "react";
import { Tag } from "react-tag-input";
import info from "../../core/utils/info";
import styled from "styled-components";
import countWordsInMarkdown from "../../core/utils/contWordsInMarkdown";
import Button from "../Components/Button/Button";
import ImageUpload from "../Components/ImageUpload";
import Input from "../Components/Input/Input";
import MarkdownEditor from "../Components/MarkdownEditor";
import TagInput from "../Components/TagInput";
import WordPriceCounter from "../Components/WordPriceCounter";
import PostService from "../../sdk/services/Post.service";
import Loading from "../Components/Loading";

export default function PostForm() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [publishing, setPublishing] = useState(false);

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setPublishing(true);
      const newPost = {
        body,
        title,
        tags: tags.map((tag) => tag.text),
        imageUrl: imageUrl,
      };
      const insertedPost = await PostService.insertNewPost(newPost);
      info({
        title: "Post salvo com sucesso",
        description: "Você acabou de criar o post com o id " + insertedPost.id,
      });
    } finally {
      setPublishing(false);
    }
  }

  return (
    <PostFormWrappe onSubmit={handleFormSubmit}>
      <Loading show={publishing} />
      <Input
        label="titulo"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
        placeholder="e.g.: Como fiquei rico aprendendo React"
      />
      <ImageUpload onImageUpload={setImageUrl} label="Thumbnail do post" />
      <MarkdownEditor onChange={setBody} />
      <TagInput
        tags={tags}
        onAdd={(tag) => setTags([...tags, tag])}
        onDelete={(index) => setTags(tags.filter((_, i) => i !== index))}
        placeholder="Insira as tags deste post"
      />
      <PostFormSubmitWrappe>
        <WordPriceCounter
          pricePerWord={0.25}
          wordsCount={countWordsInMarkdown(body)}
        />
        <Button variant="primary" label="Salvar post" />
      </PostFormSubmitWrappe>
    </PostFormWrappe>
  );
}
const PostFormWrappe = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const PostFormSubmitWrappe = styled.div`
  display: flex;
  justify-content: space-between;
`;
