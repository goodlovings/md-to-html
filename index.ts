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
   */
  mdRender(id: string, mdstr: string) {
    const dom: HTMLElement | null = document.getElementById(id);
    if (dom) {
      dom.innerHTML = this.mdToHtml(mdstr);
    } else {
      throw new Error(`无法获取${id}元素！`);
    }
  }
}

export default new MdToHtml();


