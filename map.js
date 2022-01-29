// let x2 = Math.floor(Math.random() * 768);
// let y2 = Math.floor(Math.random() * 570);

// let treasure = {
//     x: x2,
//     y: y2
// }

// map.onmousemove = showCoords;
// // map.onmousemove = getDistance;

// function showCoords(event) {
//     // let coords = document.getElementById("coords");
//     let x1 = event.offsetX;
//     let y1 = event.offsetY;
//     document.getElementById("coords").innerHTML = x1 + " " + y1;
//     // ... // здесь получаем значение координат мыши x и y от события event
//     // coords.value = "Координаты: " + x + ", " + y;
//     if (x1 < treasure.x + 30 && y1 < treasure.y + 30) // условие, где находится клад - расстояние от координат курсора до координат клада меньше 30
//         alert("Сокровище здесь!");
// }

// // map.onmousemove = getDistance;

// function getDistance(event) {
//     let distanceX = event.offsetX - treasure.x;
//     let distanceY = event.offsetY - treasure.y;
//     // alert(distanceX)
//     document.getElementById("distance").innerHTML = distanceX + distanceY; // квадратный корень суммы квадратов расстояний
// }

// getDistance(x``);


window.onload = function () {
    let map = document.getElementById("map");
    let rx = Math.floor(Math.random() * (map.width + 1));
    let ry = Math.floor(Math.random() * (map.height + 1));
    let treasure = {
        x: rx,
        y: ry
    }

    map.onmousemove = showCoords;
    map.onmousedown = getDistance;

    function showCoords(event) {
        let coords = document.getElementById("coords");
        let x = event.offsetX;
        let y = event.offsetY;
        coords.value = `Координаты: ${x}, ${y}`;
        let text = document.getElementById("message").innerHTML;
        if (Math.abs(x - treasure.x) < 30 && Math.abs(y - treasure.y) < 30) {
            document.getElementById("message").innerHTML = text.replace(text, "Сокровище здесь!");
        }
        if (Math.abs(x - treasure.x) < 100 && Math.abs(x - treasure.x) >= 30 && Math.abs(y - treasure.y) < 100 && Math.abs(y - treasure.y) >= 30) {
            document.getElementById("message").innerHTML = text.replace(text, "Сокровище недалеко!");
        }
        if (Math.abs(x - treasure.x) >= 100 && Math.abs(y - treasure.y) >= 100) {
            document.getElementById("message").innerHTML = text.replace(text, "");
        }
    }

    function getDistance(event) {
        let coords1 = document.getElementById("coords1");
        let distanceX = event.offsetX - treasure.x;
        let distanceY = event.offsetY - treasure.y;
        return coords1.value = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
    }
};

