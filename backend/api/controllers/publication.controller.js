
const Publication = require("../models/publication.model");

const getAllPublications = async (request, response) => {
  try {
    const allPublications = await Publication.find().populate(
      "createdBy",
      "firstName lastName"
    );
    response.status(200).json({ publications: allPublications });
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

const savePublication = async (request, response) => {
  if (request.body) {
    const newPublication = new Publication(request.body);
    try {
      await newPublication.save();
      response.status(201).json(newPublication);
    } catch (error) {
      response.status(406).json({ message: error.message });
    }
  } else {
    response.status(406).json({ message: "request body is empty" });
  }
};

const getApprovedPublications = async (request, response) => {
  try {
    const allApprovedPublications = await Publication.find({
      isApproved: "approved",
    }).populate("createdBy", "firstName lastName");
    response
      .status(200)
      .json({ approvedPublications: allApprovedPublications });
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

const getRejectedPublications = async (request, response) => {
  try {
    const allRejectedPublications = await Publication.find({
      isApproved: "rejected",
    }).populate("createdBy", "firstName lastName");
    response
      .status(200)
      .json({ rejectedPublications: allRejectedPublications });
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

const getPendingPublications = async (request, response) => {
  try {
    const allPendingPublications = await Publication.find({
      isApproved: "pending",
    }).populate("createdBy", "firstName lastName");
    response.status(200).json({ pendingPublications: allPendingPublications });
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
const getCard = async (request, response) => {
  if (request.params.id) {
    try {
      const foundCard = await Publication.findById(request.params.id);
      response.status(200).json({ card: foundCard });
    } catch (error) {
      response.status(404).json({ message: error.message });
    }
  } else {
    response.status(406).json({ message: "request parameters are empty" });
  }
};

const getPaidPublications = async (request, response) => {
  try {
    const allPaidPublications = await Publication.find({
      isPaid: true,
    }).populate("createdBy", "firstName lastName");
    response.status(200).json({ paidPublications: allPaidPublications });
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

const getUnpaidPublications = async (request, response) => {
  try {
    const allUnpaidPublications = await Publication.find({
      isPaid: false,
    }).populate("createdBy", "firstName lastName");
    response.status(200).json({ unpaidPublications: allUnpaidPublications });
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

const payPublications = async (request, response) => {
  if (request.params.id) {
    try {
      const updatedPublication = await Publication.findByIdAndUpdate(
        request.params.id,
        {
          isPaid: true,
        },
        {
          new: true,
        }
      );
      response.status(200).json(updatedPublication);
    } catch (error) {
      response.status(404).json({ message: error.message });
    }
  } else {
    response.status(406).json({ message: "request parameters are empty" });
  }
};

const approvePublications = async (request, response) => {
  if (request.params.id) {
    try {
      const approvedPublication = await Publication.findByIdAndUpdate(
        request.params.id,
        {
          isApproved: "approved",
        },
        {
          new: true,
        }
      );

      /*const newNotification = new ResearcherNotification({
        title: `Your publication has been approved with topic '${approvedPublication.topic}'`,
        to: approvedPublication.createdBy,
      });
      await newNotification.save();*/
      response.status(200).json(approvedPublication);
    } catch (error) {
      response.status(404).json({ message: error.message });
    }
  } else {
    response.status(406).json({ message: "request parameters are empty" });
  }
};

const rejectPublications = async (request, response) => {
  if (request.params.id) {
    try {
      const rejectedPublication = await Publication.findByIdAndUpdate(
        request.params.id,
        {
          isApproved: "rejected",
        },
        {
          new: true,
        }
      );
      const newNotification = new ResearcherNotification({
        title: `Your publication has been rejected with topic '${rejectedPublication.topic}'`,
        to: rejectedPublication.createdBy,
      });
      await newNotification.save();
      response.status(200).json(rejectedPublication);
    } catch (error) {
      response.status(404).json({ message: error.message });
    }
  } else {
    response.status(406).json({ message: "request parameters are empty" });
  }
};

const getResearcherPublications = async (request, response) => {
  try {
    const researcherPublications = await Publication.find({
      createdBy: request.userId,
    });
    response.status(200).json(researcherPublications);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAllPublications,
  savePublication,
  getApprovedPublications,
  getRejectedPublications,
  getPendingPublications,
  getPaidPublications,
  getUnpaidPublications,
  payPublications,
  approvePublications,
  rejectPublications,
  getResearcherPublications,
  getCard,
};