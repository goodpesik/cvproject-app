'use client';

import { useState } from 'react';
import { ClipboardCopy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';

export function CopyBox({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="copy-box group relative rounded-md text-sm p-4 font-mono border">
      <code>{text}</code>

      <Button
        onClick={handleCopy}
        variant="ghost"
        size="icon"
        className={clsx(
          'absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100'
        )}
      >
        {copied ? <Check size={16} /> : <ClipboardCopy size={16} />}
        <span className="sr-only">Copy to clipboard</span>
      </Button>
      {copied && (
        <span className="coppied absolute top-2 right-10 text-xs text-green-500 animate-fade-in-out">
          Copied!
        </span>
      )}
    </div>
  );
}
