export type User = {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
  weight: number;
  size: number;
  age: number;
  birth: Date;
  gender: 'male' | 'female' | 'other';
  category: 'scale' | 'intermediate' | 'rx' | 'elite';
  created_at: Date;
  updated_at: Date;
};
