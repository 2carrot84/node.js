;(() => { // IIFE
  const socket = new WebSocket(`ws://${window.location.host}/ws`);
  const formEl = document.getElementById("form");
  /** @type {HTMLElement | null} */
  const inputEl = document.getElementById("input");
  const chatsEl = document.getElementById("chats");

  if (!formEl || !inputEl || !chatsEl) {
    throw new Error("Init Failed!");
  }

  /**
   * @typedef Chat
   * @property { string } message
   * @property { string } nickname
   */

  /**
   * @type {Chat[]}
   */
  const chats = [];

  const adjectives = ["멋진", "훌륭한", "친절한", "새침함"];
  const animals = ["물범", "사자", "사슴", "돌고래", "독수리"];

  function pickRandom(array) {
    const randomIdx = Math.floor(Math.random() * array.length);
    return array[randomIdx];
  }

  const myNickname = `${pickRandom(adjectives)} ${pickRandom(animals)} `;

  formEl.addEventListener("submit", (event) => {
    event.preventDefault();  // form submit 막기
    socket.send(JSON.stringify({
      nickName: myNickname,
      message: inputEl.value
    }));
    inputEl.value = "";
  });

  /*socket.addEventListener('open', () => {
    socket.send("Hello, server!")
  })*/

  socket.addEventListener("message", (event) => {
    chats.push(JSON.parse(event.data));
    chatsEl.innerHTML = "";

    chats.forEach(({ message, nickName }) => {
      const div = document.createElement("div");
      div.innerText = `${nickName}: ${message}`;
      chatsEl.appendChild(div);
    });

  });
})();
