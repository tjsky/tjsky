const dateList = [
    '7/7', // 七七事变
    '9/18', // 九一八事变
    '12/13', // 国家公祭日
    '12/2', // 测试
]

// 自动开启哀悼模式
function autoEnableMourningMode() {
    const m = new Date().getMonth() + 1
    const d = new Date().getDate()
    const today = `${m}/${d}`
    if (dateList.some((date) => date === today)) {
        document.body.style.filter = 'grayscale(1)'
    }
}

window.addEventListener('load', () => {
    autoEnableMourningMode()
})
