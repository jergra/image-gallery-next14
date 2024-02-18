import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, rows, cols, ...props }, ref) => {
    return (
      <textarea
        // rows={rows || 4} // Set default number of rows if not provided
        // cols={cols || 50} // Set default number of columns if not provided
        className={cn(
          //"min-h-[8rem] flex w-full resize-none rounded-md border border-input bg-background p-3 font-medium text-sm shadow-sm transition-colors duration-200 ease-in-out hover:border-slate-300 focus:border-primary dark:hover:border-slate-600 dark:focus:border-primary file:hidden",
          "flex h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      ></textarea>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
