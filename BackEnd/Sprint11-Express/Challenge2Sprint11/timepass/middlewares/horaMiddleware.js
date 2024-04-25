const express = require('express')

// middleware that is specific to this router
function timeLog (req, res, next) {
    req.timeLog = new Date().getHours();
    next()
}

module.exports = timeLog