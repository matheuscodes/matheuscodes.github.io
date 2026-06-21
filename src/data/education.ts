export interface Degree {
  institution: string
  degree: string
  field: string
  startYear: number
  endYear: number
  location: string
}

export interface Course {
  name: string
  provider: string
  year: string
}

export interface Achievement {
  title: string
  year: string
  icon: string
}

export const degrees: Degree[] = [
  {
    institution: 'Technische Universität Berlin',
    degree: 'Exchange Program',
    field: 'Technische Informatik',
    startYear: 2009,
    endYear: 2011,
    location: 'Berlin, Germany',
  },
  {
    institution: 'Universidade de São Paulo',
    degree: 'Bachelor',
    field: 'Computer Engineering',
    startYear: 2004,
    endYear: 2008,
    location: 'São Carlos, Brazil',
  },
]

export const courses: Course[] = [
  { name: 'Trainer C Basis Bogen (Archery Coach)', provider: 'Schützenverband Berlin-Brandenburg', year: '2018' },
  { name: 'Basislehrgang Trainer Ausbildung', provider: 'Landessportbund Berlin', year: '2018–2019' },
  { name: 'Professional Scrum Master Training', provider: 'Scrum.org via Nokia', year: '2011' },
  { name: 'Software Development Process using Kanban', provider: 'David J. Anderson via it-Agile', year: '2012' },
  { name: 'Team Leading', provider: 'Thierry & Partner', year: '2013' },
  { name: 'Gamification Design', provider: 'iversity / PlayJugo', year: '2014' },
]

export const achievements: Achievement[] = [
  { title: 'Nokia Achievement Award', year: '2012', icon: '🏆' },
  { title: 'Brazilian Site Organizer — Global Game Jam', year: '2009', icon: '🎮' },
  { title: 'Published at 16th SIICUSP — Java/CORBA distributed game', year: '2008', icon: '📄' },
  { title: 'Runner Up, 5th Latin American Robotics Competition', year: '2008', icon: '🤖' },
  { title: 'Elected Student Representative (Computing Dept Council)', year: '2007–2008', icon: '🗳️' },
  { title: 'Published at 14th SIICUSP — Genetic Algorithms for Multi-agent Systems', year: '2006', icon: '📄' },
]
