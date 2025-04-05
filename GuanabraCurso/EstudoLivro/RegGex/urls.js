const url = /(\w+):\/\/([\w.]+)\/(\S*)/;

const text = "Visit my blog at http://www.example.com/~david";
const result = text.match(url);
if (result != null) {
  const fullurl = result[0];
  const protocol = result[1];
  const host = result[2];
  const path = result[3];
  console.log(fullurl);
  console.log(protocol);
  console.log(host);
  console.log(path);
}
