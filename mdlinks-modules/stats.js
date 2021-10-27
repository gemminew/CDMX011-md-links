const getStats = async (filterLinks) => {
    let statistics = { unique: 0, broken: 0, total: 0, working: 0 };
      await Promise.all(filterLinks).then(arr => {
          arr.forEach(y => {
              if(y.status != 200)
                statistics.broken++;
          });
          const unique = new Set();
          arr.forEach(link => {
              unique.add(link.url)
          });
          statistics.unique = unique.size;
          statistics.total = arr.length;
          statistics.working = statistics.total - statistics.broken;
      });
      return new Promise((resolve, reject) => resolve([statistics]));
    };
    // return new Promise((resolve, reject) => {
    //   resolve(
    //     filterLinks.forEach(filteredLink => {
    //         filteredLink.then((data) => {
    //           return stats(data);
    //         })
    //       reject(
    //         filteredLink.catch((err) => {
    //         console.error(err);
    //         })
    //       );

    //     })
    //   )
    // });

  const stats = (data) => {
      let statsArray = [];
      const total = data.length; 
      const unique = new Set();
      data.forEach(link => {
        unique.add(link.url)
      })
/*       data.forEach((link) => {
          new Set(unique).add(link)
        })
        for (let i = 0; i < data.length; i++){
            for (let j = i+1; j < data.length; j++){
                if (data[i] != data[i+1]){
                    unique.push(data[i])
                }
            }  
        } */
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