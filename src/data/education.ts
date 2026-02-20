export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  thesis: string;
}

export const education: Education[] = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Binus University",
    location: "Indonesia",
    period: "2017-2021",
    gpa: "GPA: 3.17",
    thesis: "iOS based guided mental health journaling application"
  }
];
