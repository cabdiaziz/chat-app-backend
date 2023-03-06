export const saveMessageService = async (
  { createNewMsg, findMessageRoom, updateMessages, apiErrorHandler },
  { data }
) => {
  try {
    if (!data.message || !data.room || !data.user)
      return apiErrorHandler(400, "Not allowed empty data.");

    const oldMessages = await findMessageRoom(data.room, data.user);
    if (oldMessages.length > 0) {
      const msgUpdate = await updateMessages(
        data.room,
        data.user,
        data.message
      );
      return msgUpdate;
    } else {
      const newMsg = await createNewMsg(data);
      return newMsg;
    }
  } catch (err) {
    console.log("Err=", err.message);
    return apiErrorHandler(400, err.message);
  }
};

export const getAllMsgService = async ({ findAllMessages }, { userId }) => {
  try {
    const allMessages = await findAllMessages(userId);
    return allMessages;
  } catch (err) {
    return err.message;
  }
};
