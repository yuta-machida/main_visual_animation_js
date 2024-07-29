document.addEventListener('DOMContentLoaded', () => {

    const imageContainer = document.querySelector('.main-visual');
    const imageSources = [
      './img/leaf-1.png',
      './img/leaf-2.png',
      './img/leaf-3.png',
      './img/leaf-4.png',
      './img/leaf-5.png'
    ]
    
    const applyAnimation = () =>{
      const isPC = window.matchMedia("(min-width: 1024px)").matches;
      const pathId = isPC ? 'animationPath_pc' : 'animationPath_sp';
      const path = document.querySelector(`#${pathId}`);
      const imageCount = isPC ? 15 : 7;
      let delayTime = 0;

      //既存のimg要素を削除
      imageContainer.innerHTML = '';
      
      for(let i = 1;i <= imageCount;i++){
        //img要素の生成
        const img = document.createElement('img');
        img.src = imageSources[(i - 1) % imageSources.length];
        img.alt = `葉っぱ画像${(i - 1) % imageSources.length + 1}`;
        img.className = 'leaf animationPath';
        
        if((i - 1) % 3 == 0){
          img.style.width = '96px';
        }else if((i- 1) % 2 == 0){
          img.style.width = '56px';
        }
        //アニメーション付与
        img.style.offsetPath = `path('${path.getAttribute('d')}')`; //img要素にpath軌道を設定
        img.style.animationDelay = `${delayTime}s`;
        
        imageContainer.appendChild(img);
        
        delayTime++;
      
    }
  }

  function debounce(func,wait){
    let timeout;
    return function(...args){
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this,args),wait);
    };
  }

  const thresholdWidth = 1024;
  
  const checkWidth = debounce(() => {
    //現在の画面幅を取得
    const currentWidth = window.innerWidth;
    if(currentWidth == thresholdWidth){
      applyAnimation();
    }
  },200);
  //画面サイズが変更されたときにアニメーションを再設定
  window.addEventListener('resize',checkWidth);


  //初回実行
  applyAnimation();
});