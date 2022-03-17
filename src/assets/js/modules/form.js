export const formApp = {
    submit() {
        const form = document.getElementById('form');
        const overlay = document.getElementById('overlay');
        const closeModal = document.getElementById('closeModal');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            e.target.reset();
            $('#js-select').val(null).trigger('change');
            overlay.classList.add('show')
        });

        closeModal.addEventListener('click', (e) => {
            overlay.classList.remove('show')
        });
    },
    maskInput() {
        $('#phone').inputmask({
            mask: ['+380 (99) 999-99-99'],
            jitMasking: 3,
            showMaskOnHover: false,
            autoUnmask: true
        });
    },
    initSelect2() {
        $('#js-select').select2({
                placeholder: "Оберіть пункт"
            }
        );
    },
    allMethods() {
        this.submit()
        this.maskInput()
        this.initSelect2()
    }
}
