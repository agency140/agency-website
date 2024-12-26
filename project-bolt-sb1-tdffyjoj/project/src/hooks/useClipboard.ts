import { useState } from 'react';

interface UseClipboardOptions {
  timeout?: number;
}

export function useClipboard({ timeout = 2000 }: UseClipboardOptions = {}) {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
      return true;
    } catch (error) {
      console.error('Failed to copy text:', error);
      return false;
    }
  };

  return { copied, copy };
}