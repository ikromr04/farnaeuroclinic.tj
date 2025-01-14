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
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Heading from '@tiptap/extension-heading';
import TextAlign from '@tiptap/extension-text-align';

type EditorFieldProps = {
  name: string;
  className?: string;
  label?: string;
};

export default function EditorField({
  name,
  className,
  label,
}: EditorFieldProps): ReactNode {
  const [field, meta, helpers] = useField(name);

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
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
        levels: [2, 3, 4],
        HTMLAttributes: {
          class: 'title',
        },
      }),
      TextAlign.configure({
        types: ['paragraph', 'heading'],
        alignments: ['left', 'center', 'right', 'justify'],
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
        `bg-gray-50 min-w-0 border border-gray-200 rounded-b min-h-20 p-2 leading-none text-base focus:outline-none hover:bg-gray-100 focus:border-primary focus:bg-gray-100 ${(meta.error && meta.touched) ? 'border-red-400' : 'border-gray-200'}`,
      );
  }, [meta])

  useEffect(() => {
    if (editor && (field.value !== editor.getHTML()))
      editor.commands.setContent(field.value);
  }, [field.value])

  if (!editor) return null;

  return (
    <div className={classNames(className, 'flex flex-col')}>
      <Label label={label} />

      <Toolbar editor={editor} />
      <EditorContent editor={editor} />

      <ErrorMessage name={name} />
    </div>
  );
}
