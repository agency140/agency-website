import React from 'react';
import { Copy, Check } from 'lucide-react';
import { useClipboard } from '../../hooks/useClipboard';

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className = '' }: CopyButtonProps) {
  const { copied, copy } = useClipboard();

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    await copy(text);
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${className}`}
      aria-label={copied ? 'Copied!' : 'Copy to clipboard'}
      title={copied ? 'Copied!' : 'Copy to clipboard'}
    >
      {copied ? (
        <Check className="w-4 h-4" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </button>
  );
}