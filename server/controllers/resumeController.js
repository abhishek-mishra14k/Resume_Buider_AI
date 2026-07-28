import Resume from "../models/Resume.js";

// Create Resume
export const createResume = async (req, res) => {
    try {
        const resume = await Resume.create({
            ...req.body,
            user: req.user.id,
        });

        res.status(201).json({
            success: true,
            message: "Resume Created Successfully",
            resume,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

// Get Resume by ID

export const getResumeById = async (req, res) => {
    try {
        const resume = await Resume.findById(req.params.id);

        if (!resume) {
            return res.status(404).json({
                success: false,
                message: "Resume not found",
            });
        }

        // Ensure users can only access their own resumes
        if (resume.user.toString() !== req.user.id) {
            return res.status(403).json({
                success: false,
                message: "Unauthorized",
            });
        }

        res.status(200).json({
            success: true,
            resume,
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

//update Resume

export const updateResume = async (req, res) => {
    try {
        const resume = await Resume.findById(req.params.id);

        if (!resume) {
            return res.status(404).json({
                success: false,
                message: "Resume not found",
            });
        }

        // Check ownership
        if (resume.user.toString() !== req.user.id) {
            return res.status(403).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const updatedResume = await Resume.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        res.status(200).json({
            success: true,
            message: "Resume Updated Successfully",
            resume: updatedResume,
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

// Delete Resume
export const deleteResume = async (req, res) => {
    try {
        const resume = await Resume.findById(req.params.id);

        if (!resume) {
            return res.status(404).json({
                success: false,
                message: "Resume not found",
            });
        }

        // Check ownership
        if (resume.user.toString() !== req.user.id) {
            return res.status(403).json({
                success: false,
                message: "Unauthorized",
            });
        }

        await Resume.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "Resume Deleted Successfully",
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

// Get All Resumes
export const getUserResumes = async (req, res) => {
    try {
        const resumes = await Resume.find({
            user: req.user.id,
        });

        res.status(200).json({
            success: true,
            count: resumes.length,
            resumes,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};