export declare function mdToHtml(mdstr: string): string;
export declare function mdRender(id: string, mdstr: string, theme?: Themes): void;

export enum Themes {
  ChanningCyan = 'channing-cyan',
  CondensedNightPurple = 'condensed-night-purple',
  Cyanosis = 'cyanosis',
  Fancy = 'fancy',
  Github = 'github',
  Hydrogen = 'hydrogen',
  Juejin = 'juejin',
  Smartblue = 'smartblue',
  Greenwillow = 'greenwillow',
  Vgreen = 'v-green',
  VuePro = 'vue-pro',
  HealerReadable = 'healer-readable',
  MkCute = 'mk-cute',
  Jzman = 'jzman',
  GeekBlack = 'geek-black',
  AwesomeGreen = 'awesome-green',
  QklhkChocolate = 'qklhk-chocolate',
  Orange = 'orange',
  ScrollsLight = 'scrolls-light',
  SimplicityGreen = 'simplicity-green',
  Arknights = 'arknights',
  Vuepress = 'vuepress',
  ChineseRed = 'Chinese-red',
  Nico = 'nico',
  DevuiBlue = 'devui-blue'
}