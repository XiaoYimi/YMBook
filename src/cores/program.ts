import type { App } from 'vue';
import type { DefinePlugin } from '#/config/default';

/** ======== 项目入口对象 ======== */
export default class Program {
  /** 项目实例对象 App */
  public app: App;
  public dom: string;
  public moduleList: DefinePlugin[];

  constructor(app: App<Element>) {
    this.dom = '#app';
    this.app = app;
    this.moduleList = [];
  }

  /** (按序)加载模块 */
  addModule(module: DefinePlugin) {
    this.moduleList.push(module);
  }

  /** 启用模块 */
  useModule() {
    this.moduleList.forEach(module => this.app.use(module));
  }

  /** 挂载到节点 */
  mountDom(dom?: string) {
    this.app.mount(dom ?? this.dom);
  }

  /** 启动项目 */
  startup() {
    this.useModule();
    this.mountDom();
  }
}
