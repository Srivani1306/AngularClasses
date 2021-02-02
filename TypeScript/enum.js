var colors;
(function (colors) {
    colors[colors["red"] = 1010] = "red";
    colors[colors["green"] = 2020] = "green";
    colors[colors["blue"] = 3030] = "blue";
})(colors || (colors = {}));
console.log(colors.blue);
