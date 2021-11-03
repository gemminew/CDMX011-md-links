const getStats = async (filterLinks) => {
    let statistics = {};
      await Promise.all(filterLinks).then(arr => {
/*           arr.forEach(y => {
              if(y.status != 200)
                statistics.broken++;
          }); */
          const unique = new Set();
          arr.forEach(link => {
              unique.add(link.url)
          });
          //statistics.push({'Total': arr.length, 'Unique': unique.size})
          statistics.Total = arr.length; 
          statistics.Unique = unique.size;    
          //statistics.working = statistics.total - statistics.broken;
      });
      return new Promise((resolve, reject) => resolve([statistics]));
    };

  const stats = async (vdata) => {
    let statsArray = [];
    await Promise.all(vdata).then(data => {
      const total = data.length; 
      const unique = new Set();
      const broken = []
      let setSize = unique.size;
      data.forEach((link) => {
        unique.add(link.url);
        if(unique.size > setSize) {
          if(link.status > 299) {
            broken.push(link);
          }
        }
        setSize = unique.size;
      });
        statsArray.push({
            'Total': total,
            'Unique': unique.size,
            'Broken': broken.length
        })
        return statsArray

    }).catch(err => console.error(err));
    return new Promise((resolve, reject) => resolve(statsArray));
  }

exports.getStats = getStats;
exports.stats = stats;