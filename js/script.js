const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}
const sidebar = document.querySelector('#sidebar');
var openOption = "s1-t1"
const sidebarBtns = sidebar.querySelectorAll(".sidebar-options .btn")
sidebarBtns.forEach(function (sidebarBtn) {
    sidebarBtn.addEventListener('click', (evt) => {
        const id = evt.target.dataset.referenceId;
        // console.log(id);
        const content = document.querySelector(`#${id}`)
        const openContent = document.querySelector(`#${openOption}`)
        // console.log(content.className)
        openContent.className = `content-body`;
        content.className = `content-body active`;
        openOption = id;
    })
})
var openSidebarOption = "s1";
const sidebarOptions = sidebar.querySelectorAll("#sidebar .dropdown-content p")
sidebarOptions.forEach(function (sidebarOption) {
    sidebarOption.addEventListener('click', (evt) => {
        console.log('clicked')
        const id = evt.target.dataset.referenceId;
        // console.log(id);
        const options = document.querySelector(`#${id}`)
        const openOptions = document.querySelector(`#${openSidebarOption}`)
        // console.log(content.className)
        openOptions.className = `sidebar-options`;
        options.className = `sidebar-options active`;
        openSidebarOption = id;
    })
})