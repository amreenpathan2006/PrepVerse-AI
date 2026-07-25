export const getSavedProfile = () => {
    const savedProfile = localStorage.getItem("prepverse_profile");

    if (!savedProfile) {
        return null;
    }

    return JSON.parse(savedProfile);
};

export const saveProfile = (profileData) => {
    localStorage.setItem(
        "prepverse_profile",
        JSON.stringify(profileData)
    );
};
export const hasSavedProfile = () => {
    return localStorage.getItem("prepverse_profile") !== null;
};