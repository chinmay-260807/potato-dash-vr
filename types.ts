
export interface Obstacle {
  id: string;
  name: string;
  description: string;
  impact: string;
  icon: string;
}

export interface ControlScheme {
  input: string;
  action: string;
  description: string;
}

export interface RoadmapItem {
  quarter: string;
  feature: string;
  status: 'Planned' | 'In Progress' | 'Completed';
}

export enum GameMode {
  TimeTrial = 'Time Trial',
  Multiplayer = 'Multiplayer',
  Chaos = 'Chaos'
}
