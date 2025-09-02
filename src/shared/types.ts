export type AppointmentSchema = {
  name?: string;
  email: string;
  grade?: string;
  datetime?: string;
  notes?: string;
};

export const AppointmentSchema = {
  name: '',
  email: '',
  grade: '',
  datetime: '',
  notes: ''
} as any;
