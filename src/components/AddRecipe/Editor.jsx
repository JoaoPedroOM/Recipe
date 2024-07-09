import React, {useEffect, useState} from "react";
import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/react";
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
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
import { userData } from "../../Helper/login";
import useFetch from "../../Hooks/useFetch";
import { RECIPE_POST } from "../../Api/api";

const Editor = ({submit, onSubmitFinished, postTitle }) => {
  const editor = useEditor({
    extensions: [StarterKit, BulletList, OrderedList],
    content: initialContext,
    onUpdate: ({ editor }) => {
      const jsonContent = JSON.stringify(editor.getJSON());
    },
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  const { request, data, error, loading } = useFetch();

  useEffect(() => {
    const handleSubmit = async () => {
      if (!editor || !postTitle) {
        return;
      }

      const jsonContent = editor.getJSON();
      console.log('Original JSON Content:', jsonContent);

      const convertedContent = convertContent(jsonContent);
      console.log('Converted Content:', convertedContent);

      const user = userData();
      const token = user.jwt;

      const body = {
        data: {
          recipeTitle: postTitle,
          recipeContent: convertedContent,
          publishedDate: new Date().toISOString(),
          author: user.username,
          Type: "Doce",
        }
      };

      console.log('Body to send:', JSON.stringify(body, null, 2));

      try {
        const { url, options } = RECIPE_POST(body, token);

        console.log('Request options:', options);

        const { response, json } = await request(url, options);
        if (response.ok) {
          console.log("Recipe posted successfully:", json);
        } else {
          console.error("Error posting recipe:", json);
        }
      } catch (error) {
        console.error("Error posting recipe:", error);
      } finally {
        onSubmitFinished();
      }
    };

    handleSubmit();
  }, [submit]);

  function convertContent(editorContent) {
    const convertNode = (node) => {
      switch (node.type) {
        case 'doc':
          return node.content.map(convertNode);
  
        case 'heading':
          return {
            type: 'heading',
            children: node.content.map(convertNode),
            level: node.attrs.level
          };
  
        case 'paragraph':
          return {
            type: 'paragraph',
            children: node.content.map(childNode => {
              if (childNode.type === 'text' || childNode.type === 'link') {
                return convertNode(childNode);
              }
              return null;
            }).filter(child => child !== null)
          };
  
        case 'text':
          return {
            type: 'text',
            text: node.text,
            ...(node.marks && node.marks.some(mark => mark.type === 'bold') ? { bold: true } : {})
          };
  
        case 'link':
          return {
            type: 'link',
            href: node.attrs.href,
            children: node.content.map(convertNode)
          };
  
        case 'bulletList':
          return {
            type: 'list',
            format: 'unordered',
            children: node.content.map(convertNode)
          };
  
        case 'orderedList':
          return {
            type: 'list',
            format: 'ordered',
            children: node.content.map(convertNode)
          };
  
        case 'listItem':
          return {
            type: 'list-item',
            children: node.content.map(childNode => {
              if (childNode.type === 'paragraph') {
                return {
                  type: 'text',
                  text: childNode.content.map(grandchildNode => {
                    if (grandchildNode.type === 'text') {
                      return grandchildNode.text;
                    }
                    return null;
                  }).filter(grandchild => grandchild !== null).join('')
                };
              } else if (childNode.type === 'text') {
                return convertNode(childNode);
              }
              return null;
            }).filter(child => child !== null)
          };
  
        default:
          return null;
      }
    };
  
    return editorContent.content.map(convertNode).filter(node => node !== null);
  }
  
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
