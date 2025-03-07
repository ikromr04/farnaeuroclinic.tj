import { EditorContent, useEditor } from '@tiptap/react';
import classNames from 'classnames';
import React, { ReactNode, useEffect } from 'react';
import Label from '../partials/label';
import ErrorMessage from '../partials/error-message';
import { useField } from 'formik';
import Toolbar from './toolbar';
import Bold from '@tiptap/extension-bold';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Heading from '@tiptap/extension-heading';
import TextAlign from '@tiptap/extension-text-align';
import Image from '@tiptap/extension-image';
import TextStyle from '@tiptap/extension-text-style';
import Link from '@tiptap/extension-link';

type EditorFieldProps = {
  name: string;
  className?: string;
  label?: string;
  required?: boolean;
};

export default function EditorField({
  name,
  className,
  label,
  required,
}: EditorFieldProps): ReactNode {
  const [field, meta, helpers] = useField(name);

  const CustomTextStyle = TextStyle.extend({
    addAttributes() {
      return {
        ...this.parent?.(),
        fontSize: {
          default: null,
          parseHTML: (element: HTMLElement) => element.style.fontSize || null,
          renderHTML: (attributes) => {
            return {
              style: `font-size: ${attributes.fontSize}`,
            };
          },
        },
        color: {
          default: null,
          parseHTML: (element: HTMLElement) => element.style.color || null,
          renderHTML: (attributes) => {
            return {
              style: `color: ${attributes.color}`,
            };
          },
        },
      };
    },
  });

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph.configure({
        HTMLAttributes: {
          class: 'paragraph',
        }
      }),
      Text,
      CustomTextStyle,
      Link.configure({
        openOnClick: false,
        autolink: true,
        linkOnPaste: true,
        HTMLAttributes: {
          class: 'text-blue-500',
        }
      }),
      Bold,
      Italic,
      Underline,
      Strike,
      Subscript,
      Superscript,
      BulletList.configure({
        HTMLAttributes: {
          class: 'list-disc pl-5',
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: 'list-decimal pl-5',
        },
      }),
      ListItem,
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
      TextAlign.configure({
        types: ['paragraph', 'heading'],
        alignments: ['left', 'center', 'right', 'justify'],
      }),
      Image.configure({
        allowBase64: true,
      }),
    ],
    content: field.value,
    injectCSS: true,
    onUpdate: ({ editor }) => {
      if (!editor.getText().length) {
        helpers.setValue('');
        helpers.setTouched(true);
      } else {
        const content = editor.getHTML();
        helpers.setValue(content);
      }
    },
    onBlur: ({ editor }) => {
      if (!editor.getText().length) {
        helpers.setValue('');
        helpers.setTouched(true);
      }
    },
  });

  useEffect(() => {
    if (editor && editor.view)
      editor.view.dom.setAttribute(
        'class',
        `bg-gray-50 min-w-0 border border-gray-200 rounded-b min-h-20 p-2 leading-none focus:outline-none hover:bg-gray-100 focus:border-primary focus:bg-gray-100 ${(meta.error && meta.touched) ? 'border-red-400' : 'border-gray-200'}`,
      );
  }, [editor, meta]);

  useEffect(() => {
    if (editor && (field.value !== editor.getHTML()))
      editor.commands.setContent(field.value);
  }, [editor, field.value]);

  if (!editor) return null;

  return (
    <div className={classNames(className, 'flex flex-col')}>
      <Label label={label} required={required} />

      <Toolbar editor={editor} />
      <EditorContent editor={editor} />

      <ErrorMessage name={name} />
    </div>
  );
}
