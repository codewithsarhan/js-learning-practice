// Js Comparison Operator Mini Challenge

// User "A" Cart Details

let userA = {
  cartTotal: 8000,
  isPremiumMember: true,
  userAge: 17,
};

if (userA.cartTotal >= 10000) {
  console.log("You Get 50% Discount");
} else if (userA.userAge >= 18) {
  console.log("You Are Elegible");
} else if (userA.isPremiumMember === true) {
  console.log("You Are Premium Member");
} else if (userA.cartTotal >= 10000 || userA.isPremiumMember === true) {
  console.log("You Get Free Shipping All Items");
} else {
  console.log("You Are No Elegible !!!");
}

// User "B" Cart Details

let userB = {
  cartTotal: 12000,
  isPremiumMember: true,
  userAge: 22,
};

if (userB.cartTotal >= 10000) {
  console.log("You Get 50% Discount");
} else if (userB.userAge >= 18) {
  console.log("You Are Elegible");
} else if (userB.isPremiumMember === true) {
  console.log("You Are Premium Member");
} else if (userB.cartTotal >= 10000 || userB.isPremiumMember === true) {
  console.log("You Get Free Shipping All Items");
} else {
  console.log("You Are No Elegible !!!");
}

// User "C" Cart Details

let userC = {
  cartTotal: 10000,
  isPremiumMember: false,
  userAge: 18,
};

if (userC.cartTotal >= 10000) {
  console.log("You Get 50% Discount");
} else if (userC.userAge >= 18) {
  console.log("You Are Elegible");
} else if (userC.isPremiumMember === true) {
  console.log("You Are Premium Member");
} else if (userC.cartTotal >= 10000 || userC.isPremiumMember === true) {
  console.log("You Get Free Shipping All Items");
} else {
  console.log("You Are No Elegible !!!");
}
