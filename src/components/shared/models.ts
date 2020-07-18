export interface SubMenuItem {
  name: string
  route: string
  icon: string
  notes: string
}

export interface MenuItem {
  name: string
  route: string
  icon: string
  notes: string
  subMenuItem: SubMenuItem[]
}
