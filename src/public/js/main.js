// Save all colors in local Storage
// for (var color in colors) {
//     localStorage.setItem(color, colors[color]);
// }


// Render all colors in local Storage
// for (var i = 0; i < localStorage.length; i++) {
//     $('ul').append('<li style="background-color:' + localStorage.getItem(localStorage.key(i)) + '">'
//             + '<div class="wrapper">'
//             + '<div class="name">'+ localStorage.key(i) +'</div>'
//             + '<div class="color-value">' + localStorage.getItem(localStorage.key(i)) + '</div>'
//             + '</div>'
//             + '</li>');
// }

// True = asc
// False = desc
var orderNameToggle = false;
var orderHexToggle = false;

var sortByProperty = function (property, order) {
    // If true order asc
    if(order === true) {
        return function (a, b) {
            if (a[property] < b[property]) {
                return -1;
            }
            if (a[property] > b[property]) {
                return 1;
            }
            return 0;
        };
    }
    // If false order desc
    if(order === false) {
        return function (a, b) {
            if (a[property] > b[property]) {
                return -1;
            }
            if (a[property] < b[property]) {
                return 1;
            }
            return 0;
        };
    }
};

function renderColors() {
    $('.grid.zoom').empty();

    for (var i = 0; i < colors.length; i++) {
        $('ul').append('<li style="background-color:' + colors[i]["hex"] + '">'
            + '<div class="wrapper">'
            + '<div class="name">' + colors[i]["name"] + '</div>'
            + '<div class="color-value">' + colors[i]["hex"] + '</div>'
            + '</div>'
            + '</li>');
    }

    $('li').on('click', function() {
        $('li').not(this).each(function() {
            $(this).removeClass('active');
        });
        $(this).toggleClass('active');
    });
}


$('.btn-order-by-name').on('click', function() {
    colors = colors.sort(sortByProperty("name", orderNameToggle));
    // Toggle btn
    orderNameToggle = !orderNameToggle;
    renderColors();
    $(this).find('.arrow').toggleClass('active');
});

$('.btn-order-by-hex').on('click', function() {
    colors = colors.sort(sortByProperty("hex", orderHexToggle));
    // Toggle btn
    orderHexToggle = !orderHexToggle;
    renderColors();
    $(this).find('.arrow').toggleClass('active');
});

(function init() {
    colors = colors.sort(sortByProperty("hex", orderHexToggle));
    renderColors();
})();

