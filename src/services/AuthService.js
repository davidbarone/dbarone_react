import decode from "jwt-decode";

// rewrite localStorage.setItem function, adding
// custom event so that we can listen to changes
// in other components.
// The storage event only works in different
// windows.
// Ideally, we should put .User into Redux
var originalSetItem = localStorage.setItem;
localStorage.setItem = function(key, value) {
  originalSetItem.apply(this, arguments);
  var event = new Event("localStorageChanged");
  event.value = value; // Optional..
  event.key = key; // Optional..
  window.dispatchEvent(event);
};

// Same for .removeItem
var originalRemoveItem = localStorage.removeItem;
localStorage.removeItem = function(key) {
  originalRemoveItem.apply(this, arguments);
  var event = new Event("localStorageChanged");
  event.key = key; // Optional..
  window.dispatchEvent(event);
};

function getToken() {
  // Retrieves the user token from localStorage
  const t = localStorage.getItem("token");
  return t;
}

function setToken(token) {
  // Saves token to localStorage
  localStorage.setItem("token", token);
}

function getUser() {
  const token = getToken();
  const user = token && decode(token);
  return user;
}

function loggedIn() {
  // Checks if there is a saved token and it's still valid
  const token = getToken(); // GEtting token from localstorage
  return !!token && !isTokenExpired(token); // handwaiving here
}

function isTokenExpired(token) {
  try {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      // Checking if token is expired. N
      return true;
    } else return false;
  } catch (err) {
    return false;
  }
}

async function login(email, password) {
  const body = {
    email,
    password
  };

  fetch("https://api.dbarone.com/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then(res => {
      const token = res.headers.get("x-access-token");
      setToken(token);
    })
    .catch(err => {
      throw new Error(err);
    });
}

function logout() {
  localStorage.removeItem("token");
}

export default {
  login,
  logout,
  getUser,
  getToken,
  loggedIn
};