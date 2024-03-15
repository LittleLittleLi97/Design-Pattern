class Observer {
    constructor() {
        this.eventTable = {};
    }

    $on(event, callback) {
        if (!this.eventTable[event]) this.eventTable[event] = [];
        this.eventTable[event].push(callback);
    }
    $emit(event) {
        var list = this.eventTable[event];
        if (list) {
            list.forEach((callback)=>{callback()});
        }
    }
    $off(event, callback) {
        if (this.eventTable[event]) {
            this.eventTable[event] = this.eventTable[event].filter((item)=>item != callback);
        }
    }
}

const ob = new Observer();
function goEvent() {
    console.log('go event');
}
ob.$on('go', goEvent);
ob.$off('go', goEvent);
ob.$emit('go');