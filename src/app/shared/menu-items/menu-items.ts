import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'My Panel',
    main: [
      {
        state: 'simple-page',
        short_label: 'S',
        name: 'Home',
        type: 'link',
        icon: 'feather icon-file'
      },
      {
        state: 'produtos',
        short_label: 'P',
        name: 'Produtos',
        type: 'sub',
        icon: 'feather icon-watch',
        children: [
          {
            state: 'consulta',
            name: 'Consulta'
          },
          {
            state: 'cadastro',
            name: 'Cadastro'
          }
        ]
      }
    ]
  }
];


@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
