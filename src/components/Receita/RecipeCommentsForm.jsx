import React, { useState } from "react";
import { userData } from "../../Helper/login";
import { COMMENT_POST } from "../../Api/api";
import useFetch from "../../Hooks/useFetch";

const RecipeCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState("");
  const { request, error } = useFetch();
  const user = userData();
  const { jwt, username } = user;

  async function handleSubmit(event) {
    event.preventDefault();
  
    const body = {
      data: {
        comentario: [
          {
            type: "paragraph",
            children: [{ type: "text", text: comment }],
          },
        ],
        Author: username,
        recipe: id,
        publishedComment: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
      },
    };
    
    const { url, options } = COMMENT_POST(body, jwt);
    const { response, json } = await request(url, options);
  
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json.data]);
    } else {
      console.error("Erro ao enviar comentário:", response.statusText);
    }
  }
  

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-[1fr_auto]">
      <textarea
        className="block w-full text-[1rem] bg-[#eee] resize-none p-2 border-[1px] border-solid border-[#eee] rounded transition-[0.2s] focus:outline-none focus:border-[#fb1] focus:shadow-inputSd hover:outline-none hover:border-[#fb1] hover:shadow-inputSd focus:bg-white hover:bg-white font-poppins"
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button
        type="submit"
        className="border-none cursor-pointer bg-transparent text-[#333] font-[1rem] px-[1rem] overflow-hidden focus:outline-none hover:outline-none [&:focus_svg_path]:fill-[#fea] [&:focus_svg_path]:stroke-[#fb1] [&:focus_svg_g]:animate-blink  [&:hover_svg_path]:fill-[#fea] [&:hover_svg_path]:stroke-[#fb1] [&:hover_svg_g]:animate-blink"
      >
        Enviar
      </button>
      {/* <Error error={error} /> */}
    </form>
  );
};

export default RecipeCommentsForm;
