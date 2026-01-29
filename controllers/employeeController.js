const employee = require ('../models/employees')

const getAllEmployees = async (req,res,next)=>{
    try {
        const allEmployees = await employee.find();
        res.status(200).json(allEmployees)
    } catch (error) {
        console.log(error.message);
    }
}

const searchEmployeesByName = async (req, res, next) => {
  const search = req.query.name;  // get from query

  if (!search) {
    return res.status(400).json({ message: 'Please provide a name to search' });
  }

  try {
    const employees = await employee.find({
      names: { $regex: search, $options: 'i' }  // matches your schema
    });

    if (employees.length === 0) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    return res.status(200).json(employees);

  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Server error' });
  }
};

const addEmployee = async (req,res, next)=>{
    try {
        const newEmployee = req.body;
        await employee.create(newEmployee);
        res.status(201).json({message:'employee added successfully'})
    } catch (error) {
        console.log(error.message)
        
    }
}

const addMannyEmployees = async (req,res)=>{
  const newEmployees = req.body;
  try {
    await employee.insertMany(newEmployees);
    res.status(201).json({Message:"Employees added successfully"})
  } catch (error) {
    console.log(error.message)
  }
}

const deleteEmployee = async (req,res)=>{
  const names = req.params.names;
  if(!names){
    return  res.status(400).json({Message:"you should add a name please"})
  }
  try {
    const employe = await employee.findOne({names:names}); 
    if(!employe){
      return res.status(404).json({Message:"Employee not found"});
    }
  
    await employee.deleteOne({names:names});
    res.status(200).json({Message:"Employee deleted from the database successfully"})
    
  } catch (error) {
    console.log(error)
    
  }
}
module.exports = {
    getAllEmployees,
    searchEmployeesByName,
    addEmployee,
    addMannyEmployees,
    deleteEmployee
}

