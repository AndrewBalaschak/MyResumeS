 // GET API REQUEST
  get_visitors();
 async function get_visitors() {
    // call post api request function
    //await post_visitor(); https://mycntapi-mskeibtpwq-uw.a.run.app/
    try {
     
           let response = await fetch('https://mycntapi-mskeibtpwq-uw.a.run.app/', {
                // let response = await fetch('http://ip-api.com/json', {
            method: 'GET',
            headers: {
                //'x-api-key': 'ImqKZvELgw5TRETsNBXlM9MP7D0sUEvn7Jg1RrPA',
            }
        });
        // let data = await response.json()
        let data = await response.text()
        // let data = await response.json()
        // This code is really cool it puts all json into the object
        // var obj = JSON.parse(data, function (key, value) {return value });
        var obj = JSON.parse(data);

        document.getElementById("vcount").innerHTML = obj.currentVisitor;
        // console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
  }
  
    