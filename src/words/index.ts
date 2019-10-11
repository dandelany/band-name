export * from './adj_color';
export * from './adj_dark';
export * from './adj_personality';
export * from './n_abstract';
export * from './n_animal';
export * from './n_curse';
export * from './n_dark';
export * from './n_group';
export * from './n_groupgangsta';
export * from './n_mythcreature';
export * from './name_first';
export * from './prefix_dubstep';
export * from './prefix_rap';
export * from './suffix';

import {adj_color} from './adj_color';
import {adj_dark} from './adj_dark';
import {adj_personality} from './adj_personality';
import {n_abstract} from './n_abstract';
import {n_animal} from './n_animal';
import {n_curse} from './n_curse';
import {n_dark} from './n_dark';
import {n_group} from './n_group';
import {n_groupgangsta} from './n_groupgangsta';
import {n_mythcreature} from './n_mythcreature';
import {name_first} from './name_first';
import {prefix_dubstep} from './prefix_dubstep';
import {prefix_rap} from './prefix_rap';
import {suffix} from './suffix';

const wordLists: {[k: string]: string[]} = {
  adj_color,
  adj_dark,
  adj_personality,
  n_abstract,
  n_animal,
  n_curse,
  n_dark,
  n_group,
  n_groupgangsta,
  n_mythcreature,
  name_first,
  prefix_dubstep,
  prefix_rap,
  suffix
};
export default wordLists;
