import { Editor } from '@tiptap/core'
import React from 'react'
import { Icons } from './icons';
import classNames from 'classnames';
import Tooltip from '../../tooltip';

export default function Toolbar({
  editor,
}: {
  editor: Editor;
}): JSX.Element {
  return (
    <div className="flex items-center border border-gray-200 border-b-0 rounded-t p-[1px] gap-1">
      <ul className="flex gap-[1px] text-sm">
        <li>
          <button
            type="button"
            onClick={() => editor.chain().focus().setNode('paragraph').run()}
            className={classNames(
              'flex items-center border border-transparent justify-center w-7 h-7 hover:border-gray-200 rounded-tl',
              editor.isActive('paragraph') ? 'bg-gray-100 text-success' : ''
            )}
          >
            <Tooltip label="Текст" position="top" />
            <Icons.paragraph height={12} />
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={classNames(
              'flex items-center border border-transparent justify-center w-7 h-7 hover:border-gray-200',
              editor.isActive('heading', { level: 2 }) ? 'bg-gray-100 text-success' : ''
            )}
          >
            <Tooltip label="Заголовок 2" position="top" />
            H2
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={classNames(
              'flex items-center border border-transparent justify-center w-7 h-7 hover:border-gray-200',
              editor.isActive('heading', { level: 3 }) ? 'bg-gray-100 text-success' : ''
            )}
          >
            <Tooltip label="Заголовок 3" position="top" />
            H3
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
            className={classNames(
              'flex items-center border border-transparent justify-center w-7 h-7 hover:border-gray-200',
              editor.isActive('heading', { level: 4 }) ? 'bg-gray-100 text-success' : ''
            )}
          >
            <Tooltip label="Заголовок 4" position="top" />
            H4
          </button>
        </li>
      </ul>

      <hr className="flex h-6 border-r" />

      <ul className="flex gap-[1px]">
        <li>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={classNames(
              'flex items-center border border-transparent justify-center w-7 h-7 hover:border-gray-200',
              editor.isActive('bold') ? 'bg-gray-100 text-success' : ''
            )}
          >
            <Tooltip label="Жирный" position="top" />
            <Icons.bold height={12} />
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={classNames(
              'flex items-center border border-transparent justify-center w-7 h-7 hover:border-gray-200',
              editor.isActive('italic') ? 'bg-gray-100 text-success' : ''
            )}
          >
            <Tooltip label="Курсив" position="top" />
            <Icons.italic height={12} />
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={classNames(
              'flex items-center border border-transparent justify-center w-7 h-7 hover:border-gray-200',
              editor.isActive('underline') ? 'bg-gray-100 text-success' : ''
            )}
          >
            <Tooltip label="Подчеркивать" position="top" />
            <Icons.underline height={12} />
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={classNames(
              'flex items-center border border-transparent justify-center w-7 h-7 hover:border-gray-200',
              editor.isActive('strike') ? 'bg-gray-100 text-success' : ''
            )}
          >
            <Tooltip label="Зачеркнуть" position="top" />
            <Icons.strike height={12} />
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleSubscript().run()}
            className={classNames(
              'flex items-center border border-transparent justify-center w-7 h-7 hover:border-gray-200',
              editor.isActive('subscript') ? 'bg-gray-100 text-success' : ''
            )}
          >
            <Tooltip label="Подстрочный индекс" position="top" />
            <Icons.subscript height={12} />
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleSuperscript().run()}
            className={classNames(
              'flex items-center border border-transparent justify-center w-7 h-7 hover:border-gray-200',
              editor.isActive('superscript') ? 'bg-gray-100 text-success' : ''
            )}
          >
            <Tooltip label="Надстрочный индекс" position="top" />
            <Icons.superscript height={12} />
          </button>
        </li>
      </ul>

      <hr className="flex h-6 border-r" />

      <ul className="flex gap-[1px]">
        <li>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={classNames(
              'flex items-center border border-transparent justify-center w-7 h-7 hover:border-gray-200',
              editor.isActive('bulletList') ? 'bg-gray-100 text-success' : ''
            )}
          >
            <Tooltip label="Маркированный список" position="top" />
            <Icons.bulletList height={12} />
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={classNames(
              'flex items-center border border-transparent justify-center w-7 h-7 hover:border-gray-200',
              editor.isActive('orderedList') ? 'bg-gray-100 text-success' : ''
            )}
          >
            <Tooltip label="Упорядоченный список" position="top" />
            <Icons.orderedList height={14} />
          </button>
        </li>
      </ul>

      <hr className="flex h-6 border-r" />

      <ul className="flex gap-[1px]">
        <li>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={classNames(
              'flex items-center border border-transparent justify-center w-7 h-7 hover:border-gray-200',
              editor.isActive({ textAlign: 'left' }) ? 'bg-gray-100 text-success' : ''
            )}
          >
            <Tooltip label="Выровнять по левому краю" position="top" />
            <Icons.alignLeft height={12} />
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={classNames(
              'flex items-center border border-transparent justify-center w-7 h-7 hover:border-gray-200',
              editor.isActive({ textAlign: 'center' }) ? 'bg-gray-100 text-success' : ''
            )}
          >
            <Tooltip label="Выровнять по центру" position="top" />
            <Icons.alignCenter height={12} />
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={classNames(
              'flex items-center border border-transparent justify-center w-7 h-7 hover:border-gray-200',
              editor.isActive({ textAlign: 'right' }) ? 'bg-gray-100 text-success' : ''
            )}
          >
            <Tooltip label="Выровнять по правому краю" position="top" />
            <Icons.alignRight height={12} />
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
            className={classNames(
              'flex items-center border border-transparent justify-center w-7 h-7 hover:border-gray-200',
              editor.isActive({ textAlign: 'justify' }) ? 'bg-gray-100 text-success' : ''
            )}
          >
            <Tooltip label="Выровнять по ширине" position="top" />
            <Icons.alignJustify height={12} />
          </button>
        </li>
      </ul>
    </div>
  );
}
