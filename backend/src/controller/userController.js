var Person = require("../model/userModel");


const PostRegisterdraft = async (req, res) => {
    try {

        const { rel_man_name, name, email, address, dob, phone, pan, adhar, status } = req.body;
        console.log(status);

        if (!name || !email) {
            return res.status(200).send("Plz Fill The all fields ");
        }





        let user = await Person.create({ rel_man_name, name, email, address, dob, phone, pan, adhar, status })

        res.status(201).json({
            success: true,
            user,

        })




    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            status: "failed",
            message: "internal server error",
        })
    }
}

const getAllData = async (req, res) => {
    try {

        const data = await Person.find({});

        res.status(200).json({
            code: 200,
            status: "success",
            message: "Data fetched successfully",
            data: data
        })

    } catch (error) {
        res.status(500).json({
            code: 500,
            status: "failed",
            message: "internal server error",
        })
    }
}







const getUserData = async (req, res) => {
    try {

        const { id } = req.params;

        const user = await Person.findById(id);

        res.status(200).json({
            code: 200,
            status: "success",
            message: "Data fetched successfully",
            data: user
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            status: "failed",
            message: "internal server error",
        })
    }
}





const getapprovedData = async (req, res) => {
    try {


        const user = await Person.find({ 'status': "approved" });

        res.status(200).json({
            code: 200,
            status: "success",
            message: "Data fetched successfully",
            data: user
        })

    } catch (error) {
        res.status(500).json({
            code: 500,
            status: "failed",
            message: "internal server error",
        })
    }
}



const getdeniedData = async (req, res) => {
    try {


        const user = await Person.find({ 'status': "denied" });

        res.status(200).json({
            code: 200,
            status: "success",
            message: "Data fetched successfully",
            data: user
        })

    } catch (error) {
        res.status(500).json({
            code: 500,
            status: "failed",
            message: "internal server error",
        })
    }
}


const getdraftData = async (req, res) => {
    try {


        const user = await Person.find({ 'status': "draft" });

        res.status(200).json({
            code: 200,
            status: "success",
            message: "Data fetched successfully",
            data: user
        })

    } catch (error) {
        res.status(500).json({
            code: 500,
            status: "failed",
            message: "internal server error",
        })
    }
}

const getsubmittedData = async (req, res) => {
    try {


        const user = await Person.find({ 'status': "submit" });

        res.status(200).json({
            code: 200,
            status: "success",
            message: "Data fetched successfully",
            data: user
        })

    } catch (error) {
        res.status(500).json({
            code: 500,
            status: "failed",
            message: "internal server error",
        })
    }
}






const updateStatus = async (req, res) => {
    try {

        const { id } = req.params;
        const { status, product } = req.body;
        console.log(req.body);
        var temp = [];
        temp = req.body;
        console.log(temp);

        const user = await Person.findById(id);

        if (!user) {
            res.status(404).json({
                code: 404,
                status: "failure",
                message: "user not found"
            })
        }

        const updateduser = {
            _id: id,
            products: temp
        }

        console.log(updateduser);
        console.log(req.body);
        await Person.updateOne({ _id: id }, { $set: updateduser }, { new: true });

        res.status(200).json({
            code: 200,
            status: "success",
            message: "Data updated successfully",
            data: updateduser
        })

    } catch (error) {
        res.status(500).json({
            code: 500,
            status: "failed",
            message: "internal server error",
        })
    }
}

const denieStatus = async (req, res) => {
    try {

        const { id } = req.params;


        const user = await Person.findById(id);

        if (!user) {
            res.status(404).json({
                code: 404,
                status: "failure",
                message: "user not found"
            })
        }

        const updateduser = {
            _id: id,
            status: "denied"
        }

        await Person.updateOne({ _id: id }, { $set: updateduser }, { new: true });

        res.status(200).json({
            code: 200,
            status: "success",
            message: "Data updated successfully",
            data: updateduser
        })

    } catch (error) {
        res.status(500).json({
            code: 500,
            status: "failed",
            message: "internal server error",
        })
    }
}

const submitStatus = async (req, res) => {
    try {

        const { id } = req.params;


        const user = await Person.findById(id);

        if (!user) {
            res.status(404).json({
                code: 404,
                status: "failure",
                message: "data not found"
            })
        }

        const updateduser = {
            _id: id,
            status: "submitted"
        }

        await Person.updateOne({ _id: id }, { $set: updateduser }, { new: true });

        res.status(200).json({
            code: 200,
            status: "success",
            message: "data updated successfully",
            data: updateduser
        })

    } catch (error) {
        res.status(500).json({
            code: 500,
            status: "failed",
            message: "internal server error",
        })
    }
}

const approveStatus = async (req, res) => {
    try {

        const { id } = req.params;


        const user = await Person.findById(id);

        if (!user) {
            res.status(404).json({
                code: 404,
                status: "failure",
                message: "data not found"
            })
        }

        const updateduser = {
            _id: id,
            status: "approved"
        }

        await Person.updateOne({ _id: id }, { $set: updateduser }, { new: true });

        res.status(200).json({
            code: 200,
            status: "success",
            message: "data updated successfully",
            data: updateduser
        })

    } catch (error) {
        res.status(500).json({
            code: 500,
            status: "failed",
            message: "internal server error",
        })
    }
}

module.exports = {
    PostRegisterdraft,
    getAllData,
    submitStatus,
    getUserData,
    getapprovedData,
    getdeniedData,
    getdraftData,
    getsubmittedData,

    updateStatus,
    approveStatus,
    denieStatus
};
