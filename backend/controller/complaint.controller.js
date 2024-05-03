const ComplaintServices = require("../services/complaint.services");

exports.raiseComplaint = async (req,res,next) =>{
    try{
        const {userId,email,image,location,category,description} = req.body;

        let complaint = await ComplaintServices.raiseComplaint(userId,email,image,location,category,description);

        res.json({status:true, success:complaint});
    }
    catch(error){
        next(error);
    }
}

exports.getComplaintDetails = async (req,res,next) =>{
    try{
        const {email} = req.body;

        let complaint = await ComplaintServices.getComplaintdetails(email);

        let allcounts = await ComplaintServices.getComplaintCount(email);

        res.json({status:true,count : allcounts, success:complaint});
    }
    catch(error){
        next(error);
    }
}

exports.getComplaintDetailsAll = async (req,res,next) =>{
    try{
        let complaint = await ComplaintServices.getComplaintdetailsAll();

        res.json({status:true, success:complaint});
    }
    catch(error){
        next(error);
    }
}

exports.getAllComplaintCount= async (req,res,next) => {
    try{
        let count = await ComplaintServices.getAllComplaintCount();

        res.json({status:true, success:count});
    }
    catch(error){
        next(error);
    }
}

exports.deleteComplaint = async (req,res,next) =>{
    try{
        const {id} = req.body;

        let deleted = await ComplaintServices.deleteComplaint(id);

        res.json({status:true, success:deleted});
    }
    catch(error){
        next(error);
    }
}

exports.updateComplaintDetails = async (req,res,next) =>{
    try{
        const {id,status} = req.body;

        let update = await ComplaintServices.updateComplaintDetails(id,status);

        res.json({status:true, success:update});
    }
    catch(error){
        next(error);
    }
}

exports.searchDetails = async (req,res,next) =>{
    try{
        const filter = req.query.filter || "";

        const complaint=await ComplaintServices.searchDetails(filter);

        res.json({status:true, success:complaint});
    }
    catch(error){
        next(error);
    }
}
