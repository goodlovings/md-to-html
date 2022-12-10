import { marked } from 'marked';

interface CatalogType {
  id: string,
  text: string,
  level: number,
  type: string,
}

class MdToHtml {
  /**
   * markdown字符串转化为html
   * @param {markdown字符串} mdstr
   * @returns 返回html格式内容
   */
  mdToHtml(mdstr: string): string {
    let html = marked.parse(mdstr);
    return html;
  }
  /**
   * markdown字符串转化为html并且渲染到dom中
   * @param {用于渲染到dom元素id} id
   * @param {markdown字符串} mdstr
   * @param {md主题样式} theme
   */
  mdRender(id: string, mdstr: string, theme: string = 'github') {
    const dom: HTMLElement | null = document.getElementById(id);
    if (dom) {
      let newClass: string[] = dom.className.split(' ');
      newClass.push('markdown-body');
      dom.className = newClass.join(' ');
      dom.innerHTML = marked.parse(mdstr);
      if (theme) {
        let link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("type", "text/css");
        // 动态引入css
        let url = new URL(`./styles/${theme}.css`, import.meta.url).href
        link.setAttribute("href", url);
        dom.appendChild(link);
      }
    } else {
      throw new Error(`无法获取${id}元素！`);
    }
  }
  /**
   * 设置md渲染的dom的目录
   * @param {需要生成目录的dom} sourceId
   * @param {生成目录渲染的dom} targetId
   */
  setCatalog(sourceId: string, targetId: string, isClickAnchor: boolean = true) {
    const domSource: HTMLElement | null = document.getElementById(sourceId);
    const domTarget: HTMLElement | null = document.getElementById(targetId);
    let catalogData: CatalogType[] = []
    if (domSource && domTarget) {
      // 获取md的dom节点目录数据
      let nodes = domSource.childNodes;
      if (nodes?.length > 0) {
        nodes.forEach((node: any) => {
          if (['h1', 'h2', 'h3'].includes(node.localName)) {
            catalogData.push({
              id: node.id,
              text: node.innerHTML,
              level: Number(node.nodeName.substring(1, 2)),
              type: node.nodeName,
            });
          }
        });
      }
      // 设置目录渲染dom
      const baseFontSize: number = 18;
      const basePaddingLeft: number = 10;
      catalogData.forEach((cata: CatalogType) => {
        let dom = document.createElement('div');
        dom.innerHTML = cata.text;
        dom.style.fontSize = `${baseFontSize - ((cata.level - 1) * 2)}px`;
        dom.style.paddingLeft = `${basePaddingLeft * (cata.level - 1)}px`;
        dom.style.fontWeight = `${600 - (cata.level - 1) * 100}`
        dom.style.marginBottom = `${16 - (cata.level * 2)}}px`;
        // 点击cata定位到dom具体内容
        const clickAnchor = () => {
          let anchorDom: HTMLElement | null = document.getElementById(cata.id)
          anchorDom && anchorDom.scrollIntoView({
            behavior: 'smooth', //定义过渡动画。其中一个auto或smooth。默认为auto.
            block: 'center', //定义垂直对齐。一start，center，end，或 nearest。默认为start.
            inline: 'nearest', //定义水平对齐方式。一start，center，end，或 nearest。默认为nearest.
          });
        };
        if (isClickAnchor) {
          dom.style.cursor = 'pointer';
          dom.onclick = clickAnchor
        };
        domTarget.appendChild(dom);
      });
    } else {
      throw new Error(`无法获取${sourceId}/${targetId}元素！`);
    }
  }
}
export default new MdToHtml();


