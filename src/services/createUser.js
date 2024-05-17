import axiosInstance from "./axiosInstance";

export async function createUser(userData) {
  try {
    const response = await axiosInstance.post(
      "https://ayo-ayo.onrender.com/api/v1/register",
      userData
    );
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error("Error creating user:", error);
    throw error; // Rethrow the error to handle it in the calling code
  }
}
