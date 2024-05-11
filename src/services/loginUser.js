import axiosInstance from "./axiosInstance";

export async function loginUser(userData) {
  try {
    const response = await axiosInstance.post(
      "https://ayo-ayo.onrender.com/api/v1/login",
      userData
    );
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error("Error fetching user:", error);
    throw error; // Rethrow the error to handle it in the calling code
  }
}
