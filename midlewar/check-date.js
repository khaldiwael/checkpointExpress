const  permetion = (req,res,next) => {
    const time =new  Date()
    isAuthorized = false
    let weekday = time.getDay()
    // console.log('check date'+ weekday)
    if(weekday > 0 && weekday<7){
        // console.log('if weekday')
        if (time.getHours()> 9 && (time.getHours()< 17)) {
            isAuthorized = true
        }else {isAuthorized = false}
    }else{
        // console.log('if weekday false')
        isAuthorized = false
    }
    isAuthorized? next():res.status(401).send('you are not authorized')
}

//|| (time.getHours() == 17 && time.getMinutes() < 60)

module.exports = permetion

