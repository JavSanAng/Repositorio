const express = require('express')

// middleware that is specific to this router
function hourMiddleware (req, res, next){
    req.timeLog = new Date();
    next()
}

module.exports = hourMiddleware