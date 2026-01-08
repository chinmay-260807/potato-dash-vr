
import React from 'react';
import { Obstacle, ControlScheme, RoadmapItem } from './types';

export const OBSTACLES: Obstacle[] = [
  {
    id: 'pan',
    name: 'Frying Pan Traps',
    description: 'Swinging cast-iron hazards that launch potatoes into the stratosphere.',
    impact: 'High Knockback',
    icon: '🍳'
  },
  {
    id: 'butter',
    name: 'Butter Slip Ramps',
    description: 'Greased inclines that reduce friction to near zero.',
    impact: 'Momentum Boost / Loss of Control',
    icon: '🧈'
  },
  {
    id: 'mash',
    name: 'Mashed Potato Pits',
    description: 'Sticky zones that act like quicksand.',
    impact: 'Extreme Speed Reduction',
    icon: '🥔'
  },
  {
    id: 'peeler',
    name: 'Peeler Blades',
    description: 'Rotating sharp edges that trim off potato "health" or size.',
    impact: 'Stun / Size Reduction',
    icon: '🔪'
  }
];

export const CONTROLS: ControlScheme[] = [
  {
    input: 'Hand Gestures',
    action: 'Movement',
    description: '"Swim" through the air or paddle on the ground using controller position tracking.'
  },
  {
    input: 'Head Tilt',
    action: 'Steering',
    description: 'Lean your body/head to shift the potato\'s center of mass for tight corners.'
  },
  {
    input: 'Trigger/Grip',
    action: 'Squeeze/Jump',
    description: 'Compress the potato body and release to spring upwards.'
  },
  {
    input: 'Thumbstick Click',
    action: 'Sprint (Starchy Burst)',
    description: 'Temporary speed boost with heavy particle exhaust.'
  }
];

export const ROADMAP: RoadmapItem[] = [
  { quarter: 'Q1 2024', feature: 'Core Physics Engine & Single Player Alpha', status: 'Completed' },
  { quarter: 'Q2 2024', feature: 'Multiplayer Networking (8 Players)', status: 'In Progress' },
  { quarter: 'Q3 2024', feature: 'Potato Customizer & Steam/Meta Integration', status: 'Planned' },
  { quarter: 'Q4 2024', feature: 'Level Editor & Community Workshop', status: 'Planned' }
];
