const mongoose = require('mongoose');
const url='mongodb+srv://newuser:12345@cluster0.xk3sw.mongodb.net/EmployeeDB?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true,useUnifiedTopology:true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');