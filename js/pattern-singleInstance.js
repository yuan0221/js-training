function Single(content) {
  this.content = content;
}

Single.getInstance = function (content) {
  if(!this.instance) {
    this.instance = new Single(content);
  } else {
    this.apply(this.instance,arguments)
  }
  return this.instance;
}

Single.prototype.showContent=function(){
  console.log(this.content)
}

let a = Single.getInstance('a');
a.showContent();
let b = Single.getInstance('b');
b.showContent();