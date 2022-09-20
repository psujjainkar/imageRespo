var hybrid = document.createElement('div');
hybrid.id='toogle-div-1';
document.body.appendChild(hybrid);

var hybridtext = document.createElement('p');
hybridtext.innerHTML='Hybrid';
hybridtext.id='hybrid-text-id'
hybrid.appendChild(hybridtext);


var imageUrl2 = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVz7-2OT1IA7suuhQLADrFzF6ii-m_8G6ooKrhcGIpZXTTzvCfEJ8hSXMZP3GiFwNiLxHhONa2F5mIXgvkFsc18LcbYXOB0A4fzcQKT_p8Q2ASG3wZjgai72fG2qKa-OkYD8Sd9jt5kN3LyPWcUAUXtTkBU5jre2IjqXILMISoD8_6-UJBySUqfMYW/s100/hybrid.png';
$('#toogle-div-1').css({
    'background-image':'url("' + imageUrl2 + '")',
    "width":"100px",
    "height":"100px",
    "cursor":"pointer",
    "position":"absolute",
    "bottom":"100px",
    "right":"100px",
    "border-radius":"10px",
});


var topo = document.createElement('div');
topo.id='toogle-div-2';
document.body.appendChild(topo);

var topotext = document.createElement('p');
topotext.innerHTML='Topo';
topotext.id='topo-text-id'
topo.appendChild(topotext);




var imageUrl1 = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsWF-dEg6b82By8hj9hTyzY6yDvWjfRe9kHqBa6Cq51iETfwiCWPtssRfr05ZRfyaUV74vn6uv3gxzvPnxH4mB-IrxmkzVaHhtuyIU2uTq18-K_h8i1Y3aoIoxOIxGRdW1UDfMQ_i2A8Bq3E6J4_hJ0lpHpjzLd3NZ1He1pYGXBHaGwdUhTPcTqvhL/s1600/top.png';
$('#toogle-div-2').css({
    'background-image':'url("' + imageUrl1 + '")',
    "width":"100px",
    "height":"100px",
    "cursor":"pointer",
    "position":"absolute",
    "bottom":"100px",
    "right":"100px",
    "border-radius":"10px"
});


$('#toogle-div-2>#topo-text-id').css({

    "color":"black",
    "position":"absolute",
    "bottom":"0px",
    "background-color":"rgba(255, 255, 255, 0.6)",
    "width":"100px",
    "padding":"5px 0px 5px 0px",
    "text-align":"center",
    "user-select": "none"

});


$('#toogle-div-1>#hybrid-text-id').css({

    "color":"black",
    "position":"absolute",
    "bottom":"0px",
    "background-color":"rgba(255, 255, 255, 0.6)",
    "width":"100px",
    "padding":"5px 0px 5px 0px",
    "text-align":"center",
    "user-select": "none"

});






    $("#toogle-div-1").click(function(){

    $("#toogle-div-1").hide();
    $("#toogle-div-2").show();
    base_lyr.setVisible(false);
    googleLayerHybrid.setVisible(true);

    });


    $("#toogle-div-2").click(function(){
    $("#toogle-div-2").hide();
    $("#toogle-div-1").show();
    base_lyr.setVisible(true);
    googleLayerHybrid.setVisible(false);
 
    });