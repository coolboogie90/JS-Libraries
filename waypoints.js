const sectionTop = document.querySelector(".section200vh");
const sectionDown = document.querySelector(".section100vh");

const waypoint1 = new Waypoint({
    element: sectionTop,
    handler: function (direction) {
        if (direction == "down") {
            alert(`Are you sure ? Things are wild down there`);
        }
    },
    offset: 'bottom-in-view',
});

const waypoint2 = new Waypoint({
    element: sectionDown,
    handler: function (direction) {
        if (direction == "up") {
            alert("I told you! ");
        }
    },
});
