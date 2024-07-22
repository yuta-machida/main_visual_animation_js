document.addEventListener('DOMContentLoaded', () => {
    const path = document.querySelector('#motionPath'); //path取得

    const leaves = [];
    let leafCount = 0;
    let delayTime = 0;

    while(leaves[leafCount] !== ""){
      leaves[leafCount] = document.querySelector(`#leaf${leafCount + 1}`); //idでimg要素取得
      leaves[leafCount].style.offsetPath = `path('${path.getAttribute('d')}')`; //img要素にpath軌道を設定
      leaves[leafCount].style.animationDelay = `${delayTime}s` //img要素ごとにanimation-delayを変化
      leafCount++;
      delayTime++;
      console.log(leaves[leafCount]);
    }
  });