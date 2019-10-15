module.exports = function (app) {
    app.get("/", (req,res) =>{
        console.log('hello');
        res.render("index");
    });
}