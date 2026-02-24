import { useEffect, useState } from "react";
import ProgressCard from "../components/ProgressCard";
import { getProgressSummary } from "../data/courseService";

type ProgressSummary = {
  inProgress: number;
  completed: number;
  notStarted: number;
};

export default function Dashboard() {
  const [progress, setProgress] = useState<ProgressSummary>({
    inProgress: 0,
    completed: 0,
    notStarted: 0,
  });

  useEffect(() => {
    getProgressSummary()
      .then(setProgress)
      .catch(() => {});
  }, []);

  const totalCourses =
    progress.inProgress + progress.completed + progress.notStarted;

  return (
    <main id="main">
      {/* Welcome */}
      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-color-text-primary">
          Welcome back <span aria-hidden>👋</span>
        </h1>
        <p className="mt-2 text-sm text-color-text-secondary">
          Track your progress and pick something new to learn.
        </p>
      </header>

      {/* Progress */}
      <section aria-labelledby="progress-overview">
        <header className="mb-5">
          <h2
            id="progress-overview"
            className="text-lg sm:text-2xl font-semibold tracking-tight"
          >
            Course Progress Overview
          </h2>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
    </main>
  );
}
