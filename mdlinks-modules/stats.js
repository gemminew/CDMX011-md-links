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

  const stats = (data) => {
      let statsArray = [];
      const total = data.length; 
      const unique = new Set();
      data.forEach(link => {
        unique.add(link.url)
      })
        const broken = []
        let links = unique.map(elem => {
            if (elem.status == 404){
                broken.push(elem.status)
            }
            return elem.link
        })        
        statsArray.push({
            'Total': total,
            'Unique': unique.size,
            'Broken': broken.length
        })
        return statsArray
    }

exports.getStats = getStats;
exports.stats = stats;