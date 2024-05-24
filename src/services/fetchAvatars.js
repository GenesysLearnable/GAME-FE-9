import axiosInstance from "./axiosInstance";

export async function getAvatars(userData) {
  try {
    const response = await axiosInstance.get(
      "https://ayo-ayo.onrender.com/api/v1/avatar-list",
      userData
    );
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error("Error getting avatars :", error);
    throw error; // Rethrow the error to handle it in the calling code
  }
}
