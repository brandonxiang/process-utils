function group(data, step) {
    var length = data.length
    var count = length / step
    var results = []
    for (var a = 0; a < count; a++) {
        var result = [];
        var more = length - a * step;
        var limit = more >= step ? step : more % step;
        for (var b = 0; b < limit; b++) {
            result.push(data[a * step + b])
        }
        results.push(result)
    }
    return results
}

a = [{ b: 1, c: 1 }, { t: 1 }, 6, 5]
console.log(group(a, 2))