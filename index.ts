import { marked } from 'marked';

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
      let mdDom = document.createElement('div');
      mdDom.className = 'markdown-body';
      mdDom.innerHTML = marked.parse(mdstr);
      if (theme) {
        let link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("type", "text/css");
        // 动态引入css
        let url = new URL(`./styles/${theme}.css`, import.meta.url).href
        link.setAttribute("href", url);
        mdDom.appendChild(link);
      }
      dom.appendChild(mdDom);
    } else {
      throw new Error(`无法获取${id}元素！`);
    }
  }
}

export default new MdToHtml();


