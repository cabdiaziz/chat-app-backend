export const getRoomsService = async ({ findAllRooms }) => {
  try {
    const allRooms = await findAllRooms();
    return allRooms;
  } catch (err) {
    return err.message;
  }
};

export const newRoomService = async (
  { createNewRoom, apiErrorHandler },
  { name }
) => {
  try {
    if (!name) return apiErrorHandler(400, "Empty data is not allowed");
    const newRoom = await createNewRoom({ name });
    return newRoom;
  } catch (err) {
    return err.message;
  }
};
