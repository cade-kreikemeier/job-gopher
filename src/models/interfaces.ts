export interface Customer {
  id: number,
  created_at: string,
  name: string
};

export interface Job {
  id: number,
  created_at: string,
  customer_id: number,
  customer_po: string,
  part_number: string,
  part_name: string,
  part_rev: string,
  drawing_number: string,
  drawing_rev: string,
  quantity: number,
  material_id: number,
  current_process: number,
  processes: number[],
  due_date: string
};

export interface Material {
  id: number,
  material_name: string
};

export interface Process {
  id: number,
  process_name: string
};