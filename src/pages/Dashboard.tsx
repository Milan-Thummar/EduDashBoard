import { useEffect, useState } from "react";
import ProgressCard from "../components/ProgressCard";
import CourseCard from "../components/CourseCard";
import Pagination from "../components/Pagination";
import { getNewCoursesPage, getProgressSummary } from "../data/courseService";
import type { Course } from "../types/course";

const PAGE_SIZE = 6;

const pageTitleClass =
  "text-2xl sm:text-3xl font-bold tracking-tight text-color-text-primary";
const sectionTitleClass = "text-xl sm:text-2xl font-semibold tracking-tight";
const helperTextClass = "text-sm text-color-text-secondary";
const highlightTextClass = "font-semibold text-color-text-primary";

type ProgressSummary = {
  inProgress: number;
  completed: number;
  notStarted: number;
};

export default function Dashboard() {
  const [page, setPage] = useState(1);

  const [progress, setProgress] = useState<ProgressSummary>({
    inProgress: 0,
    completed: 0,
    notStarted: 0,
  });

  const [courses, setCourses] = useState<Course[]>([]);
  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const totalCourses =
    progress.inProgress + progress.completed + progress.notStarted;

  const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const showingFrom = total === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const showingTo = total === 0 ? 0 : Math.min(page * PAGE_SIZE, total);

  // Initial load: progress + first courses page
  useEffect(() => {
    let ignore = false;

    (async () => {
      setLoading(true);
      setError(null);

      try {
        const [summary, page1] = await Promise.all([
          getProgressSummary(),
          getNewCoursesPage(1, PAGE_SIZE),
        ]);

        if (ignore) return;

        setProgress(summary);
        setCourses(page1.items);
        setTotal(page1.total);
        setPage(1);
      } catch {
        if (!ignore)
          setError("Failed to load dashboard data. Please try again.");
      } finally {
        if (!ignore) setLoading(false);
      }
    })();

    return () => {
      ignore = true;
    };
  }, []);

  // Load requested page (after initial load)
  useEffect(() => {
    if (page === 1) return;

    let ignore = false;

    (async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await getNewCoursesPage(page, PAGE_SIZE);
        if (!ignore) {
          setCourses(res.items);
          setTotal(res.total);
        }
      } catch {
        if (!ignore) setError("Failed to load courses. Please try again.");
      } finally {
        if (!ignore) setLoading(false);
      }
    })();

    return () => {
      ignore = true;
    };
  }, [page]);

  // Keep page in bounds if total changes
  useEffect(() => {
    if (page > pageCount) setPage(pageCount);
  }, [page, pageCount]);

  return (
    <main id="main">
      {/* Welcome */}
      <header className="mb-8">
        <h1 className={pageTitleClass}>
          Welcome back <span aria-hidden>👋</span>
        </h1>
        <p className={helperTextClass}>
          Track your progress and pick something new to learn.
        </p>
      </header>

      {/* Progress */}
      <section aria-labelledby="progress-overview" className="mb-8">
        <header className="mb-5">
          <h2 id="progress-overview" className={sectionTitleClass}>
            Course Progress Overview
          </h2>
        </header>

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProgressCard
            title="In Progress"
            count={progress.inProgress}
            total={totalCourses}
            tone="primary"
          />
          <ProgressCard
            title="Completed"
            count={progress.completed}
            total={totalCourses}
            tone="success"
          />
          <ProgressCard
            title="Not Started"
            count={progress.notStarted}
            total={totalCourses}
            tone="warning"
          />
        </div>
      </section>

      {/* New Courses */}
      <section aria-labelledby="new-courses">
        <header className="mb-5 flex items-center justify-between gap-4">
          <h2 id="new-courses" className={sectionTitleClass}>
            New Courses
          </h2>

          {total > 0 && (
            <p className={helperTextClass}>
              Showing <span className={highlightTextClass}>{showingFrom}</span>–
              <span className={highlightTextClass}>{showingTo}</span> of{" "}
              <span className={highlightTextClass}>{total}</span>
            </p>
          )}
        </header>

        {loading ? (
          <p className={helperTextClass}>Loading courses…</p>
        ) : error ? (
          <p className={helperTextClass}>{error}</p>
        ) : total === 0 ? (
          <p className={helperTextClass}>
            No new courses right now — check back soon.
          </p>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>

            <Pagination
              pageCount={pageCount}
              currentPage={page}
              onPageChange={setPage}
            />
          </>
        )}
      </section>
    </main>
  );
}
