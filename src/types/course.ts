export type CourseStatus = "inProgress" | "completed" | "notStarted";

export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  ratingCount: number;
  badge?: string;
  details?: string[];
  status: CourseStatus;
}
