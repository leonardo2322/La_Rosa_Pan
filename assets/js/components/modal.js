export const modal = () => {
    const openModal = document.querySelectorAll('.shortcuts__items');
    const closeModal = document.querySelectorAll('.close-modal');
    let modalContent = null;
    let modalContainer = null;

    openModal.forEach((open) => {
        open.addEventListener('click', () => {
            const target = open.getAttribute('data-target');
            modalContent = document.getElementById(target);

            modalContainer = modalContent.closest('.modal-container');
            modalContainer.style.opacity = '1';
            modalContainer.style.visibility = 'visible';
        });
    });

    closeModal.forEach(close => {
        close.addEventListener('click', () => {
            modalContent.classList.toggle('modal-close');
            setTimeout(() => {
                modalContainer.style.opacity = '0';
                modalContainer.style.visibility = 'hidden';
                modalContent.classList.remove('modal-close')
            }, 500);
        })
    })

    window.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            modalContent.classList.toggle('modal-close');
            setTimeout(() => {
                modalContainer.style.opacity = '0';
                modalContainer.style.visibility = 'hidden';
            }, 500);
        }
    });
};