function rr(a1,a2){

        var arr =  a1.split(/^0+/);

//        debugger;
        var res =  "0".repeat(a1.length-arr[arr.length-1].length) + (Number(arr[arr.length-1])+a2);


console.log(res);

        console.log(res.slice(-a1.length,-1));

        
        // str.slice(-3, -1); // returns 'us'
//        a1.split(/^0+/)[a1.length-1] +

    }

   