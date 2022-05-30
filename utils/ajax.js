export const get = async(url,param) =>{
  let _url = url;
  
  if(param){
    let keyList = Object.keys(param);
    if(keyList.length!==0){
      _url = _url + "?";
      Object.keys(param).map((item,index)=>{
        if(index!==0){
          _url = _url + "&";
        }
        _url = _url + item + "=" + param[item];
      })
    }
  }

  let responseData = new Promise((resolve, reject)=>{
    let ajax = new XMLHttpRequest();
    ajax.open(
      "GET",
      _url,
      true
    );
    ajax.send();
    ajax.onreadystatechange = function () {
      if(ajax.readyState == 4){
        if (ajax.readyState == 4 && ajax.status == 200) {
          var json = JSON.parse(ajax.responseText);
          resolve(json);
        }else{
          reject("error")
        }
      }
    };
  });
  return responseData;
}
export const post = async(url,param) =>{
  let responseData = new Promise((resolve, reject)=>{
    let ajax = new XMLHttpRequest();
    ajax.open(
      "POST",
      url,
      true
    );
    ajax.send(JSON.stringify(param));
    ajax.onreadystatechange = function () {
      if(ajax.readyState == 4){
        if (ajax.readyState == 4 && ajax.status == 200) {
          var json = JSON.parse(ajax.responseText);
          resolve(json.data);
        }else{
          reject("error")
        }
      }
    };
  });
  return responseData;
}