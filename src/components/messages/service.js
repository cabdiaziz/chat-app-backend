export const saveMessageService = async (
  { createNewMsg, findUserByEmail, apiErrorHandler },
  { data }
) => {
  try {
    if (!data.message || !data.room || !data.email)
      return apiErrorHandler(400, "Not allowed empty data.");

    const user = await findUserByEmail(data.email);
    data.user = user._id;

    const newMsg = await createNewMsg(data);
    const { message, room, email } = newMsg;
    return { message, room, email };
  } catch (err) {
    return err.message;
  }
};

export const getAllMsgService = async ({ findAllMessages }, { email }) => {
  try {
    const allMessages = await findAllMessages(email);
    return allMessages;
  } catch (err) {
    return err.message;
  }
};
