var canvas = Raphael("container", 630, 500);
boxWidth = 25
boxHeight = 50
largeIndent = 9 * boxWidth
smallIndent = 8 * boxWidth

counter = 1
rects = []

const drawBox = (x, y, width, height, color) => {
   canvas.rect(x, y, width, height).attr({ fill: color }) 
}

for (var row = 0; row < 4; row++) {
    for (var col = 1; col <= 6; col++) {
        rects.push(canvas.rect(largeIndent + (boxWidth * col), 0 + (boxHeight * row), boxWidth, boxHeight)
            .attr({ fill: 'white' }))
        if (col % 3 == 0) {
            canvas.text(largeIndent + (boxWidth * col) + 20, 0 + (boxHeight * row) + 45, counter)
            counter++;
        }
    }
}

for (var row = 0; row < 2; row++) {
    for (var col = 1; col <= 24; col++) {
        rects.push(canvas.rect((boxWidth * col), 200 + (row * boxHeight), boxWidth, boxHeight)
            .attr({ fill: 'white' }))

        if (col % 3 == 0) {
            canvas.text((boxWidth * col) + 20, 200 + (boxHeight * row) + 45, counter)
            counter++;
        }
    }
}
for (var row = 0; row < 3; row++) {
    for (var col = 1; col <= 6; col++) {
        rects.push(canvas.rect(largeIndent + (boxWidth * col), 300 + (row * boxHeight), boxWidth, boxHeight)
            .attr({ fill: 'white' }))
        if (col % 3 == 0) {
            canvas.text(largeIndent + (boxWidth * col) + 20, 300 + (boxHeight * row) + 45, counter)
            counter++;
        }
    }
}
for (var col = 1; col <= 3; col++) {
    rects.push(canvas.rect(smallIndent + (boxWidth * 2 * col), 450, boxWidth * 2, boxHeight)
        .attr({ fill: 'white' }))
    if (col % 3 == 0) {
        canvas.text(smallIndent + (boxWidth * 2 * col) + 20, 450 + 45, counter)
        counter++;
    }
}

rects.forEach(rect => {
    rect.click(function () {
        if (this.attr('fill') == 'white') {
            this.attr('fill', 'green')
        }
        else if (this.attr('fill') == 'green') {
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
