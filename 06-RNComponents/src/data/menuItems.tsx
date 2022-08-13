import { MenuItem } from "../interfaces/appInterfaces";

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    components: 'Animation101Screen'
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    components: 'Animation102Screen'
  },
  {
    name: 'Switch',
    icon: 'toggle-outline',
    components: 'SwitchScreen'
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    components: 'AlertScreen'
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    components: 'TextInputScreen'
  },
  {
    name: 'Pull to Refresh',
    icon: 'refresh-circle-outline',
    components: 'PullToRefreshScreen'
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    components: 'CustomSectionListScreen'
  },
  {
    name: 'Modal Screen',
    icon: 'copy-outline',
    components: 'ModalScreen'
  },
  {
    name: 'Infinite Scroll',
    icon: 'infinite-outline',
    components: 'InfiniteScrollScreen'
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    components: 'SlidesScreen'
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    components: 'ChangeThemeScreen'
  },
]