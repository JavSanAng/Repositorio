const timeLog = require("./horaMiddleware");

function validationTime (req, res, next){
    const hour = req.timeLog.getHours() ;
    if(hour >= 12 && hour < 24){
        next()
    } else {
        res.locals.mensaje = `Aún no es la hora, espera hasta las 12:00 para entrar`
        return res.redirect('/?mensaje=' + encodeURIComponent("Aún no es la hora, espera hasta las 14:00 para entrar"));
    }
}


module.exports = validationTime;


