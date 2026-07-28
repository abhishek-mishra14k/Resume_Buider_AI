export const getProfile = async (req, res) => {
  res.json({
    success: true,
    message: "Protected Route Accessed",
    user: req.user,
  });
};
