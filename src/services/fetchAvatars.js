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

export async function updateAvatar(avatarId, userId) {
  try {
    const response = await fetch(
      `https://ayo-ayo.onrender.com/api/v1/users/${userId}/avatars/${avatarId}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle errors here
    console.error("Error getting avatar :", error);
    throw error; // Rethrow the error to handle it in the calling code
  }
}

export async function retrieveUser(userId) {
  try {
    const response = await fetch(
      `https://ayo-ayo.onrender.com/api/v1/users/${userId}`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    // Handle errors here
    console.error("Error getting user :", error);
    throw error; // Rethrow the error to handle it in the calling code
  }
}
