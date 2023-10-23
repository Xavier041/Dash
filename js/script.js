addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger')
    burger.addEventListener('click', function () {
        document.querySelector('header').classList.toggle('open')

    })
    const footBtn = document.getElementById('footerBtn')
    window.addEventListener('scroll', FootBtnShow)


    function FootBtnShow() {
        const offset = window.pageYOffset
        const coords = document.documentElement.clientHeight
        if (offset > coords) {
            footBtn.classList.add('show')
        } else {
            footBtn.classList.remove('show')
        }
    }
    document.getElementById('plusBtn').addEventListener('click', function () {
        document.getElementById('modalwin1').classList.toggle('openModalWin')
        document.getElementById('CompareSection').classList.toggle('blur')
    })
    document.getElementById('closeModal').addEventListener('click', function () {
        document.getElementById('modalwin1').classList.remove('openModalWin')
        document.getElementById('CompareSection').classList.remove('blur')
    })

    document.getElementById('plusBtn2').addEventListener('click', function () {
        document.getElementById('modalwin2').classList.toggle('openModalWin2')
        document.getElementById('CompareSection').classList.toggle('blur')
    })
    document.getElementById('closeModal2').addEventListener('click', function () {
        document.getElementById('modalwin2').classList.remove('openModalWin2')
        document.getElementById('CompareSection').classList.remove('blur')
    })

})
if (window.innerWidth > 995) {

    const linkContainers = document.querySelectorAll('.link-container ')

    linkContainers.forEach(function (linkContainer) {

        linkContainer.addEventListener('mouseenter', function () {
            const infoHead = this.querySelector('.info')
            infoHead.classList.toggle('hover')
        })
        linkContainer.addEventListener('mouseleave', function () {
            const infoHead = this.querySelector('.info')
            infoHead.classList.remove('hover')
        })
    })
}