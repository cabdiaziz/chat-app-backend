export const loginUserService = async (
  { findUserByEmail, apiErrorHandler },
  { email }
) => {
  try {
    const user = await findUserByEmail(email);
    if (user) return user;
    return apiErrorHandler(401, "Unauthorized");
  } catch (err) {
    return err.message;
  }
};

export const createUserService = async (
  { findUserByEmail, createNewUser, apiErrorHandler },
  { uid, name, email }
) => {
  try {
    if (!uid || !name || !email)
      return apiErrorHandler(400, "Not allowed empty data.");

    const user = await findUserByEmail(email);
    if (user) return apiErrorHandler(400, "User already exists.");

    const newUser = await createNewUser({ uid, name, email });
    return newUser;
  } catch (err) {
    return err.message;
  }
};
