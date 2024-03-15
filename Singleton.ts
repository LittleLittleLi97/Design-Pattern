// Hungry
class Singleton {
    private static instance: Singleton = new Singleton();
    private constructor(){

    }
    public static getInstance(): Singleton {
        return Singleton.instance;
    }
}

;(()=>{
    const a: Singleton = Singleton.getInstance();
    const b: Singleton = Singleton.getInstance();
    console.log(a === b);
})();

// Lazy
class Singleton2 {
    private static instance: Singleton2;
    private constructor(){

    }
    public static getInstance(): Singleton2 {
        if (!Singleton2.instance) Singleton2.instance = new Singleton2();
        return Singleton2.instance;
    }
}

;(()=>{
    const c: Singleton2 = Singleton2.getInstance();
    const d: Singleton2 = Singleton2.getInstance();
    console.log(c === d)
})();