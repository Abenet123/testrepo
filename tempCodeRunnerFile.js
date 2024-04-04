if(req.url == '/'){
    res.write('this is a home page');
    res.end();
} else if(req.url == '/about'){
    res.write('this is about page');
    res.end();
} else if(req.url == '/contact'){
    res.write('this is contact section');
    res.end();
} else{
    res.write(`
        <h1> Oops!! </h1>
        <p> sorry we cannot find the page.</p>
    `);
    res.end();
}