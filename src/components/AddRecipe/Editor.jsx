import React from "react";
import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/react";
import BulletList from '@tiptap/extension-bullet-list'
import StarterKit from "@tiptap/starter-kit";
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxChevronDown,
  RxChatBubble,
} from "react-icons/rx";

import { initialContext } from "./initialContent";
import BubbleButton from "./BubbleButton";
import FloatingButton from "./FloatingButton";

const Editor = () => {

  const editor = useEditor({
    extensions: [StarterKit, BulletList],

    content: initialContext,
    onUpdate: ({ editor }) => {
      const jsonContent = JSON.stringify(editor.getJSON());
      console.log(jsonContent);
    },
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });


  return (
    <>
      <EditorContent
        className="max-w-full sm:px-4 md:px-6 lg:px-8 xl:px-10 mx-auto pt-5 prose prose-invert prose-orange text"
        editor={editor}
      />
      {editor && (
        <FloatingMenu
          editor={editor}
          className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600"
        >
          <FloatingButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            data-active={editor.isActive("heading", { level: 1 })}
          >
            H1
          </FloatingButton>

          <FloatingButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            data-active={editor.isActive("heading", { level: 2 })}
          >
            H2
          </FloatingButton>

          <FloatingButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            data-active={editor.isActive("heading", { level: 3 })}
          >
            H3
          </FloatingButton>

          <FloatingButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            data-active={editor.isActive("bulletList")}
          >
            Bullet list
          </FloatingButton>

          <FloatingButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            data-active={editor.isActive("orderedList")}
          >
            Order list
          </FloatingButton>
        </FloatingMenu>
      )}
      {editor && (
        <BubbleMenu
          editor={editor}
          className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600"
        >
          <BubbleButton>
            Text
            <RxChevronDown className="w-4 h-4" />
          </BubbleButton>
          <BubbleButton>
            Comment
            <RxChatBubble className="w-4 h-4" />
          </BubbleButton>
          <div className="flex items-center">
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive("bold")}
            >
              <RxFontBold className="w-4 h-4" />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive("italic")}
            >
              <RxFontItalic className="w-4 h-4" />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive("strike")}
            >
              <RxStrikethrough className="w-4 h-4" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  );
};

export default Editor;
