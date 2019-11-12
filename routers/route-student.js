const student = require("../controllers/controller-student");
module.exports = (app) => {
app.get('/list', student.list);// for list
app.get('/:id', student.find);//for find
app.post('/create', student.create);//post for create body parts only
app.put('/:id', student.update);// put for update
app.delete('/delete', student.delete);// delete for delete operation
};