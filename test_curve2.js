function calculateControlPoints(dropHeight) {
    // Want visible drop to be dropHeight.
    // Our curve goes from x=-2*w to x=3*w.
    // Start x=0 is t = (0 - (-2w)) / 5w = 2/5
    // Mid x=0.5w is t = (0.5w - (-2w)) / 5w = 2.5/5 = 1/2
    // Let's set p0y = p2y.
    // y(t) = (1-t)^2 * p0y + 2t(1-t) * p1y + t^2 * p0y

    // For t = 2/5: y(2/5) = (3/5)^2 * p0y + 2*(2/5)*(3/5)*p1y + (2/5)^2 * p0y
    // = (9/25)*p0y + (12/25)*p1y + (4/25)*p0y = (13/25)*p0y + (12/25)*p1y

    // For t = 1/2: y(1/2) = (1/4)*p0y + 2*(1/2)*(1/2)*p1y + (1/4)*p0y
    // = (1/2)*p0y + (1/2)*p1y

    // drop = y(1/2) - y(2/5) = [1/2 - 13/25]*p0y + [1/2 - 12/25]*p1y
    // = [25/50 - 26/50]*p0y + [25/50 - 24/50]*p1y
    // = (-1/50)*p0y + (1/50)*p1y

    // So dropHeight = (p1y - p0y) / 50
    // => p1y - p0y = 50 * dropHeight

    console.log(`For dropHeight=${dropHeight}, p1y - p0y = ${50 * dropHeight}`);
}
calculateControlPoints(400);
calculateControlPoints(200);
calculateControlPoints(100);
