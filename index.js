// Pre-installed user data
const userData = {
  users: [{ name: "Victor John", bankName: "UBA", balance: 1000 }],
  currentUserIndex: 0,
};
const userData = {
  users: [{ name: "Progress Smith", bankName: "Access Bank", balance: 500 }],
  currentUserIndex: 0,
};

const userData = {
  users: [{ name: "David Johnson", bankName: "First Bank", balance: 750 }],
  currentUserIndex: 0,
};
const userData = {
  users: [{ name: "Weli Chisom", bankName: "UBA", balance: 1200 }],
  currentUserIndex: 0,
};

function verifyData() {
  const currentUser = userData.users[userData.currentUserIndex];
  alert(
    `Name: ${currentUser.name}\nBank: ${currentUser.bankName}\nBalance: $${currentUser.balance}`
  );
}

function sendMoney() {
  const amountInput = document.getElementById("text-input").value;
  const amount = parseFloat(amountInput);
  const currentUser = userData.users[userData.currentUserIndex];

  if (!isNaN(amount) && amount > 0 && amount <= currentUser.balance) {
    currentUser.balance -= amount;
    alert(`You have sent $${amount}.`);
  } else {
    alert("Invalid amount. Please enter a valid number.");
  }

  document.getElementById("text-input").value = "";
}
