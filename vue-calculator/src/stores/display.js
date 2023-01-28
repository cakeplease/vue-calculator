import { defineStore } from 'pinia'

export const useDisplayStore = defineStore('display', () => {
    const display = "";
    function remove() {
        this.display = this.display.slice(0, -1);
    }
    function insert(text) {
        this.display += text;
    }
    function clear() {
        this.display = "";
    }

    function calculate() {
        this.display = eval(this.display).toString();
    }

    return { display, remove, insert, clear, calculate }
})
