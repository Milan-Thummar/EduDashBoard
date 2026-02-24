import type { ComponentType } from "react";
import { Clock, CheckCircle2, PlayCircle } from "lucide-react";
import { classNames } from "../utils/classNames";

type ProgressTone = "primary" | "success" | "warning";

interface ProgressCardProps {
  title: string;
  count: number;
  total: number;
  tone: ProgressTone;
}

type ToneStyle = {
  border: string;
  badge: string;
  iconBg: string;
  iconText: string;
  Icon: ComponentType<{ className?: string }>;
};

const toneStyles: Record<ProgressTone, ToneStyle> = {
  primary: {
    border: "border-color-action-primary",
    badge: "bg-color-progress-inprogress/40",
    iconBg: "bg-color-progress-inprogress/10",
    iconText: "text-color-action-primary",
    Icon: Clock,
  },
  success: {
    border: "border-color-success",
    badge: "bg-color-progress-completed/40",
    iconBg: "bg-color-progress-completed/10",
    iconText: "text-color-success",
    Icon: CheckCircle2,
  },
  warning: {
    border: "border-color-warning",
    badge: "bg-color-progress-notstarted/40",
    iconBg: "bg-color-progress-notstarted/10",
    iconText: "text-color-warning",
    Icon: PlayCircle,
  },
};

const titleToHint: Record<string, string> = {
  "In Progress": "Continue where you left off.",
  Completed: "Great job — keep the streak.",
  "Not Started": "Pick a course to begin today.",
};

export default function ProgressCard({
  title,
  count,
  total,
  tone,
}: ProgressCardProps) {
  const { border, badge, iconBg, iconText, Icon } = toneStyles[tone];

  const raw = total > 0 ? (count / total) * 100 : 0;
  const progressPercentage = Math.min(100, Math.max(0, Math.round(raw)));

  return (
    <section
      className={classNames(
        "ui-card ui-card-hover p-6 border-l-4 relative overflow-hidden",
        border
      )}
      aria-label={`${title}: ${count} of ${total} courses (${progressPercentage}%)`}
    >
      <div
        className={classNames(
          "pointer-events-none absolute -right-10 -top-10 size-28 rounded-full blur-2xl opacity-60",
          badge
        )}
        aria-hidden
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className={classNames(
              "size-10 rounded-xl grid place-items-center",
              iconBg,
              iconText
            )}
            aria-hidden
          >
            <Icon className="size-5" />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-color-text-primary">
              {title}
            </h3>
            <p className="text-xs text-color-text-secondary">
              {count} of {total} courses
            </p>
          </div>
        </div>

        <span
          className={classNames(
            "rounded-full px-3 py-1 text-xs font-semibold",
            badge
          )}
        >
          {title}
        </span>
      </div>

      <div className="relative mt-4 flex items-end justify-between gap-4">
        <div className="text-3xl md:text-4xl font-bold tracking-tight leading-none text-color-text-primary min-w-8">
          {count}
        </div>

        <div className="flex-1 -translate-y-1">
          <p className="mt-2 text-xs text-color-text-secondary flex justify-end">
            {progressPercentage}%
          </p>

          <div
            className="h-2 w-full rounded-full bg-color-background-muted overflow-hidden"
            role="progressbar"
            aria-valuenow={progressPercentage}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${title} progress`}
          >
            <div
              className={classNames("h-full rounded-full", badge)}
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      <p className="relative mt-4 text-sm text-color-text-secondary">
        {titleToHint[title] ?? "Keep learning and make progress."}
      </p>
    </section>
  );
}
