export interface Skill {
  name: string
  level: number
  years: string
}

export interface SkillCategory {
  category: string
  icon: string
  skills: Skill[]
}

export interface Language {
  name: string
  level: string
  percentage: number
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    icon: '💻',
    skills: [
      { name: 'JavaScript / TypeScript', level: 95, years: '9+ yrs' },
      { name: 'Node.js', level: 95, years: '9+ yrs' },
      { name: 'SQL (Athena, Postgres, MySQL)', level: 85, years: '8+ yrs' },
      { name: 'AWS (Kinesis, DynamoDB, Lambda)', level: 80, years: '7+ yrs' },
      { name: 'Java', level: 75, years: '7 yrs' },
      { name: 'React', level: 55, years: '5 yrs' },
      { name: 'Spring Boot', level: 50, years: '5 yrs' },
      { name: 'Kotlin', level: 40, years: '4 yrs' },
      { name: 'Python', level: 30, years: '3 yrs' },
      { name: 'C / C++', level: 25, years: '3 yrs' },
    ],
  },
  {
    category: 'Systems & Architecture',
    icon: '🏗️',
    skills: [
      { name: 'Web / Online Applications', level: 95, years: '9+ yrs' },
      { name: 'Software Architecture Design', level: 80, years: '8 yrs' },
      { name: 'REST APIs', level: 75, years: '7 yrs' },
      { name: 'AWS & Cloud Infrastructure', level: 75, years: '7 yrs' },
      { name: 'Microservices & Distributed Apps', level: 70, years: '7 yrs' },
      { name: 'UML & Software Design', level: 65, years: '7 yrs' },
      { name: 'Quality & Test Automation', level: 55, years: '5 yrs' },
      { name: 'Data Processing & Analytics', level: 45, years: '4 yrs' },
      { name: 'Mobile Applications', level: 30, years: '3 yrs' },
      { name: 'Artificial Intelligence', level: 25, years: '2+ yrs' },
    ],
  },
  {
    category: 'Process & People',
    icon: '🤝',
    skills: [
      { name: 'Kanban & Scrum', level: 95, years: '9+ yrs' },
      { name: 'Coaching & Mentoring', level: 70, years: '7 yrs' },
      { name: 'Agile Project Management', level: 60, years: '6 yrs' },
      { name: 'Planning & Prioritization', level: 60, years: '6 yrs' },
      { name: 'Team Leading', level: 40, years: '4 yrs' },
      { name: 'Scrum Master', level: 25, years: '2 yrs' },
    ],
  },
]

export const languages: Language[] = [
  { name: 'Portuguese', level: 'Native', percentage: 100 },
  { name: 'English', level: 'Fluent', percentage: 90 },
  { name: 'German', level: 'Proficient', percentage: 70 },
  { name: 'Spanish', level: 'Conversational', percentage: 40 },
  { name: 'Swedish', level: 'Elementary', percentage: 20 },
]
