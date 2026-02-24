import type { ReactNode } from "react";
import * as Popover from "@radix-ui/react-popover";

interface PopoverListProps {
  trigger: ReactNode;
  items?: string[];
}

export default function PopoverList({ trigger, items = [] }: PopoverListProps) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>{trigger}</Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          side="top"
          align="center"
          sideOffset={8}
          className="z-50 w-64 rounded-lg border border-color-border-default bg-color-background-default p-4 shadow-lg"
        >
          <h5 className="mb-2 text-sm font-semibold text-color-text-primary">
            What you’ll learn
          </h5>
          <ul className="list-disc pl-5 text-sm text-color-text-secondary space-y-1">
            {(items.length ? items : ["No details available"]).map(
              (detail, i) => (
                <li key={i}>{detail}</li>
              )
            )}
          </ul>

          <Popover.Arrow className="fill-color-action-primary" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
