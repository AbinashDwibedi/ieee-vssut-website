import { Domain } from "../models/domain.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerDomain = async (req, res, next) => {
  try {
    const { fullName, email, phone, regNumber, branch, domain } = req.body;
    const checkAlreadyRegistered = await Domain.findOne({
      $or: [{ email }, { phone }],
    });

    if (checkAlreadyRegistered) {
      return res.json(new ApiResponse(false, null, "Already Registered"));
    }

    const createNewInductionProfile = await Domain.create({
      fullName,
      email,
      phone,
      regNumber,
      branch,
      domain,
    });

    if (!createNewInductionProfile) {
      return res.json(new ApiResponse(false, null, "Try again"));
    }

    res.json(new ApiResponse(true, null, "Registered successfully"));
  } catch (error) {
    next(error);
  }
};

const retrieveCompetitorsData = async (req, res, next) => {
  try {
    const allCompetitorsInfo = await Domain.find();
    res.json(new ApiResponse(true, allCompetitorsInfo, "Data retrieved successfully"));
  } catch (error) {
    next(error);
  }
};

export {registerDomain};
