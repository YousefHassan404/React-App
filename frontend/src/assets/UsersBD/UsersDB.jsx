const usersDB = [
  {
    id: 1,
    username: "Vini Jr",
    password: "203040",
    email: "vinJR@gmail.com",
    profilePicture: "https://example.com/path/to/profile-picture.jpg",
    coursesEnrolled: [1, 3],
    isInstructor: false,
  },
  {
    id: 2,
    username: "JaneDoe",
    password: "123456",
    email: "janedoe@example.com",
    profilePicture: "https://example.com/path/to/jane-profile.jpg",
    coursesEnrolled: [2],
    isInstructor: true,
  },
];

// Load usersDB from localStorage
export const loadUsersDB = () => {
  const storedUsersDB = localStorage.getItem("usersDB");
  return storedUsersDB ? JSON.parse(storedUsersDB) : usersDB;
};

// Save usersDB to localStorage
export const saveUsersDB = (usersDB) => {
  localStorage.setItem("usersDB", JSON.stringify(usersDB));
};

export default usersDB;
