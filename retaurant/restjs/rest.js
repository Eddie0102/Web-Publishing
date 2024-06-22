// // alert("test");

function initGeocoder() {
    var map = new naver.maps.Map('map');
    var geocoder = new naver.maps.Service.Geocoder();

    $('#address').on('keydown', function(e) {
        if (e.which === 13) { // Enter Key
            geocoder.addressSearch($('#address').val(), function(status, result) {
                if (status === naver.maps.Service.Status.ERROR) {
                    if (!result) return alert('Something Wrong!');
                }

                var myaddr = new naver.maps.Point(result.items[0].point.x, result.items[0].point.y);
                map.setCenter(myaddr);

                var marker = new naver.maps.Marker({
                  position: myaddr,
                  map: map
                });
            });
        }
    });
}

// // 페이지가 로드되면, 검색창을 초기화합니다.
// $(window).on('load', initGeocoder);
// script type="text/javascript">
//         // 지도 초기화 함수
//         function initMap() {
//             var mapOptions = {
//                 center: new naver.maps.LatLng(37.5665, 126.9780), // 지도 중심 좌표 (서울)
//                 zoom: 10 // 지도 줌 레벨
//             };
//             var map = new naver.maps.Map('map', mapOptions);

//             // 마커 추가
//             var marker = new naver.maps.Marker({
//                 position: new naver.maps.LatLng(37.5665, 126.9780),
//                 map: map,
//                 title: '서울'
//             });

//             // 정보창 추가
//             var infowindow = new naver.maps.InfoWindow({
//                 content: '<h4>서울</h4><p>대한민국의 수도</p>'
//             });

//             // 마커 클릭 이벤트
//             naver.maps.Event.addListener(marker, 'click', function() {
//                 infowindow.open(map, marker);
//             });
//         }

//         // 페이지 로드 완료 시 지도 초기화
//         window.onload = initMap;
//     </script>