const button = document.querySelector("button");
const input = document.querySelector("input");

const answers = [
    "🐚 혼자라면 바꾸기 어려울지도 몰라. 하지만 함께 목소리를 낸다면 달라질 수 있어!",
    
    "✨ 소라고둥의 답은 아직 정해지지 않았어. 우리가 함께 답을 만들어가는 거야.",
    
    "🌊 학교생활에서 겪는 불편함, 너만의 이야기일까요? 비슷한 경험을 한 학우들의 이야기도 모아보고 있어요.",
    
    "🐚 교육공동행동에서는 학우들의 목소리를 모아 우리가 원하는 변화를 함께 요구하고 있어.",
    
    "💫 하나의 목소리는 작아 보여도, 같은 목소리가 모이면 학교를 움직이는 힘이 될 수 있어.",
    
    "🔮 우리의 요구가 정말 이루어질 수 있을까? 그 답을 확인하기 위해 함께 목소리를 모아보자.",
    
    "🐚 네가 겪은 불편함도 중요한 이야기야. 지금 너의 경험을 들려줘!",
    
    "✨ 많은 학우들의 이야기가 모이면 '나만의 문제'가 아니라 '우리의 문제'라는 걸 확인할 수 있어.",
    
    "🌙 소라고동이 대신 답을 정해줄 수는 없어. 우리가 함께 목소리를 내야 답이 바뀔 수 있으니까.",
    
    "🐚 이제 소라고동에게만 묻지 말고, 우리 함께 답을 만들어보자!"
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
