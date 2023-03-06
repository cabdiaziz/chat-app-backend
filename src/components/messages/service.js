export const saveMessageService = async (
  { createNewMsg, findMessageRoom, updateMessages, apiErrorHandler },
  { data }
) => {
  try {
    if (!data.message || !data.room || !data.user)
      return apiErrorHandler(400, "Not allowed empty data.");

    const oldMessages = await findMessageRoom(data.room, data.user);
    if (oldMessages.length > 0) {
      // const newMessage = { message: data.message };
      const msgUpdate = await updateMessages(
        data.room,
        data.user,
        data.message
      );

      console.log("after-Update =", msgUpdate);
      return msgUpdate;
    } else {
      const newMsg = await createNewMsg(data);
      console.log("new-msg=", newMsg);
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
