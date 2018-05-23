class DOMNodeCollection {
  //will receive an array of html elements as argument
  constructor(nodes) {
    this.nodes = nodes;
  }

  html(html){
    if (typeof html === 'string'){
      for (var i = 0; i < this.nodes.length; i++) {
        this.nodes[i].innerHTML = html;
      }
    }
    else if (this.nodes.length > 0) {
      return this.nodes[0].innerHTML;
    }
  }
  empty(){
    this.html('');
  }
  append(children){
    if (typeof children === 'object' && !(children instanceof DomNodeCollection))
      children = $l(children);

    if (typeof children === 'string'){
      for (var i = 0; i < this.nodes.length; i++) {
        this.nodes[i].innerHTML += children;
      }
    }
    if (children instanceof DOMNodeCollection) {
      for (var i = 0; i < this.nodes.length; i++) {
        for (var j = 0; j < children.length; j++) {
          this.nodes[i].innerHTML += children[j];
        }
      }
    }
  }
}


module.exports = DOMNodeCollection;
