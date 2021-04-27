
const Result = {
    after_render: () => {
        init(); 
        buttonClickEvent();
        
        function init(){
            const totalScoreLabel = document.getElementById("totalScore");
            const averageTimeLabel = document.getElementById("averageTimeLabel");
            let averageTime = 0;
            let sumTime = 0;
            // 입력 평균 값 계산 
            if(Array.isArray(clearWordList) &&clearWordList.length >0) {
                clearWordList.forEach(obj=>{
                    sumTime += obj.successTime;
                })
                averageTime = sumTime / clearWordList.length;
            }
            averageTimeLabel.innerHTML = averageTime.toFixed(2);

            totalScoreLabel.innerHTML = totalScore;
        }

        function buttonClickEvent() {
            document.getElementById("resultRestartButton").addEventListener ("click",  () => {
                location.href="/";
            });
        }
   }

}

export default Result;