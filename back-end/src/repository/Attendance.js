// crating a link to call the add funtion

export const markAttendance = async(req,res)=>{  // crating a arrow funtion to add attendance to the data base
    const empID = req.body.empID;
    const Date = req.body.Date;
    const Time = req.body.Time;

    const newAttendance = new Attendance({
        empID,
        Date,
        Time
    })

    newAttendance.save().then(()=>{  // passing data to the database if sucsess execute the following    
        res.json("Attendance has been recorded")  // sending a responce on jeson format to the frunt end
    }).catch((err)=>{
        console.log(err); //printing the error on the log
    })
}