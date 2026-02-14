// 原生 JavaScript - 處理按鈕點擊事件
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
});