import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Editor from "../../components/AddRecipe/Editor";
import Button from "../../components/Form/Button";
import Input from "../../components/Form/Input";
import useForm from "../../Hooks/useForm";

const Index = () => {
  const title = useForm("title");
  const [img, setImg] = useState({});
  const [submit, setSubmit] = useState(false);

  const handlePostRecipe = () => {
    setSubmit(true);
  };

  const handleSubmissionFinished = () => {
    setSubmit(false);
  };

  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-grow flex flex-col items-center justify-center mx-2">
        <div className="w-full max-w-[1100px] mt-24">
          <Input
            typeValue="text"
            name="identifier"
            value={title.value}
            onChange={title.onChange}
            error={title.error}
            placeholder="Informe o título da receita"
          />
        </div>
        <div className="w-full max-w-[1100px] rounded-xl min-h-[700px] shadow-sm border border-black/20 mt-2 lg:mx-auto bg-zinc-800">
          <div className="p-4">
            <Editor
              submit={submit}
              onSubmitFinished={handleSubmissionFinished}
              postTitle={title.value}
            />
          </div>
        </div>
        <div className="w-full max-w-[1100px] mt-4">
          <div className="grid w-full max-w-xs items-center gap-1.5 mb-4">
            <label
              htmlFor="img"
              className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Capa para sua receita
            </label>
            <input
              name="img"
              id="img"
              type="file"
              onChange={handleImgChange}
              className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
            />
          </div>
        </div>
        {img.preview && (
          <div className="w-full max-w-[1100px] mt-2">
            <div className="flex justify-center">
              <img src={img.preview} alt="Preview" className="rounded-2xl" />
            </div>
          </div>
        )}
        <div className="my-5">
          <Button onClick={handlePostRecipe}>Fazer Post</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
