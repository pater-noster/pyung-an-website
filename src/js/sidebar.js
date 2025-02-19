const sidebarMenuButton = document.querySelector('.gnb-menu-button.is-menu')

console.log(sidebarMenuButton)

const sidebar = document.querySelector('.sidebar')
const sidebarOverlay = document.querySelector('.overlay')

function openSidebar() {
  sidebar.classList.add('is-active')
  sidebarOverlay.classList.add('is-active')
}

sidebarMenuButton.addEventListener('click', openSidebar)

function closeSidebar() {
  sidebar.classList.remove('is-active')
  sidebarOverlay.classList.remove('is-active')
}

sidebarOverlay.addEventListener('click', closeSidebar)
