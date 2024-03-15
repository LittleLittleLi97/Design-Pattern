abstract class AbstractDisplay {
    public abstract open(): void;
    public abstract print(): void;
    public abstract close(): void;
    public display(): void {
        this.open();
        this.print();
        this.close();
    }
}

class StarDisplay extends AbstractDisplay {
    private str: string;
    constructor(str: string) {
        super();
        this.str = str;
    }
    public open(): void {
        console.log('*');
    }
    public print(): void {
        console.log(this.str);
    }
    public close(): void {
        console.log('*');
    }
}

class BracketRepeatDisplay extends AbstractDisplay {
    private str: string;
    private repeat: number;
    constructor(str: string, repeat: number) {
        super();
        this.str = str;
        this.repeat = repeat;
    }
    public open(): void {
        console.log('(');
    }
    public print(): void {
        for (let i = 0; i < this.repeat; i++) console.log(this.str);
    }
    public close(): void {
        console.log(')');
    }
}

;(()=>{
    const a: AbstractDisplay = new StarDisplay('hello');
    a.display();
    const b: AbstractDisplay = new BracketRepeatDisplay('go', 3);
    b.display();
})();
