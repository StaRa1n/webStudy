var findItinerary = function (tickets) {
    const path = ['JFK'], res = [], map = []

    function backstraking(start) {
        if (path.length === tickets.length + 1) {
            for (let i = 0; i < path.length; i++) {
                if (res.length === 0 || path[i] < res[i]) {
                    res.splice(0, res.length)
                    res.push(...path)
                    break
                }
            }
            return
        }

        for (let i = 0; i < tickets.length; i++) {
            let curtik = tickets[i]
            if (curtik[0] === start && !map[i]) {
                path.push(curtik[1])
                map[i] = true
                backstraking(curtik[1])
                path.pop()
                map[i] = false
            }
        }
    }
    backstraking(path[0])
    return res
};

const tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
console.log(findItinerary(tickets))