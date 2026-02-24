import { useState } from "react";
import type { Course } from "../types/course";
import Button from "./Button";
import PopoverList from "./PopoverList";
import { Star } from "lucide-react";

const formatCount = (n: number) =>
  new Intl.NumberFormat(undefined, { notation: "compact" }).format(n);

export default function CourseCard({ course }: { course: Course }) {
  const [loading, setLoading] = useState(false);

  const handleStart = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
  };

  return (
    <article className="ui-card ui-card-hover group h-full overflow-hidden flex flex-col">
      <img
        src={course.image}
        alt={course.title}
        className="w-full aspect-[2/1] object-cover"
        loading="lazy"
        decoding="async"
        draggable={false}
      />

      <div className="p-5 flex flex-col flex-1">
        <h4 className="text-base sm:text-lg font-semibold tracking-tight">
          {course.title}
        </h4>

        <p className="mt-2 text-sm text-color-text-secondary line-clamp-2 min-h-[2.5rem]">
          {course.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {course.badge ? (
            <span className="ui-badge">{course.badge}</span>
          ) : null}

          <span
            className="ui-pill"
            aria-label={`Rating ${course.rating} out of 5`}
          >
            <Star
              className="size-3.5 text-color-warning fill-current"
              aria-hidden="true"
            />
            <span>{course.rating.toFixed(1)}</span>
          </span>

          <span
            className="ui-pill"
            aria-label={`${course.ratingCount} ratings`}
          >
            {formatCount(course.ratingCount)} ratings
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <Button loading={loading} onClick={handleStart}>
            Start Course
          </Button>

          <PopoverList
            items={course.details}
            trigger={
              <Button
                variant="outline"
                fullWidth
                ariaLabel={`View details for ${course.title}`}
              >
                View Details
              </Button>
            }
          />
        </div>
      </div>
    </article>
  );
}
