// 原生 JavaScript - 處理按鈕點擊事件與圖片載入
document.addEventListener('DOMContentLoaded', function() {
    // 防止按鈕點擊時觸發卡片連結
    const buttons = document.querySelectorAll('.card .btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            // 這裡可以添加按鈕的實際功能
            // 例如：window.open(url, '_blank');
        });
    });
    
    // 可選：為卡片添加點擊追蹤（如果需要）
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // 如果點擊的是按鈕，不執行卡片連結
            if (e.target.closest('.btn')) {
                return;
            }
            // 這裡可以添加分析追蹤代碼
        });
    });
    
    // 圖片載入完成後添加 loaded class，移除 loading 狀態
    const images = document.querySelectorAll('img[loading="lazy"]');
    const videos = document.querySelectorAll('video');
    
    images.forEach(img => {
        if (img.complete) {
            // 圖片已經載入完成
            img.classList.add('loaded');
        } else {
            // 監聽載入完成事件
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
            // 處理載入失敗的情況
            img.addEventListener('error', function() {
                this.classList.add('loaded'); // 即使失敗也移除 loading
            });
        }
    });
    
    videos.forEach(video => {
        if (video.readyState >= 2) {
            // 影片已經載入足夠的資料
            video.classList.add('loaded');
        } else {
            video.addEventListener('loadeddata', function() {
                this.classList.add('loaded');
            });
        }
    });
});