let o = {
  m: function () {
    let self = this;
    console.log(this == o);
    f();
    function f() {
      console.log(this === o);
      console.log(self === o);
    }
  },
};
console.log(o.m());
