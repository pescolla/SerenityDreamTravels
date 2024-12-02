const slider_items = $('.slider-items li');
const nav_next = $('.slider-nav.next');
const nav_prev = $('.slider-nav.prev');

let selected_item = 0;

function setItemSlider(index) {
    selected_item = index;

    slider_items.each(function (idx) {
        let offset = idx - selected_item;
        if (offset < 0) offset += slider_items.length;

        for (let i = 0; i < slider_items.length + 1; i++) {

            $(this)
                .removeClass(`item-${i}`)
                .addClass(`item-${offset + 1}`)
        }
    })

}

slider_items.click(function () {
    setItemSlider($(this).index());
});

nav_next.click(function () {
    selected_item = selected_item < slider_items.length - 1 ? ++selected_item : 0;
    setItemSlider(selected_item);
})

nav_prev.click(function () {
    selected_item = selected_item >= 1 ? --selected_item : slider_items.length - 1;
    setItemSlider(selected_item);
})