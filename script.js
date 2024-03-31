function checkAnswer(questionNumber) {
    var answerId = "answer" + questionNumber;
    var answerElement = document.getElementById(answerId);

    var userAnswer = prompt("请输入答案：");
    userAnswer = userAnswer.trim();

    var correctAnswer = answerElement.textContent.trim().split("：")[1];

    if (userAnswer === correctAnswer) {
        answerElement.style.display = "block";
    } else {
        alert("回答错误！");
    }
}
