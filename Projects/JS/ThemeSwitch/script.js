const themeIconContainer = document.querySelector(".theme-icon-container")

document.querySelector(".theme-toggle-button").addEventListener('click', () => {
    document.body.classList.toggle('dark')
    const currentRotation = parseInt(getComputedStyle(themeIconContainer).getPropertyValue('--rotation'))
    themeIconContainer.style.setProperty('--rotation', currentRotation + 180)
})
