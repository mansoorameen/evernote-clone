export default function debounce(a,b,c){
  var d,e;
  return function(){
    function h(){
      d=null;
      c||(e=a.apply(f,g));
    }
    var f=this,g=arguments;
    return (clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e)
  }
}


//   for preview on the left sidebar, remove html from list of notes
// react quill displays as actual html, so we save html as string to database

export function removeHTMLTags (str) {
  return str.replace(/<[^>]*>?/gm, '');
};


