import React, { useEffect, useState } from "react";
import RecipeCommentsForm from "./RecipeCommentsForm";
import useFetch from "../../Hooks/useFetch";
import { COMMENT_GET } from "../../Api/api";

const RecipeComments = (props) => {
  const [comments, setComments] = useState([]);
  const { request, error } = useFetch();

  useEffect(() => {
    const fetchComments = async () => {
      const { url, options } = COMMENT_GET(props.id);
      const { response, json } = await request(url, options);

      if (response.ok && json.data.attributes.comments.data) {
        setComments(json.data.attributes.comments.data);
      }
    };

    fetchComments();
  }, [props.id, request]);

  return (
    <div className="max-w-[1240px] mx-auto mt-24">
      <h3 className="text-2xl font-medium font-carne mb-5">
        Faça um
        <span className="bg-[#ff9811] px-1 rounded-md">comentário:</span>
      </h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="mb-2">
            <b>{comment.attributes.Author}: </b>
            <span>{comment.attributes.comentario[0].children[0].text}</span>
          </li>
        ))}
      </ul>
      <RecipeCommentsForm setComments={setComments} id={props.id} />
    </div>
  );
};

export default RecipeComments;
