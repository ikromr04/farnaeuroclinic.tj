import { useDropdown } from '@/hooks/use-dropdown';
import { Editor } from '@tiptap/core';
import classNames from 'classnames';
import React from 'react';
import Tooltip from '../../tooltip';
import { Icons } from './icons';

type ColorPaletteProps = {
  editor: Editor;
}

function ColorPalette({
  editor,
}: ColorPaletteProps): JSX.Element {
  const { ref, menuRef, isOpen, setIsOpen } = useDropdown<HTMLDivElement>();

  const setColor = (color: string) => {
    editor.chain().focus().setMark('textStyle', { color }).run();
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={classNames(
          'flex items-center border border-transparent justify-center w-7 h-7 hover:border-gray-200',
          editor.isActive('textStyle') ? 'bg-gray-100 text-success' : ''
        )}
      >
        <Tooltip label="Размер шрифта" position="top" />
        <Icons.fontColor className="mt-[2px]" height={14} />
      </button>

      <div
        ref={menuRef}
        className={classNames(
          'absolute !left-0 top-[calc(100%+4px)] z-10 grid grid-cols-[repeat(6,20px)] gap-[2px] bg-white border rounded p-1',
          isOpen ? 'visible' : 'invisible'
        )}
      >
        {[
          'inherit', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00',
          '#FF00FF', '#00FFFF', '#800000', '#808000', '#008000', '#800080',
          '#008080', '#000080', '#C0C0C0', '#808080', '#9999FF', '#993366',
          '#FFFFCC', '#CCFFFF', '#660066', '#FF8080', '#0066CC', '#CCCCFF',
        ].map((color) => (
          <button
            key={color}
            className="flex min-w-5 min-h-5 items-center border text-sm hover:bg-blue-50"
            type="button"
            onClick={() => setColor(color)}
            style={{ backgroundColor: color === 'inherit' ? 'black' : color }}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default ColorPalette;
