var canvas = Raphael("container", 750, 500);
boxWidth = 30
boxHeight = 50
counter = 1
rects = []

for (var row = 0; row < 4; row++) {
    for (var col = 1; col <= 6; col++) {
        rects.push(canvas.rect(300 + (boxWidth * col), 0 + (boxHeight * row), boxWidth, boxHeight)
            .attr({ fill: 'white' }))
        if (col % 3 == 0) {
            canvas.text(300 + (boxWidth * col) + 25, 0 + (boxHeight * row) + 45, counter)
            counter++;
        }
    }
}

for (var row = 0; row < 2; row++) {
    for (var col = 1; col <= 24; col++) {
        rects.push(canvas.rect(30 + (boxWidth * col), 200 + (row * boxHeight), boxWidth, boxHeight)
            .attr({ fill: 'white' }))

        if (col % 3 == 0) {
            canvas.text(30 + (boxWidth * col) + 25, 200 + (boxHeight * row) + 45, counter)
            counter++;
        }
    }
}
for (var row = 0; row < 3; row++) {
    for (var col = 1; col <= 6; col++) {
        rects.push(canvas.rect(300 + (boxWidth * col), 300 + (row * boxHeight), boxWidth, boxHeight)
            .attr({ fill: 'white' }))
        if (col % 3 == 0) {
            canvas.text(300 + (boxWidth * col) + 25, 300 + (boxHeight * row) + 45, counter)
            counter++;
        }
    }
}
for (var col = 1; col <= 3; col++) {
    rects.push(canvas.rect(270 + (boxWidth * 2 * col), 450, boxWidth * 2, boxHeight)
        .attr({ fill: 'white' }))
    if (col % 3 == 0) {
        canvas.text(300 + (boxWidth * 2 * col) + 25, 450 + 45, counter)
        counter++;
    }
}

rects.forEach(rect => {
    rect.click(function () {
        if (this.attr('fill') == 'white') {
            this.attr('fill', 'green')
        }
        else if (this.attr('fill') == 'green') {
            this.attr('fill', 'yellow')
        }
        else if (this.attr('fill') == 'yellow') {
            this.attr('fill', 'red')
        }
        else {
            this.attr('fill', 'white')
        }
        calculateGreenPercent(rects)
    })
});

function calculateGreenPercent(rects) {
    map = rects.reduce(function (acc, rect) {
        if (rect.attr('fill') == 'green') {
            acc.totalPopulated++;
            acc.green++;
        }
        else if (rect.attr('fill') != "white") {
            acc.totalPopulated++;
        }
        return acc;
    }, { "totalPopulated": 0, "green": 0 });

    totalDiv = document.getElementById("greenPercent").textContent =
        `Accident Free Shifts: ${(map.green * 100 / map.totalPopulated).toFixed(0)}%`
}
