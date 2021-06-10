import { Component, h, Element } from '@stencil/core';

const crossTagReferenceCounts = {};

@Component({ tag: 'test-component', shadow: true })
export class TestComponent {
  //private _rootNode: Node = null;

  @Element()
  private element: HTMLElement;

  connectedCallback() {
    const root = this.element.getRootNode();
    const referenceCounts = crossTagReferenceCounts[this.element.tagName] || new WeakMap();
    const info = referenceCounts.get(root) || {};
    const referenceCount = (info.referenceCount || 0) + 1;
    info.referenceCount = referenceCount;
    referenceCounts.set(root, referenceCount);
    crossTagReferenceCounts[this.element.tagName] = referenceCounts;
    if (referenceCount === 1) {
      if (this.element.ownerDocument !== root) {
        //this._rootNode = root;
      }

      const style = document.createElement('style');
      //let cssAsString = this.constructor['styles'];
      let cssAsString = '.test {color: red;}';
      console.log(cssAsString);
      const versionedComponentName = this.element.nodeName.toLowerCase();
      const genericComponentName = this.element.tagName;

      if (versionedComponentName !== genericComponentName) {
        cssAsString = cssAsString.split(genericComponentName).join(versionedComponentName);
      }
      style.textContent = cssAsString;
      style.dataset.name = this.element.tagName.toLowerCase();
      const parent = root instanceof ShadowRoot ? root : document.head;
      parent.appendChild(style);
      console.log(info);
      info.style = style;
    }

    referenceCounts.set(root, info);
    crossTagReferenceCounts[this.element.tagName] = referenceCounts;
  }

  render() {
    return (
      <p id="test" class="test">
        Test component
      </p>
    );
  }
}
