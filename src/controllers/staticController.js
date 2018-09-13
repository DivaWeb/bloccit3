module.exports = {
  index(re, res, next){
    res.render("static/index", {title: "Welcome to Bloccit"});
  }
}
