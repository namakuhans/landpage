function testCurve(w, p0y, p1y, p2y) {
    // x(t) = (1-t)^2(-w) + 2t(1-t)(0.5w) + t^2(2w)
    // x(t)/w = 3t - 1 => t = (x/w + 1) / 3

    let t_start = (0 + 1) / 3;
    let t_mid = (0.5 + 1) / 3;

    let y_start = Math.pow(1 - t_start, 2) * p0y + 2 * t_start * (1 - t_start) * p1y + Math.pow(t_start, 2) * p2y;
    let y_mid = Math.pow(1 - t_mid, 2) * p0y + 2 * t_mid * (1 - t_mid) * p1y + Math.pow(t_mid, 2) * p2y;

    console.log(`w=${w}, p0y=${p0y}, p1y=${p1y}: drop = ${y_mid - y_start}`);
}

testCurve(400, -500, 1500, -500);
testCurve(1024, -500, 1500, -500);
testCurve(400, 0, 1000, 0);
testCurve(1024, 0, 1000, 0);
testCurve(400, -200, 800, -200);
