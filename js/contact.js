
$(()=>{
    $('div.c-middle>ul>li').each((i,elem)=>{
        $(elem).click((e)=>{
            e.preventDefault();
            $('#map').css('display','block');
            $('p.expect').css('display','none');
            if(i==0){
                text='<b style="color:#A51C21">东方广场店</b><br>电话010-12345678<br>地址：北京东城区东长安街1号东方新天地一区';
                map(116.419667,39.915611,text);
            }else if(i==1){
                text='<b style="color:#A51C21">天津大悦城店</b><br>电话022-12345678<br>地址：地址：天津市南开区南门外大街2号大悦城';
                map(117.186956,39.138928,text);
            }else if(i==2){
                $('#map').css('display','none');
                $('p.expect').css('display','block');
            }

        })
    })


    // var x=116.419667,y=39.915611;
    text='<b style="color:#A51C21">东方广场店</b><br>电话010-12345678<br>地址：北京东城区东长安街1号东方新天地一区';
    map(116.419667,39.915611,text);
    function map(x,y,text){

        //创建和初始化地图函数：
        function initMap(){
            createMap();//创建地图
            setMapEvent();//设置地图事件
            addMapControl();//向地图添加控件
            addMapOverlay();//向地图添加覆盖物
        }
        function createMap(){
            map = new BMap.Map("map");
            map.centerAndZoom(new BMap.Point(x,y),18);
        }
        function setMapEvent(){
            map.enableScrollWheelZoom();
            map.enableKeyboard();
            map.enableDragging();
            map.enableDoubleClickZoom()
        }
        function addClickHandler(target,window){
            target.addEventListener("click",function(){
                target.openInfoWindow(window);
            });
        }
        function addMapOverlay(){}
        //向地图添加控件
        function addMapControl(){
            var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
            scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
            map.addControl(scaleControl);
            var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
            map.addControl(navControl);
            var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
            map.addControl(overviewControl);
        }
        var map;
        initMap();

        // 编写自定义函数,创建标注
        function addMarker(point){
            var marker = new BMap.Marker(point);
            map.addOverlay(marker);
            var label = new BMap.Label(text,{offset:new BMap.Size(20,-10)});
            label.setStyle({
                padding:"10px",
                borderColor :"#ddd",
            });
            marker.setLabel(label);

        }
        var point = new BMap.Point(x,y);
        addMarker(point);

    }
})


