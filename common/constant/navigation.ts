type INavigation = {
  link: string
  label: string
}

interface INavigationMenuChildren extends INavigation {
  isNew?: boolean
}

interface INavigationMenu extends INavigation {
  icon: string
  children?: INavigationMenuChildren[]
}

export const NAVIGATION_MENU: INavigationMenu[] = [
  {
    link: '/',
    label: 'PRODUCT',
    icon: 'material-symbols:data-table-outline-rounded',
    children: [
      {
        link: '/berries',
        label: 'Berries',
      },
      {
        link: '/fashion',
        label: 'Fashion',
      },
    ],
  },
]
