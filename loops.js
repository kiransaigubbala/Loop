function sequence(){
        let s=parseInt(document.getElementById("start").value);
        let e=parseInt(document.getElementById("end").value);;
        for (let i=s;i<=e;i=i+1){
            document.write(i+"</br>")
        }
    }