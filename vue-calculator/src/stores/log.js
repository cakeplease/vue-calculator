import {defineStore} from 'pinia';

export const useLogStore = defineStore('log', () => {
    const log = [];

    function clear() {
        this.log = [];
    }

    function add(equation) {
        if (isFinite(equation)) {
            log.push(equation);

        }
    }

    function getLastEquation() {
        return this.log.slice(-1);
    }

    return {log, clear, add, getLastEquation}
})