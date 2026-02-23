import type { Course } from "../types/course";

let coursesCache: Course[] | null = null;

async function loadAllCourses(): Promise<Course[]> {
  if (coursesCache) return coursesCache;

  const res = await fetch("/mock/courses.json");
  if (!res.ok) throw new Error("Failed to load courses");

  coursesCache = (await res.json()) as Course[];
  return coursesCache;
}

export async function getProgressSummary() {
  const courses = await loadAllCourses();

  const summary = { inProgress: 0, completed: 0, notStarted: 0 };

  for (const course of courses) {
    summary[course.status]++;
  }

  return summary;
}

export async function getNewCoursesPage(page: number, pageSize: number) {
  const all = await loadAllCourses();
  const newCourses = all.filter((c) => c.status === "notStarted");

  const start = (page - 1) * pageSize;
  const items = newCourses.slice(start, start + pageSize);

  return {
    items,
    total: newCourses.length,
  };
}
