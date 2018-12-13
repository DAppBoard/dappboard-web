HELPERS = {

  normalizeTimeSerie : function(startDate, endDate, obj) {
    var results = {};
    for (var key in obj[0]) {
      if (obj[0].hasOwnProperty(key)) {
        results[key] = [key];
      }
    }
    var i = 0;
    while (i < obj.length && moment(startDate).format("YYYY-MM-DD") > moment(obj[i].day).format("YYYY-MM-DD")) {
      i++;
    }
    for (var m = moment(startDate); m.diff(endDate, 'days') <= 0; m.add(1, 'days')) {
      if (i < obj.length && moment(m).format("YYYY-MM-DD") == moment(obj[i].day).format("YYYY-MM-DD"))
      {
        for (var key in obj[i]) {
          if (obj[i].hasOwnProperty(key)) {
            if (key == 'day') {
              results[key].push(m.format("YYYY-MM-DD"))
            } else {
            //  console.log(obj[i])
              results[key].push(obj[i][key])
            }
          }
        }
        i++;

      } else {
        for (var key in obj[0]) {
          if (obj[0].hasOwnProperty(key)) {
            if (key == 'day') {
              results[key].push(m.format("YYYY-MM-DD"))
            } else {
            //  console.log(obj[i])
              results[key].push(0)
            }
          }
        }
      }

    }
    return (results);
  },

}
