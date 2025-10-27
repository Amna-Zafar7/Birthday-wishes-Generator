
let wish = [
   "🎂 May your birthday be filled with love, laughter, and unforgettable memories!",
  "🌸 Wishing you endless happiness and success in the coming year!",
  "🌟 Shine bright like the star you are — today is your special day!",
  "🎁 Hope your birthday is as amazing as you are!",
  "💖 May all your dreams come true and your heart always be full of joy!",
  "🎉 Keep smiling — it’s your birthday, and you deserve the best!",
  "🍰 Enjoy every bite, every laugh, and every hug today!",
  "🌷 Another year older, wiser, and more fabulous than ever!",
  "🌞 May your day sparkle with moments of love and happiness!",
  "🎈 Sending you sunshine, smiles, and sweet surprises today!",
  "🦋 May this birthday be just the beginning of a year full of blessings!",
  "🌹 You make the world brighter just by being in it — happy birthday!",
  "🎀 Celebrate big — you only get one special day each year!",
  "💫 Wishing you peace, health, and pure joy all year long!",
  "🌼 You deserve nothing but happiness today and always!",
  "🎊 May your heart be light, your smile be wide, and your cake be huge!",
  "🌻 Be proud of how far you’ve come and excited for what’s next!",
  "🍬 Hope your day is filled with sweet moments and laughter!",
  "💐 May every candle on your cake be a wish come true!",
  "🎇 You’re not getting older — just becoming more legendary!"
];

// Function to show random wish
function showWish() {
  
  let value = Math.floor(Math.random() * wish.length);
  document.getElementById("output").innerText = wish[value];
}
