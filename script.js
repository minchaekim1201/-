const button = document.querySelector("button");
const input = document.querySelector("input");

const answers = [
    "✨ 그래. 해봐!",
    "🐚 소라고둥은 YES라고 말하고 있어.",
    "🌊 조금 더 기다려보는 게 좋겠어.",
    "💫 지금이 바로 기회야!",
    "🐚 음... 소라고둥은 NO라고 하네.",
    "✨ 네 마음이 이미 답을 알고 있는 것 같아.",
    "🌙 오늘은 쉬어가는 것도 나쁘지 않아.",
    "🐚 운명에 맡겨봐!",
    "💙 걱정하지 마. 잘 될 거야.",
    "🔮 다시 한 번 생각해봐."
];

function goToAnswer() {
    if (input.value.trim() === "") {
        alert("🐚 먼저 질문을 입력해줘!");
        return;
    }

    const randomIndex = Math.floor(Math.random() * answers.length);

    localStorage.setItem("question", input.value);
    localStorage.setItem("answer", answers[randomIndex]);

    window.location.href = "answer.html";
}