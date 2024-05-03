const ComplaintModel = require("../model/complaint.model");

class ComplaintServices{

    static async raiseComplaint(userId,email,image,location,category,description){
        const raiseComplaint = new ComplaintModel({userId,email,image,location,category,description});
        return await raiseComplaint.save();
    }

    static async getComplaintdetails(email){
        const Complaintdetails = await ComplaintModel.find({email});
        return Complaintdetails;
    }

    static async getComplaintCount(email){
      let allComplaintCount = await ComplaintModel.find({email}).countDocuments();
      let completedCount = await ComplaintModel.find().countDocuments({email:email,status: "Completed"});
      let inprocessCount = await ComplaintModel.find().countDocuments({email:email,status:"Inprocess"});
      return [allComplaintCount, completedCount, inprocessCount];
      
    }

    static async getComplaintdetailsAll(){
        const Complaintdetails = await ComplaintModel.find({});
        return Complaintdetails;
    }

    static async getAllComplaintCount(){
      let getAllComplaintCount = await ComplaintModel.find({}).countDocuments();
      let allCompletedCount = await ComplaintModel.find({status:"Completed"}).countDocuments();
      return [getAllComplaintCount,allCompletedCount];
    }

    static async deleteComplaint(id){
        const deleted = await ComplaintModel.findOneAndDelete({_id:id});
        return deleted;
    }

    static async updateComplaintDetails(id, status) {
        const updateDetail = await ComplaintModel.findByIdAndUpdate(
          id,
          { $set: { status: status } },
          { new: true }
        );
        return updateDetail;
      }
      
      static async searchDetails(filter) {
        const searchDetail = await ComplaintModel.find({
            $or: [
              { email: { "$regex": filter, "$options": "i" } },
              { location: { "$regex": filter, "$options": "i" } },
              { "category.0": { "$regex": filter, "$options": "i" } },
              { description: { "$regex": filter, "$options": "i" } }
            ]
          });
        return searchDetail;
      }
      

}

module.exports = ComplaintServices;
