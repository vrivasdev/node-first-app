
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Finished after 1.5s');
        }, 1500);
    });
    return promise;
}

setTimeout(() => {
    console.log('Done after 2s!')

    fetchData().then(text => {
        console.log(text)
        return fetchData();
    }).then(text2 => {
        console.log(text2);
    })
}, 2000);