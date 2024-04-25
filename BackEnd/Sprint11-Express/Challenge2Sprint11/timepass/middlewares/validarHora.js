const timeLog = require("./horaMiddleware");

function validationTime (req, res, next){
    if(timeLog >= 12 && timeLog < 24){
        next()
    } else {
        return res.redirect('/?mensaje=' + encodeURIComponent("Aún no es la hora, espera hasta las 14:00 para entrar"));
    }
}


module.exports = validationTime;


